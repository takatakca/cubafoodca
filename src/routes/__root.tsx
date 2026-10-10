import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { I18nProvider, type Lang, type T } from "@/i18n";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp";

/**
 * The root error boundary can render before the normal I18nProvider is mounted.
 * Read the same local language preference without depending on route context.
 * SSR starts in French so hydration remains deterministic.
 */
function useFallbackLanguage() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const synchronize = () => {
      let preference = document.documentElement.lang.slice(0, 2).toLowerCase();
      try {
        preference = window.localStorage.getItem("cubafood-lang") ?? preference;
      } catch {
        // Restricted storage must never break public navigation or error recovery.
      }
      if (preference === "fr" || preference === "en" || preference === "es") {
        setLang(preference);
      }
    };

    synchronize();
    // Keep the fallback texts in sync with the existing header language
    // selector; error routes can render without the normal I18nProvider.
    const languageObserver = new MutationObserver(synchronize);
    languageObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => languageObserver.disconnect();
  }, []);

  return (message: T) => message[lang] ?? message.en;
}

function NotFoundComponent() {
  const t = useFallbackLanguage();
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden bg-charcoal px-4 pb-24 pt-40 text-cream md:pb-32 md:pt-52">
      <div className="pointer-events-none absolute -right-16 top-16 -z-10 select-none text-[16rem] leading-none font-black tracking-tighter text-cream/[0.035] md:text-[35rem]" aria-hidden="true">404</div>
      <div className="shell relative">
        <p className="eyebrow text-secondary">{t({ en: "CUBAFOOD.CA · Lost path", es: "CUBAFOOD.CA · Camino perdido", fr: "CUBAFOOD.CA · Chemin introuvable" })}</p>
        <h1 className="poster mt-9 max-w-5xl text-balance">{t({
          en: "This page isn't here.",
          es: "Esta página no está aquí.",
          fr: "Cette page est introuvable.",
        })}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75">{t({
          en: "The address may have changed or this story may not have been published. You can return to the project, explore Matanzas or read the published field journal.",
          es: "La dirección puede haber cambiado o este contenido todavía no se ha publicado. Vuelve al proyecto, descubre Matanzas o consulta el diario de campo publicado.",
          fr: "L'adresse a peut-être changé ou le contenu n'est pas encore publié. Retournez au projet, découvrez Matanzas ou consultez le carnet de terrain.",
        })}</p>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link to="/" className="eyebrow inline-flex min-h-12 items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-secondary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2">
            {t({ en: "Back to the project", es: "Volver al proyecto", fr: "Retour au projet" })}
          </Link>
          <Link to="/locations/matanzas" className="eyebrow inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 text-cream transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2">
            {t({ en: "Discover Matanzas", es: "Descubrir Matanzas", fr: "Découvrir Matanzas" })}
          </Link>
          <Link to="/journal" className="eyebrow inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 text-cream transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2">
            {t({ en: "Field journal", es: "Diario de campo", fr: "Carnet de terrain" })}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ reset }: ErrorComponentProps) {
  const router = useRouter();
  const t = useFallbackLanguage();

  return (
    <section role="alert" className="min-h-[72vh] bg-background px-4 pb-24 pt-40 text-foreground md:pb-32 md:pt-52">
      <div className="shell max-w-4xl">
        <p className="eyebrow text-clay">{t({
          en: "CUBAFOOD.CA · Temporary interruption",
          es: "CUBAFOOD.CA · Interrupción temporal",
          fr: "CUBAFOOD.CA · Interruption temporaire",
        })}</p>
        <h1 className="headline mt-9 max-w-3xl text-balance">{t({
          en: "We couldn't open this page.",
          es: "No hemos podido abrir esta página.",
          fr: "Impossible d'ouvrir cette page.",
        })}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-75">{t({
          en: "A technical problem interrupted this page. You can try again without losing the rest of the CUBAFOOD website.",
          es: "Un problema técnico ha interrumpido esta página. Puedes intentarlo de nuevo; el resto del sitio CUBAFOOD sigue disponible.",
          fr: "Un problème technique a interrompu le chargement. Vous pouvez réessayer; le reste du site CUBAFOOD demeure accessible.",
        })}</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
            className="eyebrow inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t({ en: "Try again", es: "Volver a intentar", fr: "Réessayer" })}
          </button>
          <a href="/" className="eyebrow inline-flex min-h-12 items-center justify-center rounded-full border border-input px-7 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-2">
            {t({ en: "Back to the homepage", es: "Volver al inicio", fr: "Retour à l'accueil" })}
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CUBAFOOD.CA — Canada–Cuba agricultural development" },
      {
        name: "description",
        content:
          "A Canada–Cuba agricultural development and food sovereignty initiative in Matanzas, Cuba. Helping Cuba grow more food.",
      },
      { name: "author", content: "CUBAFOOD.CA" },
      { property: "og:site_name", content: "CUBAFOOD.CA" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1f2b22" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Public+Sans:ital,wght@0,300..800;1,300..800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CUBAFOOD.CA",
          description:
            "Canada–Cuba agricultural development, food sustainability and food sovereignty initiative based in Matanzas, Cuba.",
          foundingDate: "2024",
          areaServed: ["CU", "CA"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Header />
        <main id="main">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </I18nProvider>
    </QueryClientProvider>
  );
}
