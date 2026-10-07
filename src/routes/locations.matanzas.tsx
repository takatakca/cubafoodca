import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import {
  EditorialHero,
  EditorialChapter,
  SectionIntro,
  StatusBadge,
  SourceNotes,
  CropCard,
  SoilProfile,
  ProcessFlow,
  MediaStage,
} from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { LocationMap } from "@/components/site/map";
import { FIELD_MEDIA } from "@/content/media";
import {
  HISTORY_CHAPTERS,
  SOIL_PROTOCOL,
  CROPS,
  CROP_DISCLAIMER,
  SOURCES,
  PEOPLE_GROUPS,
} from "@/content/research";
import { seoHead } from "@/seo/head";

export const Route = createFileRoute("/locations/matanzas")({
  // French title + description from this page's hero text.
  head: () =>
    seoHead({
      title: "Matanzas — Là où commence le projet | CUBAFOOD.CA",
      description:
        "Un nouvel effort de développement agricole prend forme dans l'une des régions agricoles les plus importantes de Cuba — terre, personnes, production alimentaire, infrastructure et coopération Canada–Cuba.",
      path: "/locations/matanzas",
      type: "article",
    }),
  component: Page,
});

const CHAIN = [
  { id: "cuba", label: { en: "Cuba", es: "Cuba", fr: "Cuba" } },
  { id: "province", label: { en: "Matanzas province", es: "Provincia de Matanzas", fr: "Province de Matanzas" } },
  {
    id: "corridor",
    label: {
      en: "Matanzas / Cárdenas / Varadero corridor",
      es: "Corredor Matanzas / Cárdenas / Varadero",
      fr: "Corridor Matanzas / Cárdenas / Varadero",
    },
  },
  {
    id: "airport",
    label: {
      en: "Juan Gualberto Gómez International Airport area",
      es: "Zona del Aeropuerto Internacional Juan Gualberto Gómez",
      fr: "Secteur de l'aéroport international Juan Gualberto Gómez",
    },
  },
  {
    id: "zone",
    label: { en: "Project development area", es: "Área de desarrollo del proyecto", fr: "Zone de développement" },
  },
];

const HISTORICAL_MODEL = [
  { en: "Commodity production", es: "Producción de commodities", fr: "Production de matières premières" },
  { en: "Sugarcane prominence", es: "Predominio de la caña de azúcar", fr: "Prédominance de la canne" },
  { en: "Export-centred structures", es: "Estructuras centradas en la exportación", fr: "Structures axées sur l'export" },
  { en: "Heavy fixed infrastructure", es: "Infraestructura fija pesada", fr: "Lourde infrastructure fixe" },
  { en: "Single-crop dependency", es: "Dependencia de un solo cultivo", fr: "Dépendance à une seule culture" },
];

const FUTURE_MODEL = [
  { en: "Diversified food crops", es: "Cultivos alimentarios diversificados", fr: "Cultures vivrières diversifiées" },
  { en: "Crop rotation", es: "Rotación de cultivos", fr: "Rotation des cultures" },
  { en: "Soil health", es: "Salud del suelo", fr: "Santé des sols" },
  { en: "Efficient irrigation", es: "Riego eficiente", fr: "Irrigation efficace" },
  { en: "Farmers as partners", es: "Agricultores como socios", fr: "Agriculteurs partenaires" },
  { en: "Cold storage", es: "Cadena de frío", fr: "Chaîne du froid" },
  { en: "Local distribution", es: "Distribución local", fr: "Distribution locale" },
  { en: "Appropriate technology", es: "Tecnología apropiada", fr: "Technologie appropriée" },
  { en: "Resilience", es: "Resiliencia", fr: "Résilience" },
];

