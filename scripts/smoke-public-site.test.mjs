import test from "node:test";
import assert from "node:assert/strict";
import { checkPublishedSite, sitemapUrls } from "./smoke-public-site.mjs";

const home = "https://cubafood.ca";
const paths = ["/", "/cuba", "/canada", "/farmers", "/volunteer"];
const xml = (items) =>
  '<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  items.map((item) => `<url><loc>${home}${item}</loc></url>`).join("") + "</urlset>";
const fixtureXml = xml(paths);
const page = '<!doctype html><html lang="fr"><head><title>CUBAFOOD.CA</title></head><body><form><input required></form></body></html>';
const fakeFetch = (overrides = {}) => async (url) => {
  const pathname = new URL(url).pathname;
  if (pathname in overrides) return overrides[pathname];
  if (pathname === "/robots.txt") return new Response("User-agent: *\nSitemap: https://cubafood.ca/sitemap.xml", { status: 200 });
  if (pathname === "/sitemap.xml") return new Response(fixtureXml, { status: 200 });
  if (pathname.startsWith("/journal/")) return new Response("Missing", { status: 404 });
  return new Response(page, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
};

const opts = { baseUrl: home, expectedSitemapXml: fixtureXml, minPages: 5 };
test("audits published routes/forms without ever sending POST", async () => {
  const result = await checkPublishedSite({ ...opts, fetchImpl: fakeFetch() });
  assert.equal(result.verifiedPages, 5);
  assert.equal(result.unpublishedStatus, 404);
  assert.equal(result.forms.length, 4);
});
test("reject duplicate and foreign sitemap URLs", () => {
  assert.throws(() => sitemapUrls(xml(["/", "/"]), home), /duplicate/i);
  assert.throws(() => sitemapUrls('<urlset><url><loc>https://outside.example/</loc></url></urlset>', home), /foreign/i);
});
test("detects a stale published sitemap", async () => {
  await assert.rejects(checkPublishedSite({
    ...opts,
    fetchImpl: fakeFetch({ "/sitemap.xml": new Response(xml(["/"]), { status: 200 }) }),
  }), /differs/i);
});
test("detects soft 404 for unpublished content", async () => {
  await assert.rejects(checkPublishedSite({
    ...opts,
    fetchImpl: fakeFetch({ "/journal/cubafood-nonexistent-article-smoke-check": new Response(page, { status: 200 }) }),
  }), /404/i);
});
test("detects a missing required registration field", async () => {
  await assert.rejects(checkPublishedSite({
    ...opts,
    fetchImpl: fakeFetch({ "/cuba": new Response(page.replace(" required", ""), { status: 200, headers: { "content-type": "text/html" } }) }),
  }), /required/i);
});
test("rejects accidental nonproduction target", async () => {
  await assert.rejects(checkPublishedSite({
    ...opts, baseUrl: "http://localhost:3000", fetchImpl: fakeFetch(),
  }), /CUBAFOOD\.CA/i);
});
