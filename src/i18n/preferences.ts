/** Browser storage may throw even while reading the localStorage property. */
export const LANGS = ["en", "es", "fr"] as const;
export type Lang = (typeof LANGS)[number];

const STORAGE_KEY = "cubafood-lang";

export function readStoredLanguage(getStorage: () => Pick<Storage, "getItem">): Lang | null {
  try {
    const lang = getStorage().getItem(STORAGE_KEY);
    return lang === "en" || lang === "es" || lang === "fr" ? lang : null;
  } catch {
    return null;
  }
}

export function persistLanguage(lang: Lang, getStorage: () => Pick<Storage, "setItem">): void {
  try {
    getStorage().setItem(STORAGE_KEY, lang);
  } catch {
    // The UI keeps the in-memory choice when privacy settings deny storage.
  }
}
