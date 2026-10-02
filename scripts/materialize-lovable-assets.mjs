import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src", "assets");
const publicRoot = path.join(root, "public");
const baseUrl = (process.env.LOVABLE_ASSET_BASE_URL || "https://cubafoodca.lovable.app").replace(/\/$/, "");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && entry.name.endsWith(".asset.json")) out.push(full);
  }
  return out;
}

async function existsWithBytes(file) {
  try {
    return (await stat(file)).size > 0;
  } catch {
    return false;
  }
}

const pointerFiles = await walk(sourceRoot);
let downloaded = 0;
let existing = 0;

for (const pointerFile of pointerFiles) {
  const pointer = JSON.parse(await readFile(pointerFile, "utf8"));
  const urlPath = String(pointer.url || "");

  if (!urlPath.startsWith("/__l5e/assets-v1/")) {
    throw new Error(`Refusing unexpected Lovable asset URL in ${pointerFile}: ${urlPath}`);
  }

  const segments = urlPath.split("/").filter(Boolean);
  if (segments.some((segment) => segment === "." || segment === "..")) {
    throw new Error(`Unsafe path in ${pointerFile}: ${urlPath}`);
  }

  const destination = path.join(publicRoot, ...segments);
  if (await existsWithBytes(destination)) {
    existing += 1;
    continue;
  }

  const remoteUrl = `${baseUrl}${urlPath}`;
  console.log(`[assets] downloading ${remoteUrl}`);
  const response = await fetch(remoteUrl, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Failed to download ${remoteUrl}: HTTP ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (pointer.size && bytes.length !== Number(pointer.size)) {
    console.warn(
      `[assets] size differs for ${urlPath}: pointer=${pointer.size}, downloaded=${bytes.length}`,
    );
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  downloaded += 1;
}

console.log(
  `[assets] complete: ${pointerFiles.length} pointers, ${downloaded} downloaded, ${existing} already present`,
);