const WATER_STEPS = [
  { id: "source", label: { en: "Water source", es: "Fuente de agua", fr: "Source d'eau" }, note: { en: "Assessed for volume, quality and seasonal reliability before anything is designed.", es: "Evaluada por volumen, calidad y fiabilidad estacional antes de diseñar nada.", fr: "Évaluée avant toute conception." } },
  { id: "storage", label: { en: "Storage", es: "Almacenamiento", fr: "Stockage" }, note: { en: "Buffer capacity so a dry week is not a lost crop.", es: "Capacidad de reserva para que una semana seca no cueste la cosecha.", fr: "Capacité tampon contre les semaines sèches." } },
  { id: "filtration", label: { en: "Filtration", es: "Filtración", fr: "Filtration" }, note: { en: "Drip systems fail without clean water. Filtration protects the whole network.", es: "El goteo falla sin agua limpia. La filtración protege toda la red.", fr: "Le goutte-à-goutte échoue sans eau propre." } },
  { id: "pumping", label: { en: "Pumping", es: "Bombeo", fr: "Pompage" }, note: { en: "The largest energy load on any farm — sized with solar in mind.", es: "La mayor carga energética de una finca — dimensionada pensando en solar.", fr: "La plus grande charge énergétique d'une ferme." } },
  { id: "distribution", label: { en: "Distribution", es: "Distribución", fr: "Distribution" }, note: { en: "Mains, laterals and pressure management across the development area.", es: "Redes, laterales y gestión de presión en el área de desarrollo.", fr: "Réseaux, latéraux et gestion de pression." } },
  { id: "field", label: { en: "Field", es: "Campo", fr: "Champ" }, note: { en: "Drip preferred: more crop per litre, less energy per litre.", es: "Goteo preferido: más cultivo por litro, menos energía por litro.", fr: "Goutte-à-goutte : plus de récolte par litre." } },
  { id: "drainage", label: { en: "Drainage", es: "Drenaje", fr: "Drainage" }, note: { en: "Removing water matters as much as delivering it.", es: "Sacar el agua importa tanto como llevarla.", fr: "Évacuer l'eau compte autant que l'apporter." } },
  { id: "monitoring", label: { en: "Monitoring & maintenance", es: "Monitoreo y mantenimiento", fr: "Suivi et entretien" }, note: { en: "Scheduling, pressure checks, filter cleaning, repairs — forever.", es: "Programación, presión, limpieza de filtros y reparaciones — siempre.", fr: "Planification, pression, nettoyage et réparations." } },
];

const LOGISTICS = [
  { id: "production", label: { en: "Agricultural production", es: "Producción agrícola", fr: "Production agricole" }, note: { en: "The field is the start of the chain, not the end.", es: "El campo es el inicio de la cadena, no el final.", fr: "Le champ est le début de la chaîne." } },
  { id: "wash", label: { en: "Washing / sorting", es: "Lavado / clasificación", fr: "Lavage / tri" }, note: { en: "Quality and food safety are decided here.", es: "La calidad y la inocuidad se deciden aquí.", fr: "La qualité se décide ici." } },
  { id: "pack", label: { en: "Packing", es: "Empaque", fr: "Emballage" }, note: { en: "Protects everything already invested in the crop.", es: "Protege todo lo invertido en el cultivo.", fr: "Protège tout l'investissement." } },
  { id: "cold", label: { en: "Cold storage", es: "Refrigeración", fr: "Chambre froide" }, note: { en: "The difference between food delivered and food lost.", es: "La diferencia entre alimento entregado y alimento perdido.", fr: "La différence entre aliment livré et perdu." } },
  { id: "transport", label: { en: "Transport", es: "Transporte", fr: "Transport" }, note: { en: "Roads, vehicles, fuel and schedules across a long corridor.", es: "Caminos, vehículos, combustible y horarios en un corredor largo.", fr: "Routes, véhicules, carburant et horaires." } },
];

const DESTINATIONS = [
  { en: "Local communities", es: "Comunidades locales", fr: "Communautés locales" },
  { en: "Food distribution", es: "Distribución de alimentos", fr: "Distribution alimentaire" },
  { en: "Hospitality / tourism", es: "Hostelería / turismo", fr: "Hôtellerie / tourisme" },
  { en: "Other Cuban markets", es: "Otros mercados cubanos", fr: "Autres marchés cubains" },
];

