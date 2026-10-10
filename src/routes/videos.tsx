import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { VIDEOS, VIDEO_CATEGORIES, FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Films et vidéos de terrain | CUBAFOOD.CA" },
      {
        name: "description",
        content: "Authentic field footage from the CUBAFOOD.CA agricultural development area in Matanzas. Browse available recordings and clearly marked upcoming interviews.",
      },
      { property: "og:title", content: "From the land — CUBAFOOD.CA" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const [category, setCategory] = useState("all");
  const published = VIDEOS.filter((video) => !video.comingSoon && video.src);
  const upcoming = VIDEOS.filter((video) => video.comingSoon);
  const available = published.filter((video) => category === "all" || video.category === category);
  const lead = published[0];

  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "CUBAFOOD · Field recordings", es: "CUBAFOOD · Grabaciones de campo", fr: "CUBAFOOD · Images de terrain" }}
        title={{ en: "See the place. Not a promise.", es: "Conoce el lugar. No una promesa.", fr: "Voir le terrain. Pas une promesse." }}
        subtitle={{ en: "Real images from Matanzas.", es: "Imágenes reales de Matanzas.", fr: "Des images réelles de Matanzas." }}
        body={{
          en: "Original field recordings provided by the project team. We distinguish footage already available from stories not yet filmed. Nothing here is presented as proof of a completed harvest.",
          es: "Grabaciones originales de campo facilitadas por el equipo del proyecto. Distinguimos las imágenes disponibles de las historias aún por filmar. Ninguna imagen constituye prueba de una cosecha realizada.",
          fr: "Des images de terrain fournies par l'équipe du projet. Nous distinguons les séquences disponibles des reportages qui restent à tourner. Aucune image n'est présentée comme la preuve d'une récolte réalisée.",
        }}
        statuses={["PROJECT_FACT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
      >
        <ActionLink to="/locations/matanzas" variant="cream">
          {t({ en: "Discover Matanzas", es: "Descubrir Matanzas", fr: "Découvrir Matanzas" })}
        </ActionLink>
      </EditorialHero>

      {lead ? (
        <section className="bg-charcoal py-16 text-cream md:py-24" aria-labelledby="featured-film">
          <div className="shell">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-cream/20 pb-6">
              <div>
                <p className="eyebrow text-secondary">{t({ en: "Featured footage", es: "Video destacado", fr: "À l'affiche" })}</p>
                <h2 id="featured-film" className="display mt-4 text-3xl md:text-5xl">{t(lead.title)}</h2>
              </div>
              <StatusBadge status="PROJECT_FACT" />
            </div>
            <figure className="overflow-hidden bg-black shadow-[var(--shadow-plate)]">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="none"
                poster={lead.poster}
                src={lead.src}
                aria-label={t(lead.title)}
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/20 p-5 md:p-8">
                <span className="max-w-2xl text-sm leading-relaxed opacity-80">{t(lead.description)}</span>
                <span className="eyebrow shrink-0 opacity-55">{t(lead.location)}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-18 md:py-28" aria-labelledby="film-archive">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "The archive · Available now", es: "Archivo · Disponible", fr: "Archives · À regarder" }}
            title={{ en: "Field notes, in motion.", es: "Notas de campo en movimiento.", fr: "Le carnet de terrain en images." }}
            lede={{
              en: "Select a subject to explore the available video recordings. All footage remains clearly identified by its source and context.",
              es: "Elige un tema para explorar las grabaciones disponibles. Cada video mantiene su contexto y su procedencia.",
              fr: "Choisissez un thème pour explorer les vidéos disponibles. Chaque séquence conserve son contexte et sa provenance.",
            }}
          />

          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label={t({ en: "Filter videos by category", es: "Filtrar videos por categoría", fr: "Filtrer les vidéos par catégorie" })}>
            {[{ id: "all", label: { en: "All recordings", es: "Todas las grabaciones", fr: "Toutes les vidéos" } }, ...VIDEO_CATEGORIES].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={category === c.id}
                onClick={() => setCategory(c.id)}
                className={
                  "min-h-11 rounded-full border px-5 py-3 text-xs font-semibold transition-colors " +
                  (category === c.id ? "border-primary bg-primary text-primary-foreground" : "border-foreground/20 bg-card hover:border-primary/70")
                }
              >
                {t(c.label)}
              </button>
            ))}
          </div>

          {available.length ? (
            <div id="film-archive" className="mt-12 grid gap-8 md:grid-cols-2">
              {available.map((video, i) => (
                <article key={video.id} className="group border-t border-foreground/20 pt-5">
                  <div className="relative overflow-hidden bg-charcoal">
                    <video
                      className="aspect-video w-full object-contain"
                      src={video.src}
                      poster={video.poster}
                      preload="none"
                      playsInline
                      controls
                      aria-label={t(video.title)}
                    />
                  </div>
                  <div className="flex items-start gap-5 py-6">
                    <span className="display pt-1 text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display text-xl leading-tight md:text-3xl">{t(video.title)}</h3>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-70">{t(video.description)}</p>
                      <p className="eyebrow mt-5 opacity-50">{t(video.location)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-12 border-t border-foreground/20 py-12 text-base opacity-70">
              {t({ en: "No published recordings in this category yet.", es: "Aún no hay grabaciones publicadas en esta categoría.", fr: "Aucune vidéo publiée dans cette catégorie pour le moment." })}
            </p>
          )}
        </div>
      </section>

      <section className="bg-soil py-20 text-soil-foreground md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Coming later · Not published", es: "Próximamente · Sin publicar", fr: "À venir · Non publié" }}
            title={{ en: "The stories still to tell.", es: "Historias que aún faltan por contar.", fr: "Les récits encore à documenter." }}
            lede={{
              en: "Future interview and reportage concepts. These videos do not exist in the published archive yet.",
              es: "Ideas de futuras entrevistas y reportajes. Estos videos todavía no existen en el archivo publicado.",
              fr: "Projets d'entrevues et de reportages. Ces vidéos ne font pas encore partie des archives publiées.",
            }}
          />
          <div className="mt-12 grid gap-px bg-cream/20 md:grid-cols-3">
            {upcoming.map((video, i) => (
              <article key={video.id} className="bg-soil p-7 md:p-9">
                <span className="display text-5xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-10 text-2xl">{t(video.title)}</h3>
                <p className="mt-5 text-sm leading-relaxed opacity-75">{t(video.description)}</p>
                <div className="mt-8"><StatusBadge status="NOT_YET_ACTIVE" /></div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ActionLink to="/contact" variant="outline">
              {t({ en: "Get in touch", es: "Contactar", fr: "Entrer en contact" })}
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
