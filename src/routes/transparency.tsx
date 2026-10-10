import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [
      { title: "Transparence et état d'avancement | CUBAFOOD.CA" },
      { name: "description", content: "What is known, what is planned, and what remains unverified about CUBAFOOD.CA. The Matanzas project remains in institutional coordination and approval processes." },
      { property: "og:title", content: "Show the work. State the limits. — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

const SECTIONS = [
  {
    n: "01",
    status: "PROJECT_FACT" as const,
    title: { en: "What we can say today.", es: "Lo que podemos afirmar hoy.", fr: "Ce que nous pouvons affirmer aujourd'hui." },
    text: {
      en: "The Canada–Cuba initiative began in 2024. Its primary development focus is in Matanzas, near the Varadero airport area. More than 24 kilometres refers to the project's stated development-area length; it is not a claim about hectares, acreage or surveyed parcel boundaries.",
      es: "La iniciativa Canadá–Cuba comenzó en 2024. Su área principal de interés está en Matanzas, cerca del aeropuerto de Varadero. La referencia a más de 24 kilómetros describe una longitud de la zona de desarrollo; no significa hectáreas, superficie ni límites de parcelas medidos.",
      fr: "L'initiative Canada–Cuba a débuté en 2024. Sa zone principale de développement se situe à Matanzas, près du secteur de l'aéroport de Varadero. La mention de plus de 24 kilomètres désigne une longueur de zone de développement, et non des hectares, une superficie ou des limites cadastrales vérifiées.",
    },
  },
  {
    n: "02",
    status: "AWAITING_APPROVAL" as const,
    title: { en: "What is awaiting authorization.", es: "Lo que espera autorización.", fr: "Ce qui attend les autorisations." },
    text: {
      en: "Institutional coordination and the relevant approval procedures are ongoing. We do not claim that all permissions, land-use agreements, operating licences or institutional partnerships have been finalized.",
      es: "La coordinación institucional y los procedimientos de aprobación correspondientes están en curso. No afirmamos que se hayan finalizado todos los permisos, los acuerdos de uso de la tierra, las licencias ni las alianzas institucionales.",
      fr: "La coordination institutionnelle et les démarches d'autorisation se poursuivent. Nous n'affirmons pas que l'ensemble des permis, accords fonciers, licences d'exploitation ou partenariats institutionnels a été finalisé.",
    },
  },
  {
    n: "03",
    status: "UNDER_EVALUATION" as const,
    title: { en: "What needs field evidence.", es: "Lo que requiere datos del terreno.", fr: "Ce qui exige des données de terrain." },
    text: {
      en: "Site-specific soil chemistry, water supply, crop suitability, production capacity, yields and operational costs still require documented evaluation. Regional reference information must never be passed off as measured results from a project parcel.",
      es: "Los análisis del suelo, el suministro de agua, la aptitud de los cultivos, la capacidad productiva, los rendimientos y los costos operativos requieren evaluaciones documentadas. Los datos regionales no deben presentarse como resultados de una parcela del proyecto.",
      fr: "Les analyses de sol, les ressources en eau, l'aptitude des cultures, la capacité de production, les rendements et les coûts d'exploitation doivent être évalués et documentés. Les données régionales ne remplacent jamais des mesures prises sur une parcelle du projet.",
    },
  },
  {
    n: "04",
    status: "NOT_YET_ACTIVE" as const,
    title: { en: "What is not yet an operational result.", es: "Lo que todavía no es un resultado operativo.", fr: "Ce qui ne constitue pas encore un résultat opérationnel." },
    text: {
      en: "No harvest, commercial production, verified delivery volume, payroll, sponsor contribution or community distribution is presented as completed on this page. We will distinguish future evidence from the ambition expressed today.",
      es: "Esta página no presenta como realizadas cosechas, producción comercial, entregas verificadas, nóminas, aportaciones de patrocinadores ni distribuciones comunitarias. Diferenciaremos las pruebas futuras de los objetivos actuales.",
      fr: "Cette page ne présente comme réalisés ni récoltes, ni production commerciale, ni livraisons vérifiées, ni embauches, ni contributions de commanditaires, ni distributions communautaires. Nous distinguerons les preuves futures des objectifs actuels.",
    },
  },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Transparency · Public record", es: "Transparencia · Información pública", fr: "Transparence · Information publique" }}
        title={{ en: "Proof before promises.", es: "Pruebas antes que promesas.", fr: "Des faits avant les promesses." }}
        subtitle={{ en: "An honest status is a stronger foundation.", es: "Un estado claro es una base más sólida.", fr: "Un état d'avancement clair est une base solide." }}
        body={{
          en: "A project earns trust by separating history, intention, verified facts and future results. Here is the current public account of CUBAFOOD.CA.",
          es: "Un proyecto genera confianza al distinguir la historia, las intenciones, los hechos verificados y los resultados futuros. Este es el estado público actual de CUBAFOOD.CA.",
          fr: "Un projet mérite la confiance en distinguant l'histoire, les intentions, les faits vérifiés et les résultats à venir. Voici l'état public actuel de CUBAFOOD.CA.",
        }}
        statuses={["CURRENT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
      >
        <ActionLink to="/reports" variant="cream">{t({ en: "Explore reporting", es: "Consultar los informes", fr: "Consulter les rapports" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · An evidence-based record", es: "01 · Información basada en pruebas", fr: "01 · Des informations étayées" }}
            title={{ en: "Four distinctions that matter.", es: "Cuatro distinciones importantes.", fr: "Quatre distinctions essentielles." }}
            lede={{
              en: "Status labels are not decorations. They tell you which statements can be supported and which remain dependent on further work.",
              es: "Los estados no son adornos. Indican qué afirmaciones están respaldadas y cuáles dependen de trabajos futuros.",
              fr: "Les mentions de statut ne sont pas décoratives. Elles indiquent ce qui est étayé et ce qui dépend encore de travaux futurs.",
            }}
          />
          <div className="mt-14 border-t border-foreground/20">
            {SECTIONS.map((section) => (
              <article key={section.n} className="grid gap-5 border-b border-foreground/20 py-10 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10">
                <span className="display text-4xl text-clay">{section.n}</span>
                <div>
                  <h3 className="display max-w-md text-2xl leading-tight md:text-4xl">{t(section.title)}</h3>
                  <div className="mt-6"><StatusBadge status={section.status} /></div>
                </div>
                <p className="max-w-xl text-base leading-relaxed opacity-80">{t(section.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-cream md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow text-secondary">{t({ en: "02 · Reporting without fabrication", es: "02 · Informes sin inventar datos", fr: "02 · Rapporter sans inventer" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "No figures without a source.", es: "Ninguna cifra sin fuente.", fr: "Pas de chiffres sans source." })}</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg leading-relaxed opacity-80">{t({
              en: "This public page does not publish invented budgets, gifts received, job counts, projected yields or sponsorship totals. Future reports should carry dates, evidence and clear explanations of what was measured.",
              es: "Esta página no publica presupuestos inventados, donaciones recibidas no verificadas, número de empleos, rendimientos previstos ni totales de patrocinios. Los informes futuros deberán incluir fechas, pruebas y explicaciones de los datos medidos.",
              fr: "Cette page ne publie ni budgets inventés, ni dons reçus non vérifiés, ni nombre d'emplois, ni rendements anticipés, ni totaux de commandites. Les futurs rapports devront préciser les dates, les pièces justificatives et la méthode de mesure.",
            })}</p>
            <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ActionLink to="/timeline" variant="cream">{t({ en: "Read the timeline", es: "Ver la cronología", fr: "Consulter la chronologie" })}</ActionLink>
              <ActionLink to="/videos" variant="outline">{t({ en: "View field documentation", es: "Ver las grabaciones de campo", fr: "Voir les images de terrain" })}</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
