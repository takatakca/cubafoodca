import { createFileRoute, Link } from "@tanstack/react-router";
import { JOURNAL_POSTS } from "@/content/journal";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA, VIDEOS } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Carnet de terrain | CUBAFOOD.CA" },
      { name: "description", content: "A carefully documented field journal for CUBAFOOD.CA in Matanzas. Featuring the published Matanzas field visit record and original project footage, with future reporting to follow when verified." },
      { property: "og:title", content: "A living field journal — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const footage = VIDEOS.filter((video) => video.src && !video.comingSoon);
  const published = JOURNAL_POSTS.filter((post) => post.status === "PUBLISHED");
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Archive · Field journal", es: "Archivo · Diario de campo", fr: "Archives · Carnet de terrain" }}
        title={{ en: "A record worth keeping.", es: "Una historia que merece documentarse.", fr: "Une histoire à documenter." }}
        subtitle={{ en: "The place. The process. The evidence.", es: "El lugar. El proceso. Las pruebas.", fr: "Le territoire. Les démarches. Les preuves." }}
        body={{
          en: "A published Matanzas field-visit record and original footage document the place. We distinguish those records from operational results and will add only further verified updates.",
          es: "Un reportaje publicado de una visita a Matanzas y las grabaciones originales documentan el lugar. Los distinguimos de los resultados operativos y solo añadiremos nuevas actualizaciones verificadas.",
          fr: "Un compte rendu publié d’une visite à Matanzas et des vidéos originales documentent le territoire. Nous les distinguons des résultats d’exploitation et ne publierons que de nouvelles mises à jour vérifiées.",
        }}
        statuses={["CURRENT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
      >
        <ActionLink to="/videos" variant="cream">{t({ en: "Explore the footage", es: "Explorar las grabaciones", fr: "Voir les images de terrain" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Documented images", es: "01 · Imágenes documentadas", fr: "01 · Images documentées" }}
            title={{ en: "From the place itself.", es: "Desde el propio terreno.", fr: "Au plus près du terrain." }}
            lede={{
              en: "These films are original project-team field documentation. They are not edited case studies, harvest records or evidence of approved operations.",
              es: "Estos videos son documentación de campo original del equipo del proyecto, no estudios de casos editados ni pruebas de cosechas u operaciones aprobadas.",
              fr: "Ces vidéos sont des documents de terrain fournis par l'équipe du projet, et non des études de cas montées ou des preuves de récoltes ou d'opérations autorisées.",
            }}
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {footage.map((video, i) => (
              <article key={video.id} className="border-t border-foreground/20 pt-5">
                <div className="relative overflow-hidden bg-charcoal">
                  <img src={video.poster} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                  <span className="eyebrow absolute bottom-4 left-4 rounded-full bg-charcoal/85 px-3 py-2 text-cream">
                    {t({ en: "Field footage", es: "Grabación de campo", fr: "Vidéo de terrain" })}
                  </span>
                </div>
                <p className="display mt-6 text-3xl text-clay">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-3 text-xl md:text-2xl">{t(video.title)}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-70">{t(video.description)}</p>
              </article>
            ))}
          </div>
          <div className="mt-12"><ActionLink to="/videos">{t({ en: "Watch the full archive", es: "Ver el archivo completo", fr: "Regarder toutes les vidéos" })}</ActionLink></div>
        </div>
      </section>

      <section className="bg-soil py-24 text-soil-foreground md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow text-clay">{t({ en: "02 · Published field entries", es: "02 · Crónicas de campo publicadas", fr: "02 · Articles de terrain publiés" })}</p>
              <h2 className="poster mt-8 text-balance">{t({ en: "The story starts on the ground.", es: "La historia comienza en el terreno.", fr: "Le récit commence sur le terrain." })}</h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-80">{t({
                en: "These are existing published documentary records, not a claim of completed field preparation or agricultural production. Additional entries will require verified dates and sources.",
                es: "Son registros documentales ya publicados, no pruebas de preparación terminada del terreno ni de producción agrícola. Las próximas entradas requerirán fechas y fuentes verificadas.",
                fr: "Ces publications sont des documents de terrain existants, pas la preuve de travaux de préparation achevés ni de production agricole. Les prochaines publications devront comporter des dates et des sources vérifiées.",
              })}</p>
              <div className="mt-9"><StatusBadge status="PROJECT_FACT" /></div>
            </div>
            <div className="space-y-4">
              {published.map((post) => (
                <Link
                  key={post.slug}
                  to="/journal/$slug"
                  params={{ slug: post.slug }}
                  className="group block border border-cream/25 p-6 transition-colors hover:bg-cream/10 md:p-8"
                >
                  <p className="eyebrow text-clay">{post.date} · {t(post.location)}</p>
                  <h3 className="display mt-6 text-2xl leading-tight group-hover:underline md:text-4xl">{t(post.title)}</h3>
                  <p className="mt-5 text-sm leading-relaxed opacity-80">{t(post.subtitle)}</p>
                  <span className="eyebrow mt-8 inline-block">{t({ en: "Read the record", es: "Leer la crónica", fr: "Lire le reportage" })} →</span>
                </Link>
              ))}
              {!published.length ? (
                <p className="border-t border-cream/25 pt-8 opacity-75">
                  {t({ en: "No published written entries yet.", es: "Todavía no hay entradas escritas publicadas.", fr: "Aucun article publié pour le moment." })}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
