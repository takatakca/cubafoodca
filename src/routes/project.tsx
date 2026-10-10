import { FieldMosaic } from "@/components/site/field-mosaic";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import {
  EditorialHero,
  SectionIntro,
  StatusBadge,
  ProcessFlow,
  RouteCard,
  SourceNotes,
} from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FIELD_MEDIA } from "@/content/media";
import { MISSION_PILLARS, FOOD_CHAIN, SOURCES } from "@/content/research";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "The Project — CUBAFOOD.CA | From Food Delivery to Food Capacity" },
      {
        name: "description",
        content:
          "CUBAFOOD.CA is a Canada–Cuba agricultural development project in Matanzas. Not only sending food — working to help Cuba grow more of it.",
      },
      { property: "og:title", content: "The Project — CUBAFOOD.CA" },
      {
        property: "og:description",
        content: "A Canada–Cuba agricultural development project in Matanzas, currently in institutional coordination.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const CUBA_SIDE = [
  { en: "Farmers who already know this land", es: "Agricultores que ya conocen esta tierra", fr: "Des agriculteurs qui connaissent cette terre" },
  { en: "Agricultural knowledge", es: "Conocimiento agrícola", fr: "Savoir agricole" },
  { en: "Workforce", es: "Fuerza de trabajo", fr: "Main-d'œuvre" },
  { en: "Communities", es: "Comunidades", fr: "Communautés" },
  { en: "Local implementation", es: "Implementación local", fr: "Mise en œuvre locale" },
  { en: "Institutional process", es: "Proceso institucional", fr: "Processus institutionnel" },
];

const CANADA_SIDE = [
  { en: "Technology", es: "Tecnología", fr: "Technologie" },
  { en: "Equipment", es: "Equipos", fr: "Équipement" },
  { en: "Agricultural expertise", es: "Experiencia agrícola", fr: "Expertise agricole" },
  { en: "Logistics", es: "Logística", fr: "Logistique" },
  { en: "Training", es: "Capacitación", fr: "Formation" },
  { en: "Long-term collaboration", es: "Colaboración a largo plazo", fr: "Collaboration à long terme" },
];

