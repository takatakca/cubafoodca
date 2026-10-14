import { test, expect } from "bun:test";
import { readStoredLanguage, persistLanguage } from "../src/i18n/preferences.ts";

test("supported stored languages", () => {
  for (const lang of ["fr", "en", "es"]) {
    expect(readStoredLanguage(() => ({ getItem: () => lang }))).toBe(lang);
  }
});
test("invalid and absent preferences fall back safely", () => {
  expect(readStoredLanguage(() => ({ getItem: () => "pt" }))).toBeNull();
  expect(readStoredLanguage(() => ({ getItem: () => null }))).toBeNull();
});
test("storage property and reads may be denied", () => {
  expect(readStoredLanguage(() => { throw new Error("SecurityError"); })).toBeNull();
  expect(readStoredLanguage(() => ({ getItem: () => { throw new Error("blocked"); } }))).toBeNull();
});
test("persist permitted language", () => {
  let value = "";
  persistLanguage("es", () => ({ setItem: (key, lang) => { value = key + "=" + lang; } }));
  expect(value).toBe("cubafood-lang=es");
});
test("storage property and writes may be denied", () => {
  expect(() => persistLanguage("en", () => { throw new Error("SecurityError"); })).not.toThrow();
  expect(() => persistLanguage("fr", () => ({ setItem: () => { throw new Error("blocked"); } }))).not.toThrow();
});
