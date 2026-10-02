import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Check, Globe, Loader2, Mail, MessageCircle, Smartphone, User, Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useI18n, LANGS, type Lang, type T } from "@/i18n";
import { PRIMARY_NAV, SITE, UI } from "@/content/site";
import { takatakAuth, type AuthMethod, type AuthState } from "@/lib/takatak-auth";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const LANG_MENU: Record<Lang, { flag: string; name: string }> = {
  fr: { flag: "🇨🇦", name: "Français" },
  en: { flag: "🇬🇧", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
};
const LANG_ORDER: Lang[] = ["fr", "en", "es"].filter((l) => LANGS.includes(l as Lang)) as Lang[];

const A = {
  language: { en: "Language", es: "Idioma", fr: "Langue" },
  signIn: { en: "Sign in", es: "Conexión", fr: "Connexion" },
  intro: {
    en: "Sign in to take part in the project",
    es: "Conéctate para participar en el proyecto",
    fr: "Connectez-vous pour participer au projet",
  },
  google: { en: "Continue with Google", es: "Continuar con Google", fr: "Continuer avec Google" },
  email: { en: "Continue with email", es: "Continuar por correo", fr: "Continuer par courriel" },
  sms: { en: "Sign in / SMS verification", es: "Conexión / verificación SMS", fr: "Connexion / vérification SMS" },
  smsSub: {
    en: "Verification code after sign-in",
    es: "Código de verificación después de conectarte",
    fr: "Code de vérification après connexion",
  },
  create: { en: "Create an account", es: "Crear una cuenta", fr: "Créer un compte" },
  connecting: { en: "Connecting…", es: "Conectando…", fr: "Connexion…" },
  notConfigured: {
    en: "Accounts open soon through TAKATAK AUTH. Nothing was sent and no account was created.",
    es: "Las cuentas abrirán pronto mediante TAKATAK AUTH. No se envió nada ni se creó ninguna cuenta.",
    fr: "Les comptes ouvriront bientôt via TAKATAK AUTH. Rien n'a été envoyé et aucun compte n'a été créé.",
  },
  expired: { en: "Session expired", es: "Sesión expirada", fr: "Session expirée" },
  reconnect: { en: "Reconnect", es: "Reconectar", fr: "Se reconnecter" },
  back: { en: "Back", es: "Volver", fr: "Retour" },
  meanwhile: {
    en: "Meanwhile, you can already register your interest.",
    es: "Mientras tanto, ya puedes registrar tu interés.",
    fr: "En attendant, vous pouvez déjà signaler votre intérêt.",
  },
  account: { en: "Account", es: "Cuenta", fr: "Compte" },
  menu: { en: "Menu", es: "Menú", fr: "Menu" },
  close: { en: "Close", es: "Cerrar", fr: "Fermer" },
  explore: { en: "Explore", es: "Explorar", fr: "Explorer" },
} satisfies Record<string, T>;

const MORE: { to: string; label: T }[] = [
  { to: "/cuba", label: { en: "Cuba", es: "Cuba", fr: "Cuba" } },
  { to: "/canada", label: { en: "Canada", es: "Canadá", fr: "Canada" } },
  { to: "/collaboration", label: { en: "Collaboration", es: "Colaboración", fr: "Collaboration" } },
  { to: "/training", label: { en: "Training", es: "Formación", fr: "Formation" } },
  { to: "/energy", label: { en: "Energy", es: "Energía", fr: "Énergie" } },
  { to: "/agroecology", label: { en: "Agroecology", es: "Agroecología", fr: "Agroécologie" } },
  { to: "/needs", label: { en: "Equipment needs", es: "Necesidades de equipos", fr: "Besoins en équipement" } },
  { to: "/locations/matanzas", label: { en: "Matanzas", es: "Matanzas", fr: "Matanzas" } },
];

const pill =
  "inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-current/25 px-3.5 text-sm font-medium transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-2";

function LanguageMenu() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={pill} aria-label={t(A.language)}>
        <Globe className="h-4 w-4" aria-hidden />
        <span className="eyebrow">{lang.toUpperCase()}</span>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={10} className="w-56 rounded-2xl border-border bg-card p-2 text-card-foreground shadow-[var(--shadow-plate)]">
        <p className="eyebrow px-3 pb-2 pt-1.5 text-muted-foreground">{t(A.language)}</p>
        {LANG_ORDER.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => {
              setLang(l);
              setOpen(false);
            }}
            aria-pressed={lang === l}
            className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors hover:bg-muted"
          >
            <span aria-hidden className="text-base">{LANG_MENU[l].flag}</span>
            <span className="flex-1">{LANG_MENU[l].name}</span>
            {lang === l ? <Check className="h-4 w-4 text-secondary" aria-hidden /> : null}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h6c-.3 1.4-1 2.5-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2.1v2.8C3.9 20.5 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.7 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1V7.1H2.1C1.4 8.6 1 10.2 1 12s.4 3.4 1.1 4.9l3.6-2.8z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.1-3.1C17.5 2.1 15 1 12 1 7.7 1 3.9 3.5 2.1 7.1l3.6 2.8C6.6 7.4 9.1 5.4 12 5.4z" />
    </svg>
  );
}

