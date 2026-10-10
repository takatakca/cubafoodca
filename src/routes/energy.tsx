import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { ENERGY_SYSTEMS } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/energy")({
  head: () => ({
    meta: [
      { title: "L'énergie au service des champs | CUBAFOOD.CA" },
      {
        name: "description",
        content: "Proposed energy planning for agricultural irrigation, cold storage, packing and field operations in Matanzas. Feasibility and installations are not yet verified.",
      },
      { property: "og:title", content: "Energy that serves the land — CUBAFOOD.CA" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Page,
});

const PRINCIPLES = [
  {
    n: "01",
    title: { en: "Measure the need.", es: "Medir la necesidad.", fr: "Mesurer les besoins." },
    body: {
      en: "A reliable design begins with the real electrical demand of pumps, refrigeration, storage and safe operations — not equipment specifications from a brochure.",
      es: "Un diseño fiable comienza con la demanda eléctrica real de bombas, refrigeración, almacenes y operaciones seguras, no con las fichas de un catálogo.",
      fr: "Un système fiable se conçoit à partir des besoins électriques réels des pompes, de la réfrigération, du stockage et des opérations, pas d'un catalogue.",
    },
  },
  {
    n: "02",
    title: { en: "Prioritise efficiency.", es: "Priorizar la eficiencia.", fr: "Prioriser l'efficacité." },
    body: {
      en: "Smaller loads mean smaller systems. Efficient motors, well-designed pumping schedules and insulation come before adding generating capacity.",
      es: "Cargas menores requieren sistemas menores. Motores eficientes, horarios de bombeo e aislamiento vienen antes de aumentar la capacidad de generación.",
      fr: "Moins de consommation signifie des systèmes plus sobres. Moteurs efficaces, horaires de pompage et isolation précèdent l'ajout de puissance.",
    },
  },
  {
    n: "03",
    title: { en: "Design for resilience.", es: "Diseñar para la resiliencia.", fr: "Prévoir la continuité." },
    body: {
      en: "A cold room must keep food safe when the grid is unavailable. Any future mix of solar, batteries and backup power must be engineered against real field requirements.",
      es: "Una cámara frigorífica debe proteger los alimentos cuando falla la red. Una combinación futura de energía solar, baterías y respaldo debe dimensionarse según datos reales.",
      fr: "Une chambre froide doit protéger les aliments même en cas de coupure. La combinaison future de solaire, batteries et secours doit répondre aux besoins constatés sur place.",
    },
  },
];

const PHASE_LABEL = {
  day: { en: "Day", es: "Día", fr: "Jour" },
  night: { en: "Night", es: "Noche", fr: "Nuit" },
  both: { en: "Day & night", es: "Día y noche", fr: "Jour et nuit" },
};

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Infrastructure · Energy", es: "Infraestructura · Energía", fr: "Infrastructure · Énergie" }}
        title={{ en: "Power for what matters.", es: "Energía para lo esencial.", fr: "De l'énergie pour l'essentiel." }}
        subtitle={{ en: "From irrigation to cold storage.", es: "Del riego a la cadena de frío.", fr: "De l'irrigation à la chaîne du froid." }}
        body={{
          en: "Energy is not a separate promise. It is an enabling system for water, safe working conditions and food preservation. Everything shown is conceptual until feasibility studies and authorizations are completed.",
          es: "La energía no es una promesa aislada. Es el sistema que permite gestionar el agua, trabajar con seguridad y conservar los alimentos. Lo presentado es conceptual hasta realizar los estudios y obtener las autorizaciones.",
          fr: "L'énergie n'est pas une promesse isolée. Elle rend possibles l'accès à l'eau, des conditions de travail sûres et la conservation des aliments. Ces solutions restent à l'étude tant que les analyses et autorisations ne sont pas achevées.",
        }}
        statuses={["PLANNED", "UNDER_EVALUATION"]}
        media={{ video: FIELD_MEDIA.clip4.src, poster: FIELD_MEDIA.clip4.poster }}
      >
        <ActionLink to="/needs" variant="cream">{t({ en: "Equipment and system needs", es: "Equipos y sistemas necesarios", fr: "Équipement et systèmes nécessaires" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Three design principles", es: "01 · Tres principios", fr: "01 · Trois principes" }}
            title={{ en: "Less waste. More reliability.", es: "Menos pérdidas. Más fiabilidad.", fr: "Moins de gaspillage. Plus de fiabilité." }}
            lede={{
              en: "A responsible energy strategy starts before the first panel is installed. First establish the load, then choose the technology.",
              es: "Una estrategia energética responsable empieza antes de instalar el primer panel. Primero se calculan las necesidades y después se elige la tecnología.",
              fr: "Une stratégie énergétique responsable commence avant la pose du premier panneau. Il faut d'abord établir les besoins, puis choisir les technologies.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden bg-foreground/15 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article key={p.n} className="flex flex-col bg-card p-8 md:min-h-[25rem] md:p-10">
                <span className="display text-6xl text-clay">{p.n}</span>
                <h3 className="display mt-12 text-2xl md:text-3xl">{t(p.title)}</h3>
                <p className="mt-5 text-sm leading-relaxed opacity-75 md:text-base">{t(p.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-cream md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · A day on the future farm", es: "02 · Un día en la futura finca", fr: "02 · Une journée sur l'exploitation envisagée" }}
            title={{ en: "Every hour has its needs.", es: "Cada hora tiene sus necesidades.", fr: "Chaque heure a ses besoins." }}
            lede={{
              en: "This is a planning framework — not a monitoring dashboard or a statement that systems are installed.",
              es: "Este es un marco de planificación, no un panel de supervisión ni prueba de que se hayan instalado sistemas.",
              fr: "Il s'agit d'un cadre de planification, pas d'un tableau de bord opérationnel ni de la preuve que des systèmes sont installés.",
            }}
            status="PLANNED"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="relative isolate min-h-[19rem] overflow-hidden bg-primary p-8 md:p-10">
              <div className="absolute -right-16 -top-24 -z-10 h-80 w-80 rounded-full border-[3rem] border-sun/35" aria-hidden="true" />
              <p className="eyebrow text-cream/70">{t({ en: "Daylight demand", es: "Demanda diurna", fr: "Besoins diurnes" })}</p>
              <p className="display mt-10 max-w-sm text-4xl md:text-5xl">{t({ en: "Water. Work. Solar.", es: "Agua. Trabajo. Sol.", fr: "Eau. Travail. Soleil." })}</p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/80">{t({ en: "Consider synchronizing suitable loads with available sunshine.", es: "Estudiar la posibilidad de sincronizar ciertos consumos con la radiación solar disponible.", fr: "Étudier comment synchroniser certaines consommations avec l'ensoleillement disponible." })}</p>
            </div>
            <div className="relative isolate min-h-[19rem] overflow-hidden bg-soil p-8 md:p-10">
              <div className="absolute -right-10 -top-24 -z-10 h-72 w-72 rounded-full border-[3rem] border-cream/10" aria-hidden="true" />
              <p className="eyebrow text-cream/70">{t({ en: "Night-time continuity", es: "Continuidad nocturna", fr: "Continuité nocturne" })}</p>
              <p className="display mt-10 max-w-sm text-4xl md:text-5xl">{t({ en: "Protect the harvest.", es: "Proteger la cosecha.", fr: "Protéger la récolte." })}</p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/80">{t({ en: "Assess backup requirements for refrigeration, safety and monitoring.", es: "Evaluar las necesidades de respaldo para refrigeración, seguridad y seguimiento.", fr: "Évaluer les besoins de secours pour la réfrigération, la sécurité et le suivi." })}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · Proposed load map", es: "03 · Mapa de consumos propuesto", fr: "03 · Les usages à étudier" }}
            title={{ en: "Nine systems. One connected plan.", es: "Nueve sistemas. Un plan común.", fr: "Neuf systèmes. Une stratégie cohérente." }}
          />
          <div className="mt-12 border-t border-foreground/20">
            {ENERGY_SYSTEMS.map((s, i) => (
              <article key={s.id} className="grid gap-3 border-b border-foreground/20 py-7 md:grid-cols-[5rem_1fr_1.5fr_8rem] md:items-start md:gap-8">
                <span className="display text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-xl md:text-2xl">{t(s.label)}</h3>
                <p className="text-sm leading-relaxed opacity-70">{t(s.note)}</p>
                <p className="eyebrow mt-1 text-primary">{t(PHASE_LABEL[s.phase])}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t({
              en: "Illustrative operating needs, not installed capacity or measured energy demand. No system output, cost or completion date is claimed.",
              es: "Necesidades operativas ilustrativas, no capacidad instalada ni demanda eléctrica medida. No se afirman potencias, costos ni fechas de finalización.",
              fr: "Besoins indicatifs, sans prétendre à une capacité installée ni à une consommation mesurée. Aucune puissance, aucun coût ni aucune date de livraison ne sont annoncés.",
            })}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/needs">{t({ en: "See the equipment needs", es: "Ver los equipos necesarios", fr: "Voir les besoins en équipement" })}</ActionLink>
            <ActionLink to="/canada" variant="outline">{t({ en: "Share your expertise", es: "Compartir mi experiencia", fr: "Proposer son expertise" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
