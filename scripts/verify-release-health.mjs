import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** A public health response must identify the exact intended GitHub build. */
export function isExpectedReleaseHealth(raw, expectedSha) {
  if (typeof expectedSha !== "string" || !/^[a-f0-9]{40}$/.test(expectedSha)) return false;
  try {
    const response = typeof raw === "string" ? JSON.parse(raw) : raw;
    return response !== null && typeof response === "object" && !Array.isArray(response)
      && response.ok === true
      && response.service === "cubafood-web"
      && response.release_sha === expectedSha;
  } catch {
    return false;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [, , filename, expectedSha] = process.argv;
  if (!filename || !expectedSha) {
    console.error("Usage: node scripts/verify-release-health.mjs RESPONSE_FILE EXPECTED_SHA");
    process.exitCode = 2;
  } else {
    let raw = null;
    try { raw = readFileSync(filename, "utf8"); } catch { /* Missing responses fail closed. */ }
    if (isExpectedReleaseHealth(raw, expectedSha)) {
      console.log("CUBAFOOD public release verified: " + expectedSha);
    } else {
      console.error("Public /healthz does not match the intended CUBAFOOD release.");
      process.exitCode = 1;
    }
  }
}
