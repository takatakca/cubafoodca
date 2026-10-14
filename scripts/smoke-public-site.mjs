import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import assert from "node:assert/strict";

const FORM_ROUTES = ["/cuba", "/canada", "/farmers", "/volunteer"];
const UNPUBLISHED = "/journal/cubafood-nonexistent-article-smoke-check";

/** This sitemap is generated from verified published routes during CI. */
export function sitemapUrls(xml, origin) {
  assert.match(xml, /<urlset\b/i, "Sitemap is not an XML urlset");
  const found = [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].replaceAll("&amp;", "&"));
  assert.ok(found.length > 0, "Sitemap has no public URLs");
  assert.equal(new Set(found).size, found.length, "Sitemap has duplicate URLs");
  for (const raw of found) {
    const url = new URL(raw);
    assert.equal(url.origin, origin, "Sitemap must not point to a foreign host");
    assert.equal(url.search, "", "Sitemap URL must not contain query values");
    assert.equal(url.hash, "", "Sitemap URL must not contain fragments");
  }
  return found;
}

export async function checkPublishedSite({
  baseUrl,
  expectedSitemapXml,
  fetchImpl = fetch,
  formRoutes = FORM_ROUTES,
  unpublishedPath = UNPUBLISHED,
  minPages = 25,
}) {
  const origin = new URL(baseUrl).origin;
  assert.equal(origin, "https://cubafood.ca", "Production audit must target CUBAFOOD.CA only");

  const request = async (path) => {
    const address = new URL(path, origin);
    const res = await fetchImpl(address.toString(), {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(35000),
      headers: { Accept: "text/html,application/xml,text/plain;q=0.9" },
    });
    if (res.url) {
      assert.equal(new URL(res.url).origin, origin, "Unexpected cross-origin redirect");
    }
    return res;
  };

  const robots = await request("/robots.txt");
  assert.equal(robots.status, 200, "Public robots.txt failed");
  assert.match(await robots.text(), /Sitemap:\s*https:\/\/cubafood\.ca\/sitemap\.xml/i);

  const response = await request("/sitemap.xml");
  assert.equal(response.status, 200, "Public sitemap.xml failed");
  const expectedUrls = sitemapUrls(expectedSitemapXml, origin);
  const servedUrls = sitemapUrls(await response.text(), origin);
  assert.deepEqual(servedUrls, expectedUrls, "Public sitemap differs from this release");
  assert.ok(servedUrls.length >= minPages, "Unexpectedly small sitemap");

  const formSet = new Set(formRoutes);
  const pages = [];
  // Limit parallelism on the shared hosting account; no POST/INSERT is issued.
  for (let i = 0; i < servedUrls.length; i += 3) {
    const group = servedUrls.slice(i, i + 3);
    const results = await Promise.all(group.map(async (url) => {
      const path = new URL(url).pathname;
      const res = await request(path);
      assert.equal(res.status, 200, `Public page ${path} returned ${res.status}`);
      assert.match(res.headers.get("content-type") ?? "", /text\/html/i, `Expected HTML at ${path}`);
      const html = await res.text();
      assert.match(html, /<html\b/i, `Missing document shell at ${path}`);
      assert.match(html, /<title\b/i, `Missing page title at ${path}`);
      if (formSet.has(path)) {
        assert.match(html, /<form(?:\s|>)/i, `Missing SSR form at ${path}`);
        assert.match(html, /\brequired(?:=|\s|>)/i, `No required field at ${path}`);
      }
      return path;
    }));
    pages.push(...results);
  }
  for (const path of formSet) assert.ok(pages.includes(path), `Form route absent from sitemap: ${path}`);

  const unpublished = await request(unpublishedPath);
  assert.equal(unpublished.status, 404, "Unknown journal entry must return actual HTTP 404");
  return { verifiedPages: pages.length, forms: [...formSet], unpublishedStatus: unpublished.status };
}

async function main() {
  const baseUrl = process.argv[2];
  if (baseUrl !== "https://cubafood.ca") {
    console.error("Usage: node scripts/smoke-public-site.mjs https://cubafood.ca");
    process.exitCode = 2;
    return;
  }
  const expectedSitemapXml = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const result = await checkPublishedSite({ baseUrl, expectedSitemapXml });
  console.log(`CUBAFOOD smoke PASS: ${result.verifiedPages} published pages, ${result.forms.length} public forms (read-only), unknown article HTTP ${result.unpublishedStatus}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("CUBAFOOD public smoke check FAILED:", error.message);
    process.exitCode = 1;
  });
}