const NEXT_STEPS = [
  { kind: "CURRENT" as const, label: { en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" } },
  { kind: "PLANNED" as const, label: { en: "Land assessment", es: "Evaluación de la tierra", fr: "Évaluation des terres" } },
  { kind: "PLANNED" as const, label: { en: "Infrastructure", es: "Infraestructura", fr: "Infrastructure" } },
  { kind: "PLANNED" as const, label: { en: "First planting", es: "Primera siembra", fr: "Première plantation" } },
];

function Page() {
  const { t } = useI18n();

  const families = [
    { key: "Viandas", label: { en: "Viandas", es: "Viandas", fr: "Viandas" } },
    { key: "Grains & legumes", label: { en: "Legumes & grains", es: "Legumbres y granos", fr: "Légumineuses et grains" } },
    { key: "Vegetables", label: { en: "Vegetables", es: "Hortalizas", fr: "Légumes" } },
    { key: "Fruit", label: { en: "Fruit", es: "Frutas", fr: "Fruits" } },
  ];

  return (
    <main>
      <EditorialHero
        eyebrow={{
          en: "Primary development · Established 2024",
          es: "Desarrollo principal · Establecido en 2024",
          fr: "Développement principal · Établi en 2024",
        }}
        title="MATANZAS"
        subtitle={{ en: "Where the project begins", es: "Donde comienza el proyecto", fr: "Là où commence le projet" }}
        body={{
          en: "A new agricultural development effort is taking shape in one of Cuba's most historically important agricultural regions — bringing together land, people, food production, infrastructure and Canada–Cuba cooperation.",
          es: "Un nuevo esfuerzo de desarrollo agrícola toma forma en una de las regiones agrícolas históricamente más importantes de Cuba — uniendo tierra, personas, producción de alimentos, infraestructura y cooperación Canadá–Cuba.",
          fr: "Un nouvel effort de développement agricole prend forme dans l'une des régions agricoles les plus importantes de Cuba — terre, personnes, production alimentaire, infrastructure et coopération Canada–Cuba.",
        }}
        statuses={["PROJECT_FACT", "UNDER_EVALUATION"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
        metrics={[
          { label: { en: "Project began", es: "Inicio del proyecto", fr: "Début du projet" }, value: "2024" },
          { label: { en: "Development area", es: "Área de desarrollo", fr: "Zone de développement" }, value: "24+ KM" },
          { label: { en: "Province", es: "Provincia", fr: "Province" }, value: "MATANZAS" },
          { label: { en: "Phase", es: "Fase", fr: "Phase" }, value: "COORDINATION" },
        ]}
      >
        <ActionLink to="/project" variant="cream">
          {t({ en: "Explore the project", es: "Explorar el proyecto", fr: "Explorer le projet" })}
        </ActionLink>
        <ActionLink to="/participate" variant="outline">
          {t({ en: "Participate", es: "Participar", fr: "Participer" })}
        </ActionLink>
      </EditorialHero>

      {/* 01 THE PLACE */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · The place", es: "01 · El lugar", fr: "01 · Le lieu" }}
            title={{
              en: "Matanzas is more than Varadero.",
              es: "Matanzas es más que Varadero.",
              fr: "Matanzas, c'est plus que Varadero.",
            }}
            lede={{
              en: "Most people arrive for the beaches. Behind them is a province of plains, rivers, bays, sugar towns, industry and farmland — one of the agricultural centres of the country, and the region where this project is being developed.",
              es: "La mayoría llega por las playas. Detrás hay una provincia de llanuras, ríos, bahías, pueblos azucareros, industria y tierra de cultivo — uno de los centros agrícolas del país y la región donde se desarrolla este proyecto.",
              fr: "La plupart viennent pour les plages. Derrière : une province de plaines, de rivières, de baies, de villes sucrières, d'industrie et de terres agricoles.",
            }}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ol className="relative border-l border-current/20 pl-8">
              {CHAIN.map((c, i) => (
                <li key={c.id} className="relative pb-8 last:pb-0">
                  <span
                    className={
                      "absolute -left-[2.15rem] mt-1.5 h-3 w-3 rounded-full border-2 border-current " +
                      (i === CHAIN.length - 1 ? "bg-clay" : "bg-background")
                    }
                    aria-hidden
                  />
                  <p className="eyebrow text-[10px] opacity-45">{String(i + 1).padStart(2, "0")}</p>
                  <p className="display mt-1 text-lg md:text-xl">{t(c.label)}</p>
                </li>
              ))}
            </ol>
            <div>
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* 02 HISTORY */}
      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · The land has a history", es: "02 · La tierra tiene historia", fr: "02 · La terre a une histoire" }}
            title={{
              en: "Three centuries of agriculture happened here before us.",
              es: "Aquí hubo tres siglos de agricultura antes que nosotros.",
              fr: "Trois siècles d'agriculture ont précédé ce projet.",
            }}
            status="REGIONAL_CONTEXT"
          />

          <ol className="mt-14 space-y-0">
            {HISTORY_CHAPTERS.map((h, i) => (
              <li
                key={i}
                className={
                  "grid gap-6 border-t border-cream/15 py-9 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12 " +
                  (h.tone === "grave" ? "bg-cream/[0.04]" : "")
                }
              >
                <p className="display text-2xl text-clay md:text-3xl">{t(h.year)}</p>
                <div>
                  <h3 className="display text-xl md:text-2xl">{t(h.title)}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed opacity-80">{t(h.body)}</p>
                  {h.tone === "grave" ? (
                    <p className="eyebrow mt-4 text-[10px] text-clay">
                      {t({
                        en: "Acknowledged history",
                        es: "Historia reconocida",
                        fr: "Histoire reconnue",
                      })}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-cream/15 pt-14">
            <p className="poster max-w-5xl text-balance">
              {t({
                en: "What should this land produce for Cuba's future?",
                es: "¿Qué debe producir esta tierra para el futuro de Cuba?",
                fr: "Que doit produire cette terre pour l'avenir de Cuba ?",
              })}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-70">
              {t({
                en: "This is regional history. No claim is made that the specific project land was historically planted with sugarcane — that would require documentation the project does not yet hold.",
                es: "Esto es historia regional. No se afirma que la tierra específica del proyecto haya sido sembrada de caña — eso requeriría documentación que el proyecto aún no posee.",
                fr: "Ceci est l'histoire régionale. Aucune affirmation n'est faite sur l'usage historique exact du terrain du projet.",
              })}
            </p>
            <div className="mt-6">
              <StatusBadge status="REGIONAL_CONTEXT" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 SUGAR → FOOD */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{
              en: "03 · From sugar history to food diversity",
              es: "03 · De la historia azucarera a la diversidad alimentaria",
              fr: "03 · De l'histoire sucrière à la diversité alimentaire",
            }}
            title={{
              en: "Two agricultural models, one landscape.",
              es: "Dos modelos agrícolas, un mismo paisaje.",
              fr: "Deux modèles agricoles, un même paysage.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 md:grid-cols-2">
            <div className="bg-soil p-8 text-soil-foreground md:p-10">
              <p className="eyebrow opacity-70">
                {t({ en: "Historical regional model", es: "Modelo regional histórico", fr: "Modèle régional historique" })}
              </p>
              <ul className="mt-6 space-y-3">
                {HISTORICAL_MODEL.map((x, i) => (
                  <li key={i} className="display border-t border-current/15 pt-3 text-lg opacity-85">
                    {t(x)}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StatusBadge status="REGIONAL_CONTEXT" />
              </div>
            </div>
            <div className="bg-primary p-8 text-primary-foreground md:p-10">
              <p className="eyebrow opacity-80">
                {t({ en: "Future food model", es: "Modelo alimentario futuro", fr: "Modèle alimentaire futur" })}
              </p>
              <ul className="mt-6 space-y-3">
                {FUTURE_MODEL.map((x, i) => (
                  <li key={i} className="display border-t border-current/20 pt-3 text-lg">
                    {t(x)}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StatusBadge status="PROPOSED" />
              </div>
            </div>
          </div>
          <p className="poster mt-16 max-w-4xl text-balance">
            {t({
              en: "The next agricultural chapter does not have to look like the last one.",
              es: "El próximo capítulo agrícola no tiene que parecerse al anterior.",
              fr: "Le prochain chapitre agricole n'a pas à ressembler au précédent.",
            })}
          </p>
        </div>
      </section>

      {/* 04 SOIL */}
      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "04 · Know the land", es: "04 · Conocer la tierra", fr: "04 · Connaître la terre" }}
            title={{
              en: "Know the land before we plant it.",
              es: "Conocer la tierra antes de sembrarla.",
              fr: "Connaître la terre avant de la semer.",
            }}
            lede={{
              en: "Red ferralitic soils are widely described in the agricultural literature of Matanzas province. That is regional context. It is not a measurement of the project parcel, and it will not be treated as one.",
              es: "Los suelos ferralíticos rojos están ampliamente descritos en la literatura agrícola de la provincia de Matanzas. Eso es contexto regional, no una medición de la parcela del proyecto.",
              fr: "Les sols ferralitiques rouges sont largement décrits dans la littérature agricole de Matanzas. C'est un contexte régional, pas une mesure de la parcelle.",
            }}
            status="REGIONAL_CONTEXT"
          />

          <div className="mt-12">
            <SoilProfile />
          </div>

          <div className="mt-14 rounded-lg border-2 border-clay/50 bg-clay/5 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow opacity-60">
                  {t({ en: "Project land soil analysis", es: "Análisis de suelo del terreno", fr: "Analyse des sols du terrain" })}
                </p>
                <p className="poster mt-3 text-4xl md:text-6xl">
                  {t({ en: "To be completed", es: "Por realizar", fr: "À réaliser" })}
                </p>
              </div>
              <StatusBadge status="PLANNED" />
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
              {t({
                en: "No soil result, pH value, nutrient level or texture class will be published on this site until a documented sampling programme has been carried out on the project land.",
                es: "No se publicará ningún resultado de suelo, pH, nivel de nutrientes o clase textural hasta que se realice un programa de muestreo documentado en el terreno del proyecto.",
                fr: "Aucun résultat de sol ne sera publié avant un programme d'échantillonnage documenté sur le terrain.",
              })}
            </p>

            <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
              {SOIL_PROTOCOL.map((s) => (
                <li key={s.n} className="bg-card p-6">
                  <p className="display text-3xl text-clay">{s.n}</p>
                  <h3 className="eyebrow mt-3">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{t(s.note)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 05 CROPS */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "05 · What could grow?", es: "05 · ¿Qué podría crecer?", fr: "05 · Que pourrait-on cultiver ?" }}
            title={{ en: "Food first.", es: "Primero, alimentos.", fr: "D'abord, la nourriture." }}
            lede={CROP_DISCLAIMER}
          />
          <div className="mt-12 space-y-14">
            {families.map((f) => {
              const list = CROPS.filter((c) => c.family.en === f.key);
              if (!list.length) return null;
              return (
                <div key={f.key}>
                  <h3 className="eyebrow border-b border-current/15 pb-4 opacity-60">{t(f.label)}</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((c) => (
                      <CropCard key={c.id} crop={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 WATER */}
      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "06 · Water before planting", es: "06 · Agua antes de sembrar", fr: "06 · L'eau avant les semis" }}
            title={{
              en: "Without water, there is no farm.",
              es: "Sin agua no hay finca.",
              fr: "Sans eau, il n'y a pas de ferme.",
            }}
            lede={{
              en: "Water is the first infrastructure decision, not the last. Source, storage, filtration, pumping, distribution, drainage and monitoring are designed as one system before a single row is planted.",
              es: "El agua es la primera decisión de infraestructura, no la última. Fuente, almacenamiento, filtración, bombeo, distribución, drenaje y monitoreo se diseñan como un solo sistema.",
              fr: "L'eau est la première décision d'infrastructure. Source, stockage, filtration, pompage, distribution, drainage et suivi forment un seul système.",
            }}
            status="PLANNED"
          />
          <div className="mt-12 hidden md:block">
            <ProcessFlow steps={WATER_STEPS} />
          </div>
          <div className="mt-12 md:hidden">
            <ProcessFlow steps={WATER_STEPS} orientation="vertical" />
          </div>
        </div>
      </section>

      {/* 07 LOGISTICS */}
      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "07 · Location & logistics", es: "07 · Ubicación y logística", fr: "07 · Localisation et logistique" }}
            title={{
              en: "Food does not become food until it arrives.",
              es: "El alimento no es alimento hasta que llega.",
              fr: "La nourriture n'existe qu'une fois arrivée.",
            }}
            lede={{
              en: "The Matanzas / Varadero corridor concentrates roads, an international airport, port infrastructure, dense communities and a large hospitality sector. That combination is strategically relevant to any food producer in the province. It does not imply any contract, agreement or land adjacency.",
              es: "El corredor Matanzas / Varadero concentra carreteras, un aeropuerto internacional, infraestructura portuaria, comunidades densas y un gran sector hotelero. Esa combinación es estratégicamente relevante. No implica ningún contrato ni colindancia.",
              fr: "Le corridor Matanzas / Varadero concentre routes, aéroport international, port, communautés et hôtellerie. Cela n'implique aucun contrat ni adjacence.",
            }}
          />
          <div className="mt-12">
            <ProcessFlow steps={LOGISTICS} orientation="vertical" />
          </div>
          <div className="mt-10">
            <p className="eyebrow opacity-55">
              {t({ en: "Potential destinations", es: "Destinos potenciales", fr: "Destinations potentielles" })}
            </p>
            <div className="mt-5 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
              {DESTINATIONS.map((d, i) => (
                <div key={i} className="bg-card p-6">
                  <p className="display text-lg">{t(d)}</p>
                  <div className="mt-4">
                    <StatusBadge status="PROPOSED" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 PEOPLE */}
      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "08 · The people", es: "08 · Las personas", fr: "08 · Les personnes" }}
            title={{
              en: "Agriculture is built by people.",
              es: "La agricultura la construyen las personas.",
              fr: "L'agriculture est bâtie par des personnes.",
            }}
            lede={{
              en: "Machinery is bought. Skill is not. These are the working groups a development of this size requires.",
              es: "La maquinaria se compra. La destreza no. Estos son los grupos de trabajo que exige un desarrollo de este tamaño.",
              fr: "La machinerie s'achète. Le savoir-faire, non.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
            {PEOPLE_GROUPS.map((g, i) => (
              <div key={g.id} className="bg-background p-7">
                <p className="display text-3xl text-clay">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-3 text-xl">{t(g.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed opacity-75">{t(g.body)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <MediaStage
              src={FIELD_MEDIA.clip3.src}
              poster={FIELD_MEDIA.clip3.poster}
              title="Field documentation — Matanzas project area"
              caption={{
                en: "Unedited field documentation. No person shown is presented as project staff.",
                es: "Documentación de campo sin editar. Ninguna persona mostrada se presenta como personal del proyecto.",
                fr: "Documentation brute. Aucune personne montrée n'est présentée comme membre du projet.",
              }}
            />
          </div>
        </div>
      </section>

      {/* 09 NEXT */}
      <section className="bg-soil py-16 text-soil-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "09 · What comes next", es: "09 · Qué viene después", fr: "09 · La suite" }}
            title={{
              en: "The sequence from here.",
              es: "La secuencia desde aquí.",
              fr: "La séquence à partir d'ici.",
            }}
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/20 sm:grid-cols-2 lg:grid-cols-4">
            {NEXT_STEPS.map((s, i) => (
              <li key={i} className="bg-soil p-7">
                <p className="display text-3xl opacity-40">{String(i + 1).padStart(2, "0")}</p>
                <p className="display mt-3 text-xl">{t(s.label)}</p>
                <div className="mt-4">
                  <StatusBadge status={s.kind} />
                </div>
              </li>
            ))}
          </ol>

          <p className="poster mt-16 max-w-4xl text-balance">
            {t({
              en: "Help build the first development.",
              es: "Ayuda a construir el primer desarrollo.",
              fr: "Aidez à bâtir le premier développement.",
            })}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/cuba" className="group rounded-lg border border-current/25 p-6 transition-colors hover:bg-current/10">
              <p className="display text-xl">{t({ en: "I live in Cuba", es: "Vivo en Cuba", fr: "Je vis à Cuba" })}</p>
              <span aria-hidden className="eyebrow mt-6 block text-clay">→</span>
            </Link>
            <Link to="/canada" className="group rounded-lg border border-current/25 p-6 transition-colors hover:bg-current/10">
              <p className="display text-xl">{t({ en: "I live in Canada", es: "Vivo en Canadá", fr: "Je vis au Canada" })}</p>
              <span aria-hidden className="eyebrow mt-6 block text-clay">→</span>
            </Link>
            <Link to="/needs" className="group rounded-lg border border-current/25 p-6 transition-colors hover:bg-current/10">
              <p className="display text-xl">{t({ en: "I have equipment", es: "Tengo equipos", fr: "J'ai de l'équipement" })}</p>
              <span aria-hidden className="eyebrow mt-6 block text-clay">→</span>
            </Link>
            <Link to="/collaboration" className="group rounded-lg border border-current/25 p-6 transition-colors hover:bg-current/10">
              <p className="display text-xl">
                {t({ en: "I represent an organization", es: "Represento una organización", fr: "Je représente un organisme" })}
              </p>
              <span aria-hidden className="eyebrow mt-6 block text-clay">→</span>
            </Link>
          </div>

          <SourceNotes sources={[...(SOURCES["matanzas"] ?? []), ...(SOURCES["agriculture"] ?? [])]} />
        </div>
      </section>
    </main>
  );
}
