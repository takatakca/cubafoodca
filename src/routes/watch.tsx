import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { VIDEOS } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FIELD_MEDIA } from "@/content/media";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Salle de projection | CUBAFOOD.CA" },
      { name: "description", content: "Watch original CUBAFOOD.CA footage from the Matanzas agricultural development area. Real recordings only, with no invented production or harvest claims." },
      { property: "og:title", content: "Watch the land — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const films = VIDEOS.filter((video) => Boolean(video.src) && !video.comingSoon);
  const [activeId, setActiveId] = useState(films[0]?.id ?? "");
  const active = films.find((film) => film.id === activeId) ?? films[0];

  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "CCC · Screening room", es: "CCC · Sala de proyección", fr: "CCC · Salle de projection" }}
        title={{ en: "Watch the land speak.", es: "Deja que la tierra cuente su historia.", fr: "Laissez le terrain raconter son histoire." }}
        subtitle={{ en: "Five available field recordings.", es: "Cinco grabaciones de campo disponibles.", fr: "Cinq séquences de terrain disponibles." }}
        body={{
          en: "A film-first experience of documented project footage, not simulated agricultural operations. Choose a sequence below and press play.",
          es: "Una experiencia visual basada en imágenes reales del proyecto, no en operaciones agrícolas simuladas. Elige una secuencia y pulsa reproducir.",
          fr: "Une expérience cinématographique fondée sur de véritables images du projet, et non sur des opérations agricoles simulées. Choisissez une séquence et lancez la lecture.",
        }}
        statuses={["PROJECT_FACT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
      >
        <ActionLink to="/videos" variant="cream">{t({ en: "The full video archive", es: "Archivo completo de videos", fr: "Toutes les vidéos" })}</ActionLink>
      </EditorialHero>
      <section className="bg-charcoal py-16 text-cream md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · The screening", es: "01 · La proyección", fr: "01 · La projection" }}
            title={{ en: "Real footage. Nothing staged.", es: "Imágenes reales. Nada escenificado.", fr: "Des images réelles. Sans mise en scène." }}
            lede={{
              en: "Each available sequence is documented field footage. Recording availability does not establish the project's regulatory approval or operational status.",
              es: "Cada secuencia disponible documenta imágenes del terreno. La existencia de las grabaciones no demuestra autorizaciones regulatorias ni operaciones activas.",
              fr: "Chaque séquence disponible présente le terrain. Leur existence ne prouve ni une autorisation réglementaire ni des opérations agricoles actives.",
            }}
          />
          {active ? (
            <div className="mt-12 border border-cream/20 bg-black">
              <video key={active.id} className="aspect-video w-full object-contain" controls playsInline preload="none" poster={active.poster} src={active.src} aria-label={t(active.title)} />
              <div className="flex flex-col justify-between gap-6 p-6 md:flex-row md:items-end md:p-9">
                <div>
                  <p className="eyebrow text-secondary">{t({ en: "Now selected", es: "Selección actual", fr: "Séquence sélectionnée" })}</p>
                  <h3 className="display mt-4 text-3xl md:text-4xl">{t(active.title)}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-75">{t(active.description)}</p>
                </div>
                <p className="eyebrow shrink-0 opacity-60">{t(active.location)}</p>
              </div>
            </div>
          ) : null}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" role="group" aria-label={t({ en: "Select a film", es: "Seleccionar video", fr: "Choisir une vidéo" })}>
            {films.map((film, i) => (
              <button
                type="button"
                key={film.id}
                aria-pressed={active?.id === film.id}
                onClick={() => setActiveId(film.id)}
                className={"group border p-3 text-left transition-colors " + (active?.id === film.id ? "border-clay bg-cream/10" : "border-cream/15 hover:border-cream/60")}
              >
                <img src={film.poster} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                <p className="eyebrow mt-4 text-clay">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-semibold leading-snug">{t(film.title)}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · What these images show", es: "02 · Qué muestran las imágenes", fr: "02 · Ce que montrent les images" }}
            title={{ en: "A place, not a completed operation.", es: "Un lugar, no una operación terminada.", fr: "Un territoire, pas une exploitation achevée." }}
            lede={{
              en: "This footage documents the Matanzas project area. It does not show verified crop yields, approved land boundaries, employment or food deliveries.",
              es: "Estas imágenes documentan la zona del proyecto en Matanzas. No muestran rendimientos verificados, límites aprobados, empleos ni entregas de alimentos.",
              fr: "Ces images documentent la zone du projet à Matanzas. Elles ne montrent ni rendements vérifiés, ni limites foncières approuvées, ni emplois ni livraisons de denrées.",
            }}
            status="AWAITING_APPROVAL"
          />
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/locations/matanzas">{t({ en: "Discover the location", es: "Descubrir el lugar", fr: "Découvrir le territoire" })}</ActionLink>
            <ActionLink to="/transparency" variant="outline">{t({ en: "Read the verified status", es: "Consultar el estado verificado", fr: "Lire l'état d'avancement" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
