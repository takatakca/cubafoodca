import test from "node:test";
import assert from "node:assert/strict";
import { isExpectedReleaseHealth } from "./verify-release-health.mjs";

const sha = "0123456789abcdef0123456789abcdef01234567";
const valid = { ok: true, service: "cubafood-web", release_sha: sha };

test("accept exact release", () => assert.equal(isExpectedReleaseHealth(JSON.stringify(valid), sha), true));
test("reject stale public build", () => assert.equal(isExpectedReleaseHealth(valid, "abcdef0123456789abcdef0123456789abcdef01"), false));
test("reject former unversioned health response", () => assert.equal(isExpectedReleaseHealth({ ok: true, service: "cubafood-web" }, sha), false));
test("reject wrong service or failure", () => {
  assert.equal(isExpectedReleaseHealth({ ...valid, service: "other" }, sha), false);
  assert.equal(isExpectedReleaseHealth({ ...valid, ok: false }, sha), false);
});
test("reject invalid sha and malformed or absent payload", () => {
  assert.equal(isExpectedReleaseHealth(valid, "main"), false);
  assert.equal(isExpectedReleaseHealth("not-json", sha), false);
  assert.equal(isExpectedReleaseHealth(null, sha), false);
});