const INFRASTRUCTURE = [
  { id: "land", label: { en: "Land", es: "Tierra", fr: "Terre" }, note: { en: "Mapping, soil study, clearing and preparation.", es: "Mapeo, estudio de suelos, desbroce y preparación.", fr: "Cartographie, étude des sols, défrichage et préparation." } },
  { id: "water", label: { en: "Water", es: "Agua", fr: "Eau" }, note: { en: "Sources, storage, filtration, pumping and irrigation.", es: "Fuentes, almacenamiento, filtración, bombeo y riego.", fr: "Sources, stockage, filtration, pompage et irrigation." } },
  { id: "energy", label: { en: "Energy", es: "Energía", fr: "Énergie" }, note: { en: "Solar first, batteries second, generators last.", es: "Primero solar, después baterías, generadores al final.", fr: "Solaire d'abord, batteries ensuite, génératrices en dernier." } },
  { id: "machinery", label: { en: "Machinery", es: "Maquinaria", fr: "Machinerie" }, note: { en: "Tractors, implements and the mechanics to keep them alive.", es: "Tractores, implementos y los mecánicos que los mantienen vivos.", fr: "Tracteurs, outils et les mécaniciens qui les entretiennent." } },
  { id: "storage", label: { en: "Storage", es: "Almacenamiento", fr: "Stockage" }, note: { en: "Warehousing and cold storage — food lost after harvest is food never eaten.", es: "Almacenes y refrigeración — el alimento perdido tras la cosecha nunca se come.", fr: "Entrepôts et froid — un aliment perdu après récolte n'est jamais mangé." } },
  { id: "transport", label: { en: "Transport", es: "Transporte", fr: "Transport" }, note: { en: "Vehicles and routes between field, storage and community.", es: "Vehículos y rutas entre campo, almacén y comunidad.", fr: "Véhicules et routes entre champ, entrepôt et communauté." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "CCC — Cooperación Canadá–Cuba", es: "CCC — Cooperación Canadá–Cuba", fr: "CCC — Coopération Canada–Cuba" }}
        title={{
          en: "We are not only sending food.",
          es: "No solo enviamos alimentos.",
          fr: "Nous n'envoyons pas seulement de la nourriture.",
        }}
        subtitle={{
          en: "We are working to help Cuba grow more of it.",
          es: "Trabajamos para ayudar a Cuba a producir más.",
          fr: "Nous travaillons pour aider Cuba à en produire davantage.",
        }}
        body={{
          en: "Food delivery answers a day. Food capacity answers a decade. CUBAFOOD.CA is an agricultural development project in Matanzas built around land, water, energy, machinery, storage, transport — and the people who already work this ground.",
          es: "Entregar alimentos resuelve un día. Producir alimentos resuelve una década. CUBAFOOD.CA es un proyecto de desarrollo agrícola en Matanzas construido sobre tierra, agua, energía, maquinaria, almacenamiento, transporte — y las personas que ya trabajan este suelo.",
          fr: "Une livraison répond à un besoin immédiat. Une capacité agricole durable peut répondre aux besoins pendant des années. À Matanzas, CUBAFOOD.CA travaille à réunir les conditions nécessaires : terre, eau, énergie, machinerie, stockage, transport et savoir-faire des personnes qui connaissent le territoire.",
        }}
        statuses={["PROJECT_FACT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
        metrics={[
          { label: { en: "Project started", es: "Inicio del proyecto", fr: "Début du projet" }, value: "2024" },
          { label: { en: "Primary development area", es: "Área principal", fr: "Zone principale" }, value: "MATANZAS" },
          { label: { en: "Development corridor length", es: "Longitud del corredor", fr: "Longueur du corridor" }, value: "24+ KM" },
          { label: { en: "Project phase", es: "Etapa del proyecto", fr: "Phase du projet" }, value: "COORDINATION" },
        ]}
      >
        <ActionLink to="/participate" variant="cream">
          {t({ en: "Participate", es: "Participar", fr: "Participer" })}
        </ActionLink>
        <ActionLink to="/locations/matanzas" variant="outline">
          {t({ en: "See Matanzas", es: "Ver Matanzas", fr: "Voir Matanzas" })}
        </ActionLink>
      </EditorialHero>
      <FieldMosaic layout="cinema" offset={1} />

      {/* Status */}
      <section className="bg-card py-14 text-card-foreground md:py-20">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Current status", es: "Estado actual", fr: "Statut actuel" }}
            title={{
              en: "Institutional coordination and approval process.",
              es: "Coordinación institucional y proceso de aprobación.",
              fr: "Coordination institutionnelle et processus d'approbation.",
            }}
            lede={{
              en: "Nothing is planted, harvested or distributed yet. The project is in the stage where land, water, institutions and participation are being organised. Everything published here is labelled for what it is.",
              es: "Todavía no se ha sembrado, cosechado ni distribuido nada. El proyecto está en la etapa de organizar tierra, agua, instituciones y participación. Todo lo publicado aquí está etiquetado por lo que es.",
              fr: "Rien n'est encore planté, récolté ni distribué. Le projet en est à l'organisation de la terre, de l'eau, des institutions et de la participation.",
            }}
            status="CURRENT"
          />
        </div>
      </section>

      {/* Why this exists */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Why this exists", es: "01 · Por qué existe", fr: "01 · Pourquoi ce projet" }}
            title={{
              en: "Food capacity is infrastructure, not charity.",
              es: "La capacidad alimentaria es infraestructura, no caridad.",
              fr: "La capacité alimentaire est une infrastructure, pas une charité.",
            }}
            lede={{
              en: "A shipment feeds a family once. A working irrigation line, a repaired tractor, a cold room and a trained operator feed a community every season. This project is built on the second idea.",
              es: "Un envío alimenta a una familia una vez. Una línea de riego funcionando, un tractor reparado, una cámara fría y un operador capacitado alimentan a una comunidad cada temporada.",
              fr: "Un envoi nourrit une famille une fois. Une irrigation qui fonctionne nourrit une communauté chaque saison.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 md:grid-cols-2 lg:grid-cols-3">
            {MISSION_PILLARS.map((p) => (
              <div key={p.n} className="bg-background p-8">
                <p className="display text-3xl text-clay">{p.n}</p>
                <h3 className="display mt-3 text-xl">{t(p.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{t(p.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · The infrastructure", es: "02 · La infraestructura", fr: "02 · L'infrastructure" }}
            title={{
              en: "Six systems have to work before food moves.",
              es: "Seis sistemas deben funcionar antes de que el alimento se mueva.",
              fr: "Six systèmes doivent fonctionner avant que la nourriture circule.",
            }}
            status="PLANNED"
          />
          <div className="mt-12">
            <ProcessFlow steps={INFRASTRUCTURE} />
          </div>
          <div className="mt-10">
            <ActionLink to="/needs" variant="cream">
              {t({ en: "See what the project needs", es: "Ver lo que necesita el proyecto", fr: "Voir les besoins du projet" })}
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Field to family */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · Field to family", es: "03 · Del campo a la familia", fr: "03 · Du champ à la famille" }}
            title={{
              en: "Every link, or the chain does not feed anyone.",
              es: "Cada eslabón, o la cadena no alimenta a nadie.",
              fr: "Chaque maillon, sinon la chaîne ne nourrit personne.",
            }}
          />
          <div className="mt-12">
            <ProcessFlow steps={FOOD_CHAIN} />
          </div>
        </div>
      </section>

      {/* Canada + Cuba */}
      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "04 · Canada + Cuba", es: "04 · Canadá + Cuba", fr: "04 · Canada + Cuba" }}
            title={{
              en: "A partnership — not a donor and a recipient.",
              es: "Una alianza — no un donante y un receptor.",
              fr: "Un partenariat — pas un donateur et un bénéficiaire.",
            }}
            lede={{
              en: "Cuba brings the land, the labour, the agricultural culture and the institutional process. Canada brings equipment, technology, logistics and training. Neither side works without the other.",
              es: "Cuba aporta la tierra, el trabajo, la cultura agrícola y el proceso institucional. Canadá aporta equipos, tecnología, logística y capacitación. Ninguna parte funciona sin la otra.",
              fr: "Cuba apporte la terre, le travail et la culture agricole. Le Canada apporte équipement, technologie, logistique et formation.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 md:grid-cols-2">
            <div className="bg-primary p-8 text-primary-foreground md:p-10">
              <p className="eyebrow opacity-80">CUBA</p>
              <ul className="mt-6 space-y-3">
                {CUBA_SIDE.map((x, i) => (
                  <li key={i} className="display border-t border-current/20 pt-3 text-lg">
                    {t(x)}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ActionLink to="/cuba" variant="outline">
                  {t({ en: "Participation in Cuba", es: "Participar desde Cuba", fr: "Participer depuis Cuba" })}
                </ActionLink>
              </div>
            </div>
            <div className="bg-soil p-8 text-soil-foreground md:p-10">
              <p className="eyebrow opacity-80">CANADA</p>
              <ul className="mt-6 space-y-3">
                {CANADA_SIDE.map((x, i) => (
                  <li key={i} className="display border-t border-current/20 pt-3 text-lg">
                    {t(x)}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ActionLink to="/canada" variant="outline">
                  {t({ en: "Support from Canada", es: "Apoyo desde Canadá", fr: "Soutien depuis le Canada" })}
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Continue", es: "Continuar", fr: "Continuer" }}
            title={{ en: "Read the project in detail.", es: "Lee el proyecto en detalle.", fr: "Lire le projet en détail." }}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <RouteCard to="/land" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "The land", es: "La tierra", fr: "La terre" }} note={{ en: "Mapping, soil science and field methodology before the first seed.", es: "Mapeo, ciencia del suelo y metodología antes de la primera semilla.", fr: "Cartographie, science du sol et méthodologie." }} />
            <RouteCard to="/people" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "The people", es: "Las personas", fr: "Les personnes" }} note={{ en: "The roles agricultural development actually creates.", es: "Los roles que el desarrollo agrícola realmente crea.", fr: "Les rôles créés par le développement agricole." }} />
            <RouteCard to="/farmers" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "The farmers", es: "Los agricultores", fr: "Les agriculteurs" }} note={{ en: "Supporting the people who already know this land.", es: "Apoyar a quienes ya conocen esta tierra.", fr: "Soutenir ceux qui connaissent déjà cette terre." }} />
            <RouteCard to="/agriculture" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "What to grow", es: "Qué cultivar", fr: "Que cultiver" }} note={{ en: "Crop families under evaluation for the region.", es: "Familias de cultivos en evaluación para la región.", fr: "Familles de cultures en évaluation." }} />
            <RouteCard to="/energy" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "Energy", es: "Energía", fr: "Énergie" }} note={{ en: "Pumps, cold storage and light need reliable power.", es: "Bombas, refrigeración y luz necesitan energía confiable.", fr: "Pompes, froid et lumière exigent une énergie fiable." }} />
            <RouteCard to="/timeline" kicker={{ en: "Chapter", es: "Capítulo", fr: "Chapitre" }} title={{ en: "Timeline", es: "Cronología", fr: "Chronologie" }} note={{ en: "What is confirmed, what is current, what is planned.", es: "Lo confirmado, lo actual y lo planificado.", fr: "Confirmé, actuel et planifié." }} />
          </div>
          <SourceNotes sources={SOURCES["matanzas"] ?? []} />
        </div>
      </section>
    </main>
  );
}
