import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/locations/jaguey-grande")({
  head: () => ({
    meta: [
      { title: "Jagüey Grande — Développement futur | CUBAFOOD.CA" },
      { name: "description", content: "Jagüey Grande is a future area of interest for CUBAFOOD.CA, not an active, approved or operational project location." },
      { property: "og:title", content: "Jagüey Grande — a future possibility" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Territory · Future perspective", es: "Territorio · Perspectiva futura", fr: "Territoire · Perspective future" }}
        title="JAGÜEY GRANDE"
        subtitle={{ en: "A place to study, not a project to claim.", es: "Un lugar por estudiar, no un proyecto confirmado.", fr: "Un territoire à étudier, pas un chantier annoncé." }}
        body={{
          en: "Jagüey Grande in Matanzas province is identified only as a future area of interest. No activity, land agreement, permit, measured parcel, operating partner or production is claimed here.",
          es: "Jagüey Grande, en la provincia de Matanzas, se menciona únicamente como zona de interés futuro. No se afirman actividades, acuerdos de tierra, permisos, parcelas medidas, socios operativos ni producción.",
          fr: "Jagüey Grande, dans la province de Matanzas, est mentionné uniquement comme territoire d'intérêt futur. Aucune activité, entente foncière, autorisation, parcelle mesurée, collaboration opérationnelle ou production n'est revendiquée.",
        }}
        statuses={["FUTURE_DEVELOPMENT", "NOT_YET_ACTIVE"]}
      >
        <ActionLink to="/locations/matanzas" variant="cream">{t({ en: "Visit the Matanzas project page", es: "Ver la página de Matanzas", fr: "Découvrir le projet à Matanzas" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <SectionIntro
              eyebrow={{ en: "01 · What this means", es: "01 · Qué significa", fr: "01 · Ce que cela signifie" }}
              title={{ en: "An idea deserves due diligence.", es: "Una idea merece una evaluación rigurosa.", fr: "Une piste mérite d'être étudiée sérieusement." }}
              lede={{
                en: "Any potential expansion would need local dialogue, authorization, land and water assessments, agricultural feasibility and transparent documentation before being presented as active.",
                es: "Una posible expansión requeriría diálogo local, autorizaciones, estudios de suelo y agua, viabilidad agrícola y documentación transparente antes de presentarse como activa.",
                fr: "Tout développement éventuel exigerait des échanges locaux, des autorisations, des évaluations des sols et de l'eau, une étude de faisabilité et une documentation transparente avant toute annonce d'activité.",
              }}
            />
          </div>
          <div className="border-t border-foreground/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12">
            <p className="eyebrow text-clay">{t({ en: "Project stage", es: "Etapa del proyecto", fr: "État du projet" })}</p>
            <p className="display mt-8 text-5xl md:text-6xl">{t({ en: "Future", es: "Futuro", fr: "À l'étude" })}</p>
            <p className="mt-8 text-base leading-relaxed opacity-70">{t({
              en: "This page does not depict approved land boundaries, current project facilities or a confirmed expansion calendar.",
              es: "Esta página no representa límites de terrenos aprobados, instalaciones activas ni un calendario de expansión confirmado.",
              fr: "Cette page ne présente ni limites foncières approuvées, ni installations actives, ni calendrier d'expansion confirmé.",
            })}</p>
            <div className="mt-8"><StatusBadge status="FUTURE_DEVELOPMENT" /></div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-cream md:py-32">
        <div className="shell">
          <p className="eyebrow text-secondary">{t({ en: "02 · Present focus", es: "02 · Prioridad actual", fr: "02 · La priorité actuelle" })}</p>
          <h2 className="poster mt-8 max-w-5xl text-balance">{t({ en: "First, Matanzas.", es: "Primero, Matanzas.", fr: "D'abord, Matanzas." })}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "The primary documented CUBAFOOD development work remains centered on the Matanzas / Varadero airport corridor.",
            es: "La documentación principal del desarrollo CUBAFOOD sigue centrada en el corredor Matanzas / aeropuerto de Varadero.",
            fr: "Les démarches de développement documentées de CUBAFOOD restent concentrées sur le corridor Matanzas / aéroport de Varadero.",
          })}</p>
          <div className="mt-10"><ActionLink to="/locations/matanzas" variant="cream">{t({ en: "Explore the primary region", es: "Explorar la región principal", fr: "Explorer la région prioritaire" })}</ActionLink></div>
        </div>
      </section>
    </main>
  );
}
