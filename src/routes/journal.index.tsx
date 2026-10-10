import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA, VIDEOS } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Carnet de terrain | CUBAFOOD.CA" },
      { name: "description", content: "A carefully documented field journal for CUBAFOOD.CA in Matanzas. Currently featuring original field footage, with dated reporting to follow when verified." },
      { property: "og:title", content: "A living field journal — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const footage = VIDEOS.filter((video) => video.src && !video.comingSoon);
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Archive · Field journal", es: "Archivo · Diario de campo", fr: "Archives · Carnet de terrain" }}
        title={{ en: "A record worth keeping.", es: "Una historia que merece documentarse.", fr: "Une histoire à documenter." }}
        subtitle={{ en: "The place. The process. The evidence.", es: "El lugar. El proceso. Las pruebas.", fr: "Le territoire. Les démarches. Les preuves." }}
        body={{
          en: "An honest journal distinguishes filmed field observations from verified project decisions. We publish existing footage now and will add dated written updates only when they can be supported.",
          es: "Un diario honesto diferencia las imágenes de campo de las decisiones verificadas del proyecto. Publicamos las grabaciones disponibles y añadiremos notas fechadas solo cuando estén respaldadas.",
          fr: "Un carnet fiable distingue les images de terrain des décisions confirmées. Nous présentons les vidéos disponibles et publierons des articles datés lorsque les faits seront étayés.",
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
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-clay">{t({ en: "02 · Written entries", es: "02 · Entradas escritas", fr: "02 · Articles à venir" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "No invented milestones.", es: "Sin avances inventados.", fr: "Aucun jalon inventé." })}</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg leading-relaxed opacity-80">{t({
              en: "No dated written field reports have been published here yet. Future articles will require attributable sources, a verified project status and a documented publication date.",
              es: "Todavía no se han publicado informes escritos de campo con fecha. Los artículos futuros deberán contar con fuentes identificables, estado verificado y fecha de publicación documentada.",
              fr: "Aucun article de terrain daté n'est encore publié. Les futurs textes devront présenter des sources identifiables, un statut vérifié et une date de publication attestée.",
            })}</p>
            <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
            <div className="mt-10"><ActionLink to="/transparency" variant="cream">{t({ en: "Read our evidence policy", es: "Consultar la transparencia", fr: "Consulter les engagements de transparence" })}</ActionLink></div>
          </div>
        </div>
      </section>
    </main>
  );
}
