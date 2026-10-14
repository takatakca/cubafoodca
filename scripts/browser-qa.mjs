import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function until(check, label, limitMs = 12000) {
  const started = Date.now();
  let last;
  while (Date.now() - started < limitMs) {
    try { if (await check()) return; } catch (error) { last = error; }
    await delay(150);
  }
  throw new Error(`Browser timeout: ${label}${last ? ` (${last.message})` : ""}`);
}

async function withChrome(callback) {
  const options = [process.env.CHROME_BINARY, "google-chrome", "chromium", "chromium-browser"].filter(Boolean);
  const binary = options.find((item) => spawnSync("which", [item]).status === 0);
  assert.ok(binary, "Chrome/Chromium is required for interactive QA");
  const profile = await mkdtemp(join(tmpdir(), "cubafood-browser-"));
  const chrome = spawn(binary, [
    "--headless=new", "--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu",
    "--no-first-run", "--no-default-browser-check", "--remote-allow-origins=*",
    "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank",
  ], { stdio: "ignore" });
  let socket;
  try {
    let port;
    await until(async () => {
      const lines = (await readFile(join(profile, "DevToolsActivePort"), "utf8")).split("\n");
      port = Number(lines[0]);
      return Number.isInteger(port) && port > 0;
    }, "Chrome DevTools port", 15000);
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    const page = targets.find((item) => item.type === "page");
    assert.ok(page?.webSocketDebuggerUrl, "Browser page target is missing");
    socket = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });
    let id = 0;
    const pending = new Map();
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const requestId = ++id;
      pending.set(requestId, { resolve, reject });
      socket.send(JSON.stringify({ id: requestId, method, params }));
    });
    const evaluate = async (expression) => {
      const reply = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
      if (reply.exceptionDetails) throw new Error("Browser JavaScript evaluation failed");
      return reply.result?.value;
    };
    await send("Page.enable");
    await send("Runtime.enable");
    await callback({ send, evaluate });
  } finally {
    socket?.close();
    chrome.kill("SIGTERM");
    await new Promise((resolve) => {
      if (chrome.exitCode !== null) return resolve();
      chrome.once("exit", resolve);
      setTimeout(() => { chrome.kill("SIGKILL"); resolve(); }, 1800).unref();
    });
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }).catch(() => {});
  }
}

async function runQA(baseUrl) {
  const origin = new URL(baseUrl).origin;
  assert.equal(origin, "https://cubafood.ca", "Browser QA runs only against public CUBAFOOD.CA");
  const sha = process.env.CUBAFOOD_EXPECTED_SHA;
  if (sha) {
    const health = await (await fetch(`${origin}/healthz`, { cache: "no-store" })).json();
    if (health.release_sha !== sha) {
      console.log("Skipping browser QA for superseded release; active SHA differs.");
      return;
    }
  }
  await withChrome(async ({ send, evaluate }) => {
    const navigate = async (path) => {
      const result = await send("Page.navigate", { url: `${origin}${path}` });
      assert.ok(!result.errorText, `Cannot navigate to ${path}: ${result.errorText}`);
      await until(() => evaluate(`location.pathname === ${JSON.stringify(path)} && document.readyState === "complete"`), `page ${path}`);
      await until(() => evaluate('document.body?.textContent.includes("CUBAFOOD")'), `CUBAFOOD content on ${path}`);
      await delay(550);
    };
    const click = async (expression, label) =>
      assert.ok(await evaluate(expression), `Browser action unavailable: ${label}`);
    const openLanguage = async (label) =>
      click(`(() => { const b = [...document.querySelectorAll("button")].find(b => b.getAttribute("aria-label") === ${JSON.stringify(label)}); if (!b) return false; b.click(); return true; })()`, label);
    const chooseLanguage = async (name) => {
      await until(() => evaluate(`[...document.querySelectorAll("button")].some(b => b.textContent.trim().includes(${JSON.stringify(name)}))`), `option ${name}`);
      await click(`(() => { const b = [...document.querySelectorAll("button")].find(b => b.textContent.trim().includes(${JSON.stringify(name)})); if (!b) return false; b.click(); return true; })()`, name);
    };
    await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    await navigate("/cuba");
    await openLanguage("Langue");
    await chooseLanguage("Español");
    await until(() => evaluate('document.documentElement.lang === "es"'), "Spanish selection");
    await openLanguage("Idioma");
    await chooseLanguage("English");
    await until(() => evaluate('document.documentElement.lang === "en"'), "English selection");

    // Native required constraint must prevent advancing an empty first step.
    await click('(() => { const b = [...document.querySelectorAll("form button")].find(b => b.textContent.trim() === "Continue"); if (!b) return false; b.click(); return true; })()', "form Continue");
    await delay(300);
    assert.ok(await evaluate('document.querySelector("form")?.textContent.includes("1 / 3")'), "Empty required name advanced unexpectedly");
    await click('(() => { const input = document.querySelector("form input[required]"); if (!input) return false; Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(input, "Browser QA"); input.dispatchEvent(new Event("input", { bubbles: true })); return true; })()', "fill first name");
    await click('(() => { const b = [...document.querySelectorAll("form button")].find(b => b.textContent.trim() === "Continue"); if (!b) return false; b.click(); return true; })()', "valid Continue");
    await until(() => evaluate('document.querySelector("form")?.textContent.includes("2 / 3")'), "validated second step");
    // Never advance to the final submit step and never send a POST.
    await click('(() => { const a = document.querySelector("a[href=\"/project\"]"); if (!a) return false; a.click(); return true; })()', "project navigation");
    await until(() => evaluate('location.pathname === "/project"'), "project route");
    assert.equal(await evaluate("document.documentElement.lang"), "en", "Language lost after navigation");

    await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await navigate("/participate");
    const overflow = await evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth");
    assert.ok(overflow <= 8, `Mobile horizontal overflow: ${overflow}px`);
    await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
    await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
    await until(() => evaluate("document.activeElement && document.activeElement !== document.body"), "keyboard focus");

    // Denied storage in a fresh document must not disable switching languages.
    await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    await send("Page.addScriptToEvaluateOnNewDocument", {
      source: "Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });",
    });
    await navigate("/cuba");
    await openLanguage("Langue");
    await chooseLanguage("Español");
    await until(() => evaluate('document.documentElement.lang === "es"'), "language switch with denied storage");
    console.log("CUBAFOOD browser QA PASS: language, required step, navigation, mobile, keyboard, blocked storage; no submissions");
  });
}

if (process.argv[1]?.endsWith("/browser-qa.mjs")) {
  runQA(process.argv[2]).catch((error) => {
    console.error("CUBAFOOD browser QA FAILED:", error.message);
    process.exitCode = 1;
  });
}
