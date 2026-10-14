/**
 * CUBAFOOD public sitemap.
 *
 * Derive public static routes from the TanStack file routes; include only
 * JOURNAL_POSTS marked PUBLISHED. Never invent dates or duplicate URLs for
 * the client-side FR/EN/ES language selector.
 *
 * Generate: bun run sitemap:generate
 * Validate: bun run sitemap:check
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { JOURNAL_POSTS } from "../src/content/journal.ts";

const BASE = "https://cubafood.ca";
const routesDir = fileURLToPath(new URL("../src/routes/", import.meta.url));
const destination = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));

function normalizedRoute(file) {
  if (!file.endsWith(".tsx") || file.startsWith("_") || file.includes("$")) {
    return null;
  }

  const parts = file.slice(0, -4).split(".");
  if (parts[parts.length - 1] === "index") parts.pop();
  return parts.length ? "/" + parts.join("/") : "/";
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const files = await readdir(routesDir);
const paths = files.map(normalizedRoute).filter((path) => path !== null);

for (const post of JOURNAL_POSTS) {
  if (post.status !== "PUBLISHED") continue;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    throw new Error("Published journal slug is invalid for a public URL");
  }
  paths.push("/journal/" + post.slug);
}

const unique = [...new Set(paths)].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

if (unique.length !== paths.length) {
  throw new Error("Duplicate public route detected while building sitemap");
}
if (!unique.includes("/journal/site-documentation-matanzas")) {
  throw new Error("Published Matanzas field record missing from the sitemap");
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...unique.map((path) => "  <url><loc>" + xmlEscape(BASE + path) + "</loc></url>"),
  "</urlset>",
  "",
];

const expected = lines.join("\n");

if (process.argv.includes("--check")) {
  const actual = await readFile(destination, "utf8").catch(() => "");
  if (expected !== actual) {
    console.error("public/sitemap.xml is stale. Run: bun run sitemap:generate");
    process.exitCode = 1;
  } else {
    console.log("Sitemap up to date: " + unique.length + " public URLs.");
  }
} else {
  await writeFile(destination, expected, "utf8");
  console.log("Generated public/sitemap.xml: " + unique.length + " public URLs.");
}
