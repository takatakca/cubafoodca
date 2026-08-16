import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n, LANGS, LANG_LABELS } from "@/i18n";
import { PRIMARY_NAV, SECONDARY_NAV, SITE, UI } from "@/content/site";
import { cn } from "@/lib/utils";

function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={cn("flex items-center gap-1", className)} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={LANG_LABELS[l]}
          className={cn(
            "eyebrow min-h-9 rounded-full px-2.5 py-1.5 transition-colors",
            lang === l ? "bg-current/15" : "opacity-55 hover:opacity-100",
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:text-charcoal"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || !isHome ? "bg-charcoal/95 text-cream backdrop-blur" : "bg-transparent text-cream",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
          <Link to="/" className="display text-lg tracking-tight md:text-xl" aria-label={SITE.name}>
            CUBAFOOD<span className="text-secondary">.CA</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow py-2 opacity-70 transition-opacity hover:opacity-100"
                activeProps={{ className: "eyebrow py-2 opacity-100 text-secondary" }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:flex" />
            <Link
              to="/participate"
              className="eyebrow hidden min-h-10 items-center rounded-full bg-secondary px-5 py-2.5 text-secondary-foreground transition-colors hover:bg-secondary/90 md:inline-flex"
            >
              {t(UI.join)}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-current/25 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform",
                    open && "translate-y-[6px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform",
                    open && "-translate-y-[6px] -rotate-45",
                  )}
                />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="eyebrow hidden min-h-10 items-center rounded-full border border-current/25 px-4 py-2.5 lg:inline-flex"
            >
              {open ? "Close" : "More"}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-charcoal pt-20 text-cream">
          <div className="shell pb-24">
            <nav className="border-t border-cream/15" aria-label="Mobile primary">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="display block border-b border-cream/15 py-5 text-3xl transition-colors hover:text-secondary md:text-5xl"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SECONDARY_NAV.map((group) => (
                <div key={group.group.en}>
                  <p className="eyebrow text-secondary">{t(group.group)}</p>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to} className="text-sm opacity-75 transition-opacity hover:opacity-100">
                          {t(item.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/participate"
                className="eyebrow inline-flex min-h-12 items-center rounded-full bg-secondary px-6 py-3.5 text-secondary-foreground"
              >
                {t(UI.join)}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
