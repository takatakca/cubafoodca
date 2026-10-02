import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const LANGS = ["en", "es", "fr"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

/** A piece of content in the three project languages. `es` and `fr` fall back to `en`. */
export type T = { en: string; es?: string; fr?: string };

const STORAGE_KEY = "cubafood-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (value: T | string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && LANGS.includes(stored)) {
      setLangState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2).toLowerCase();
    if (nav === "es" || nav === "fr") setLangState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (value: T | string) => (typeof value === "string" ? value : (value[lang] ?? value.en)),
    [lang],
  );

  const ctx = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={ctx}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
