import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { JOURNAL_POSTS } from "@/content/journal";
import { ActionLink } from "@/components/site/primitives";
import { StatusBadge } from "@/components/site/editorial";

export const Route = createFileRoute("/journal/$slug")({
  head: () => ({
    meta: [
      { title: "Carnet de terrain | CUBAFOOD.CA" },
      { name: "description", content: "Published CUBAFOOD.CA field documentation from Matanzas, with original footage, source context and project status." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const { slug } = Route.useParams();
  const post = JOURNAL_POSTS.find((entry) => entry.slug === slug && entry.status === "PUBLISHED");

  if (!post) {
    return (
      <main className="bg-charcoal text-cream">
        <section className="shell flex min-h-[80vh] flex-col justify-center pb-20 pt-40 md:pt-52">
          <p className="eyebrow text-secondary">{t({ en: "Field journal · Archive", es: "Diario de campo · Archivo", fr: "Carnet de terrain · Archives" })}</p>
          <h1 className="poster mt-8 max-w-5xl text-balance">{t({ en: "This story is not published.", es: "Esta historia no está publicada.", fr: "Cet article n'est pas publié." })}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "We do not generate fictional articles to fill unknown URLs. Visit the journal to see the published records.",
            es: "No generamos artículos ficticios para rellenar direcciones desconocidas. Consulta el diario para ver las publicaciones existentes.",
            fr: "Nous ne créons pas d'articles fictifs pour remplir des adresses inconnues. Consultez le carnet pour voir les documents publiés.",
          })}</p>
          <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
          <div className="mt-12"><ActionLink to="/journal" variant="cream">{t({ en: "Back to the journal", es: "Volver al diario", fr: "Retour au carnet" })}</ActionLink></div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <header className="bg-charcoal text-cream">
        <div className="shell pb-16 pt-36 md:pb-24 md:pt-48">
          <p className="eyebrow text-secondary">{t({ en: "Field journal · Published record", es: "Diario de campo · Publicación", fr: "Carnet de terrain · Publication" })}</p>
          <h1 className="poster mt-8 max-w-6xl text-balance">{t(post.title)}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed opacity-85 md:text-xl">{t(post.subtitle)}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs uppercase tracking-wider opacity-75">
            <time dateTime={post.date}>{post.date}</time>
            <span>{t(post.location)}</span>
            <span>{post.author}</span>
          </div>
          <div className="mt-8"><StatusBadge status="PROJECT_FACT" /></div>
        </div>
      </header>

      {post.video ? (
        <section className="bg-charcoal pb-16 md:pb-24">
          <div className="shell">
            <video
              className="aspect-video w-full bg-black object-contain shadow-[var(--shadow-plate)]"
              src={post.video}
              poster={post.poster}
              controls
              playsInline
              preload="none"
              aria-label={t(post.title)}
            />
          </div>
        </section>
      ) : null}

      <article className="bg-background py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-clay">{t({ en: "A field record", es: "Documento de campo", fr: "Un document de terrain" })}</p>
            {post.body.map((paragraph, i) => (
              <p key={i} className="mt-8 text-lg leading-relaxed opacity-85 md:text-xl">{t(paragraph)}</p>
            ))}
          </div>
          <aside className="border-t border-foreground/20 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="eyebrow text-clay">{t({ en: "Publication context", es: "Contexto de publicación", fr: "Contexte de publication" })}</p>
            <p className="mt-6 text-sm leading-relaxed opacity-70">{t({
              en: "This article documents a field visit, not an official planting, harvest, land survey or regulatory approval.",
              es: "Este artículo documenta una visita de campo, no una siembra, cosecha, medición catastral ni aprobación regulatoria oficial.",
              fr: "Cet article documente une visite de terrain, et non des semis, une récolte, un arpentage ou une autorisation réglementaire officielle.",
            })}</p>
            <div className="mt-8"><StatusBadge status="AWAITING_APPROVAL" /></div>
          </aside>
        </div>
      </article>

      {post.gallery?.length ? (
        <section className="bg-card py-16 md:py-24">
          <div className="shell">
            <h2 className="display text-3xl md:text-4xl">{t({ en: "Frames from the visit", es: "Imágenes del recorrido", fr: "Images de la visite" })}</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {post.gallery.map((poster, i) => (
                <img key={poster} src={poster} alt={t({ en: "Still frame from the field documentation", es: "Fotograma de la documentación de campo", fr: "Image extraite de la documentation de terrain" }) + " " + (i + 1)} className="aspect-video w-full object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-soil py-20 text-soil-foreground md:py-28">
        <div className="shell">
          <h2 className="headline text-balance">{t({ en: "The record continues.", es: "La historia continúa.", fr: "La documentation se poursuit." })}</h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/journal" variant="cream">{t({ en: "Back to the journal", es: "Volver al diario", fr: "Retour au carnet" })}</ActionLink>
            <ActionLink to="/transparency" variant="outline">{t({ en: "Project status", es: "Estado del proyecto", fr: "État d'avancement" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
