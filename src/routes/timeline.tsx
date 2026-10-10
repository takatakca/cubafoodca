import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { HISTORY_CHAPTERS } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { ActionLink } from "@/components/site/primitives";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Chronologie | Matanzas et CUBAFOOD.CA" },
      {
        name: "description",
        content: "Explore the documented history of Matanzas and the development-stage timeline of CUBAFOOD.CA. Regional history is distinct from project milestones.",
      },
      { property: "og:title", content: "The land has a history — CUBAFOOD.CA" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Page,
});

const FORWARD = [
  {
    index: "01",
    title: { en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" },
    body: {
      en: "Engagement with the relevant authorities and completion of the required authorizations before operational claims are made.",
      es: "Coordinación con las autoridades competentes y obtención de las autorizaciones necesarias antes de afirmar que existe actividad operativa.",
      fr: "Échanges avec les autorités compétentes et obtention des autorisations requises avant toute annonce d'activité opérationnelle.",
    },
    status: "AWAITING_APPROVAL" as const,
  },
  {
    index: "02",
    title: { en: "Land and water assessment", es: "Evaluación del suelo y del agua", fr: "Évaluation des sols et de l'eau" },
    body: {
      en: "Map the development area, sample soil, verify water availability and evaluate feasibility; no parcel-specific results have been published.",
      es: "Cartografiar la zona, analizar los suelos, verificar la disponibilidad de agua y evaluar la viabilidad. No se han publicado resultados de las parcelas.",
      fr: "Cartographier la zone, analyser les sols, vérifier la disponibilité de l'eau et évaluer la faisabilité. Aucun résultat propre aux parcelles n'est publié.",
    },
    status: "PLANNED" as const,
  },
  {
    index: "03",
    title: { en: "Infrastructure and cultivation planning", es: "Planificación de infraestructura y cultivos", fr: "Planification des infrastructures et des cultures" },
    body: {
      en: "Only validated assessments can guide irrigation, machinery, energy systems, crop suitability, safety and storage decisions.",
      es: "Solo los análisis validados podrán orientar las decisiones sobre riego, maquinaria, energía, cultivos, seguridad y almacenamiento.",
      fr: "Seules des évaluations validées permettront de définir l'irrigation, la machinerie, l'énergie, les cultures, la sécurité et le stockage.",
    },
    status: "UNDER_EVALUATION" as const,
  },
  {
    index: "04",
    title: { en: "A verifiable field journal", es: "Un diario de campo verificable", fr: "Un journal de terrain vérifiable" },
    body: {
      en: "Document future decisions, activities and results as evidence becomes available, with dates, sources and clear status labels.",
      es: "Documentar las futuras decisiones, actividades y resultados a medida que existan pruebas, con fechas, fuentes y estados claros.",
      fr: "Documenter les décisions, les activités et les résultats futurs au fil des preuves disponibles, avec dates, sources et statuts explicites.",
    },
    status: "PLANNED" as const,
  },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "The land remembers · Historical archive", es: "La tierra recuerda · Archivo histórico", fr: "La terre se souvient · Archives historiques" }}
        title={{ en: "Before the first harvest, there is history.", es: "Antes de la primera cosecha, hay historia.", fr: "Avant la première récolte, il y a une histoire." }}
        subtitle={{ en: "Matanzas, then and now.", es: "Matanzas, ayer y hoy.", fr: "Matanzas, hier et aujourd'hui." }}
        body={{
          en: "A timeline of regional history and project intentions. Historical events describe Matanzas, not the specific CUBAFOOD parcel.",
          es: "Una cronología de la historia regional y de las intenciones del proyecto. Los acontecimientos históricos corresponden a Matanzas, no a una parcela específica de CUBAFOOD.",
          fr: "Une chronologie de l'histoire régionale et des intentions du projet. Les faits historiques concernent Matanzas, et non une parcelle précise de CUBAFOOD.",
        }}
        statuses={["REGIONAL_CONTEXT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
      >
        <ActionLink to="/locations/matanzas" variant="cream">
          {t({ en: "Discover the place", es: "Descubrir el lugar", fr: "Découvrir le territoire" })}
        </ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Chapter I · The region", es: "Capítulo I · La región", fr: "Chapitre I · La région" }}
            title={{ en: "Centuries beneath our feet.", es: "Siglos bajo nuestros pies.", fr: "Des siècles sous nos pieds." }}
            lede={{
              en: "From the founding of Matanzas to the colonial sugar economy, the history includes ingenuity, culture, upheaval and the violence of slavery. It should not be romanticised.",
              es: "Desde la fundación de Matanzas hasta la economía azucarera colonial, la historia reúne ingenio, cultura, cambios profundos y la violencia de la esclavitud. No debe idealizarse.",
              fr: "De la fondation de Matanzas à l'économie sucrière coloniale, cette histoire mêle ingéniosité, culture, bouleversements et violence de l'esclavage. Elle ne doit pas être idéalisée.",
            }}
            status="REGIONAL_CONTEXT"
          />
          <ol className="mt-16 border-l border-foreground/20 md:ml-24">
            {HISTORY_CHAPTERS.map((chapter, index) => (
              <li key={index} className="relative border-b border-foreground/10 pb-14 pl-8 pt-12 last:border-0 md:grid md:grid-cols-[minmax(10rem,1fr)_minmax(0,2fr)] md:gap-12 md:pl-14">
                <span className="absolute -left-[5px] top-16 h-[9px] w-[9px] rounded-full bg-clay ring-[7px] ring-background" aria-hidden="true" />
                <p className="display text-3xl text-clay md:text-5xl">{t(chapter.year)}</p>
                <div className="mt-5 md:mt-0">
                  <h3 className="display max-w-3xl text-2xl leading-tight md:text-4xl">{t(chapter.title)}</h3>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">{t(chapter.body)}</p>
                  <div className="mt-6"><StatusBadge status={index >= HISTORY_CHAPTERS.length - 2 ? "PROJECT_FACT" : "REGIONAL_CONTEXT"} /></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal py-24 text-cream md:py-36">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={FIELD_MEDIA.clip3.poster} className="h-full w-full object-cover" alt="" loading="lazy" />
        </div>
        <div className="shell">
          <p className="eyebrow text-secondary">{t({ en: "Chapter II · The future is not a fact yet", es: "Capítulo II · El futuro aún no es un hecho", fr: "Chapitre II · L'avenir reste à construire" })}</p>
          <h2 className="poster mt-8 max-w-6xl text-balance">
            {t({ en: "A plan is not a harvest.", es: "Un plan no es una cosecha.", fr: "Un projet n'est pas une récolte." })}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">
            {t({
              en: "The project began in 2024. The following are next-stage priorities, not completed milestones or approved operations.",
              es: "El proyecto comenzó en 2024. Las siguientes son prioridades para las próximas etapas, no hitos completados ni operaciones aprobadas.",
              fr: "Le projet a débuté en 2024. Les étapes suivantes sont des priorités, et non des réalisations achevées ou des opérations autorisées.",
            })}
          </p>
          <div className="mt-12"><StatusBadge status="AWAITING_APPROVAL" /></div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Chapter III · What comes next", es: "Capítulo III · Próximas etapas", fr: "Chapitre III · Les prochaines étapes" }}
            title={{ en: "Built on evidence, step by step.", es: "Construir con pruebas, paso a paso.", fr: "Avancer sur des faits, étape par étape." }}
          />
          <ol className="mt-14 grid gap-px overflow-hidden bg-foreground/15 md:grid-cols-2">
            {FORWARD.map((step) => (
              <li key={step.index} className="bg-card p-7 md:p-10">
                <p className="display text-5xl text-clay">{step.index}</p>
                <h3 className="display mt-9 text-2xl md:text-3xl">{t(step.title)}</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed opacity-75 md:text-base">{t(step.body)}</p>
                <div className="mt-7"><StatusBadge status={step.status} /></div>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/land">{t({ en: "Explore the land", es: "Explorar la tierra", fr: "Explorer la terre" })}</ActionLink>
            <ActionLink to="/participate" variant="outline">{t({ en: "Take part", es: "Participar", fr: "Participer" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