function AccountMenu({ compact }: { compact?: boolean }) {
  const { t } = useI18n();
  const [state, setState] = useState<AuthState>({ status: "signed_out" });

  const start = async (method: AuthMethod) => {
    setState({ status: "authenticating", method });
    setState(await takatakAuth.start(method));
  };

  const row =
    "flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-colors hover:bg-muted disabled:opacity-50";
  const busy = state.status === "authenticating";
  const spin = (m: AuthMethod) => busy && state.method === m;

  return (
    <Popover onOpenChange={(o) => !o && state.status !== "authenticated" && setState({ status: "signed_out" })}>
      <PopoverTrigger className={pill} aria-label={t(A.signIn)}>
        <User className="h-4 w-4" aria-hidden />
        {compact ? null : <span>{state.status === "authenticated" ? state.displayName : t(A.signIn)}</span>}
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={10} className="w-[min(330px,calc(100vw-2rem))] rounded-2xl border-border bg-card p-3 text-card-foreground shadow-[var(--shadow-plate)]">
        <div className="px-2 pb-3 pt-1">
          <p className="display text-lg tracking-tight">
            CUBAFOOD<span className="text-secondary">.CA</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t(A.intro)}</p>
        </div>

        {state.status === "not_configured" ? (
          <div className="space-y-3 px-2 pb-1">
            <div className="flex gap-3 rounded-xl bg-muted p-3 text-sm">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <p>{t(A.notConfigured)}</p>
            </div>
            <p className="text-xs text-muted-foreground">{t(A.meanwhile)}</p>
            <div className="flex gap-2">
              <Link to="/participate" className="eyebrow inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-secondary px-4 text-secondary-foreground">
                {t(UI.join)}
              </Link>
              <button type="button" onClick={() => setState({ status: "signed_out" })} className="eyebrow min-h-11 rounded-full border border-border px-4">
                {t(A.back)}
              </button>
            </div>
          </div>
        ) : state.status === "session_expired" ? (
          <div className="space-y-3 px-2">
            <p className="text-sm">{t(A.expired)}</p>
            <button type="button" onClick={() => setState({ status: "signed_out" })} className="eyebrow min-h-11 w-full rounded-full bg-primary text-primary-foreground">
              {t(A.reconnect)}
            </button>
          </div>
        ) : (
          <div className="space-y-1">
            <button type="button" disabled={busy} onClick={() => start("google")} className={cn(row, "border-2 border-foreground font-semibold")}>
              {spin("google") ? <Loader2 className="h-5 w-5 animate-spin" /> : <GoogleMark />}
              {t(A.google)}
            </button>
            <button type="button" disabled={busy} onClick={() => start("email")} className={row}>
              {spin("email") ? <Loader2 className="h-5 w-5 animate-spin" /> : <Mail className="h-5 w-5 text-secondary" aria-hidden />}
              {t(A.email)}
            </button>
            <button type="button" disabled={busy} onClick={() => start("sms")} className={cn(row, "py-2")}>
              {spin("sms") ? <Loader2 className="h-5 w-5 animate-spin" /> : <Smartphone className="h-5 w-5 text-secondary" aria-hidden />}
              <span>
                <span className="block">{t(A.sms)}</span>
                <span className="block text-xs text-muted-foreground">{t(A.smsSub)}</span>
              </span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => start("signup")}
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {spin("signup") ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {spin("signup") ? t(A.connecting) : t(A.create)}
            </button>
            <p className="px-2 pt-2 text-center text-[11px] uppercase tracking-[0.14em] text-muted-foreground">TAKATAK AUTH</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const wa = whatsappLink("general");

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

  const solid = scrolled || pathname !== "/" || open;

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
          "fixed inset-x-0 top-0 z-50 text-cream transition-all duration-300",
          solid ? "border-b border-cream/10 bg-charcoal/85 backdrop-blur-xl" : "bg-gradient-to-b from-charcoal/60 to-transparent",
        )}
      >
        <div className={cn("shell flex items-center justify-between gap-4 transition-[height] duration-300", scrolled ? "h-16" : "h-16 md:h-24")}>
          <Link to="/" className="display shrink-0 text-lg tracking-tight md:text-xl" aria-label={SITE.name}>
            CUBAFOOD<span className="text-secondary">.CA</span>
          </Link>

          <nav className="hidden items-center gap-4 2xl:flex" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow relative whitespace-nowrap py-2 opacity-70 transition-opacity hover:opacity-100"
                activeProps={{ className: "eyebrow relative whitespace-nowrap py-2 !opacity-100 text-secondary" }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageMenu />
            <div className="hidden sm:block">
              <AccountMenu />
            </div>
            <div className="sm:hidden">
              <AccountMenu compact />
            </div>
            <Link
              to="/participate"
              className="eyebrow hidden h-10 items-center whitespace-nowrap rounded-full bg-secondary px-5 text-secondary-foreground transition-colors hover:bg-secondary/90 md:inline-flex"
            >
              {t(UI.join)}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t(A.close) : t(A.menu)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/25"
            >
              <span className="relative block h-3 w-5">
                <span className={cn("absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform", open && "translate-y-[5px] rotate-45")} />
                <span className={cn("absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform", open && "-translate-y-[5px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-charcoal pt-24 text-cream animate-in fade-in duration-200">
          <div className="shell grid gap-12 pb-24 lg:grid-cols-[1.4fr_1fr]">
            <nav aria-label="Mobile primary">
              {PRIMARY_NAV.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4 transition-colors hover:text-secondary"
                >
                  <span className="eyebrow w-6 opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-4xl uppercase leading-none md:text-6xl">{t(item.label)}</span>
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-10">
              <div>
                <p className="eyebrow text-secondary">{t(A.explore)}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
                  {MORE.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="eyebrow block py-2.5 opacity-75 transition-opacity hover:opacity-100">
                        {t(item.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-cream/10 pt-8">
                <Link
                  to="/participate"
                  className="eyebrow flex min-h-14 items-center justify-center rounded-full bg-secondary px-6 text-secondary-foreground"
                >
                  {t(UI.join)}
                </Link>
                {wa ? (
                  <a href={wa} target="_blank" rel="noreferrer" className="eyebrow flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/25">
                    <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
                  </a>
                ) : null}
                <div className="flex flex-wrap items-center gap-3">
                  <LanguageMenu />
                  <AccountMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
