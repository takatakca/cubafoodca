import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import {
  EditorialHero,
  SectionIntro,
  StatusBadge,
  SoilProfile,
  ProcessFlow,
} from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FIELD_MEDIA } from "@/content/media";
import { SOIL_PROTOCOL, SOURCES } from "@/content/research";
import { SourceNotes } from "@/components/site/editorial";
import { seoHead } from "@/seo/head";

export const Route = createFileRoute("/land")({
  // French title + description from this page's hero text.
  head: () =>
    seoHead({
      title: "La terre — Avant la première graine | CUBAFOOD.CA",
      description:
        "L'agriculture commence par la mesure. N'importe qui peut promettre une récolte. Un projet sérieux mesure d'abord.",
      path: "/land",
      type: "article",
    }),
  component: Page,
});

const ASSESSMENT = [
  { id: "mapping", label: { en: "Mapping", es: "Cartografía", fr: "Cartographie" }, note: { en: "Establish boundaries, access, slope and existing features.", es: "Establecer límites, accesos, pendiente y elementos existentes.", fr: "Limites, accès, pente et éléments existants." } },
  { id: "sampling", label: { en: "Sampling", es: "Muestreo", fr: "Échantillonnage" }, note: { en: "Physical soil samples on a documented grid, at depth.", es: "Muestras físicas de suelo en una cuadrícula documentada, a profundidad.", fr: "Échantillons physiques sur une grille documentée." } },
  { id: "analysis", label: { en: "Soil analysis", es: "Análisis de suelo", fr: "Analyse de sol" }, note: { en: "Laboratory results, not assumptions.", es: "Resultados de laboratorio, no suposiciones.", fr: "Résultats de laboratoire, pas de suppositions." } },
  { id: "water", label: { en: "Water evaluation", es: "Evaluación del agua", fr: "Évaluation de l'eau" }, note: { en: "Sources, volume, seasonality and quality.", es: "Fuentes, volumen, estacionalidad y calidad.", fr: "Sources, volume, saisonnalité et qualité." } },
  { id: "suitability", label: { en: "Crop suitability", es: "Aptitud de cultivos", fr: "Aptitude des cultures" }, note: { en: "Match crops to the land as measured — not as hoped.", es: "Ajustar los cultivos a la tierra medida, no a la deseada.", fr: "Adapter les cultures à la terre mesurée." } },
];

const WATER_CHAIN = [
  { id: "source", label: { en: "Source", es: "Fuente", fr: "Source" }, note: { en: "Wells, surface water or supply — verified before design.", es: "Pozos, agua superficial o suministro — verificado antes de diseñar.", fr: "Puits, eaux de surface ou réseau — vérifiés avant conception." } },
  { id: "storage", label: { en: "Storage", es: "Almacenamiento", fr: "Stockage" }, note: { en: "Buffer between what is available and what is needed.", es: "Colchón entre lo disponible y lo necesario.", fr: "Tampon entre disponible et nécessaire." } },
  { id: "filtration", label: { en: "Filtration", es: "Filtración", fr: "Filtration" }, note: { en: "Drip lines die without it.", es: "Sin ella, el goteo se obstruye y muere.", fr: "Sans elle, le goutte-à-goutte se bouche." } },
  { id: "pumping", label: { en: "Pumping", es: "Bombeo", fr: "Pompage" }, note: { en: "The largest energy load on any farm.", es: "La mayor carga energética de cualquier finca.", fr: "La plus grande charge énergétique d'une ferme." } },
  { id: "irrigation", label: { en: "Irrigation", es: "Riego", fr: "Irrigation" }, note: { en: "Drip and scheduling — more crop per litre.", es: "Goteo y programación — más cultivo por litro.", fr: "Goutte-à-goutte et planification." } },
  { id: "field", label: { en: "Field", es: "Campo", fr: "Champ" }, note: { en: "Where the water finally becomes food.", es: "Donde el agua finalmente se convierte en alimento.", fr: "Où l'eau devient enfin nourriture." } },
  { id: "monitoring", label: { en: "Monitoring", es: "Monitoreo", fr: "Suivi" }, note: { en: "Measured, recorded, corrected.", es: "Medido, registrado, corregido.", fr: "Mesuré, enregistré, corrigé." } },
];

const ZONES = [
  { id: "A", title: { en: "Zone A", es: "Zona A", fr: "Zone A" }, note: { en: "Illustrative management zone — sample grid and drainage observation.", es: "Zona de manejo ilustrativa — cuadrícula de muestreo y observación de drenaje.", fr: "Zone de gestion illustrative — grille d'échantillonnage." } },
  { id: "B", title: { en: "Zone B", es: "Zona B", fr: "Zone B" }, note: { en: "Illustrative management zone — texture and compaction checks.", es: "Zona ilustrativa — pruebas de textura y compactación.", fr: "Zone illustrative — texture et compaction." } },
  { id: "C", title: { en: "Zone C", es: "Zona C", fr: "Zone C" }, note: { en: "Illustrative management zone — salinity and water proximity.", es: "Zona ilustrativa — salinidad y proximidad al agua.", fr: "Zone illustrative — salinité et proximité de l'eau." } },
  { id: "D", title: { en: "Zone D", es: "Zona D", fr: "Zone D" }, note: { en: "Illustrative management zone — previous land use review.", es: "Zona ilustrativa — revisión del uso anterior de la tierra.", fr: "Zone illustrative — usage antérieur du terrain." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "The land", es: "La tierra", fr: "La terre" }}
        title={{ en: "Before the first seed.", es: "Antes de la primera semilla.", fr: "Avant la première graine." }}
        subtitle={{
          en: "Agriculture begins with measurement.",
          es: "La agricultura empieza con la medición.",
          fr: "L'agriculture commence par la mesure.",
        }}
        body={{
          en: "Anyone can promise a harvest. A serious project first maps the ground, samples the soil, tests the water and only then decides what can honestly be grown.",
          es: "Cualquiera puede prometer una cosecha. Un proyecto serio primero mapea el terreno, muestrea el suelo, analiza el agua y solo entonces decide qué se puede cultivar con honestidad.",
          fr: "N'importe qui peut promettre une récolte. Un projet sérieux mesure d'abord.",
        }}
        statuses={["PLANNED", "UNDER_EVALUATION"]}
        media={{ video: FIELD_MEDIA.clip3.src, poster: FIELD_MEDIA.clip3.poster }}
        tone="soil"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Land assessment", es: "01 · Evaluación de la tierra", fr: "01 · Évaluation du terrain" }}
            title={{
              en: "Five things must be known before planning anything.",
              es: "Cinco cosas deben conocerse antes de planificar nada.",
              fr: "Cinq choses à connaître avant toute planification.",
            }}
            status="PLANNED"
          />
          <div className="mt-12">
            <ProcessFlow steps={ASSESSMENT} />
          </div>
        </div>
      </section>

      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · Soil profile", es: "02 · Perfil del suelo", fr: "02 · Profil du sol" }}
            title={{
              en: "What a field actually looks like from the side.",
              es: "Cómo se ve realmente un campo visto de lado.",
              fr: "À quoi ressemble un champ vu de côté.",
            }}
            lede={{
              en: "Root depth, drainage and organic matter decide which crops are realistic. This is a general soil model — the project's own profile will be published once sampling is complete.",
              es: "La profundidad radicular, el drenaje y la materia orgánica deciden qué cultivos son realistas. Este es un modelo general — el perfil propio del proyecto se publicará al completar el muestreo.",
              fr: "Profondeur racinaire, drainage et matière organique déterminent les cultures réalistes.",
            }}
            status="UNDER_EVALUATION"
          />
          <div className="mt-12">
            <SoilProfile />
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · Field methodology", es: "03 · Metodología de campo", fr: "03 · Méthodologie de terrain" }}
            title={{
              en: "Divide the land, then measure each part separately.",
              es: "Dividir la tierra y medir cada parte por separado.",
              fr: "Diviser la terre, puis mesurer chaque partie."
            }}
            lede={{
              en: "The diagram below is an illustrative methodology. These are not surveyed zones and no sampling results exist yet.",
              es: "El diagrama siguiente es una metodología ilustrativa. No son zonas levantadas en campo y aún no existen resultados de muestreo.",
              fr: "Le schéma ci-dessous est une méthodologie illustrative, sans relevés réels.",
            }}
          />
          <div className="mt-6">
            <StatusBadge status="NOT_YET_ACTIVE" />
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-cream/15 sm:grid-cols-2">
            {ZONES.map((z) => (
              <div key={z.id} className="bg-charcoal p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="display text-4xl text-clay">{z.id}</p>
                  <p className="eyebrow text-[10px] opacity-45">
                    {t({ en: "Illustrative", es: "Ilustrativo", fr: "Illustratif" })}
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-6 gap-2" aria-hidden>
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        "aspect-square rounded-sm border border-cream/20 " +
                        (i % 5 === 0 ? "bg-clay/70" : "bg-cream/[0.06]")
                      }
                    />
                  ))}
                </div>
                <p className="eyebrow mt-4 text-[10px] opacity-50">
                  {t({ en: "Sample points", es: "Puntos de muestreo", fr: "Points d'échantillonnage" })}
                </p>
                <h3 className="display mt-4 text-xl">{t(z.title)}</h3>
                <p className="mt-2 text-sm opacity-75">{t(z.note)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "04 · Soil protocol", es: "04 · Protocolo de suelos", fr: "04 · Protocole de sol" }}
            title={{
              en: "Sixteen steps between raw ground and an honest planting plan.",
              es: "Dieciséis pasos entre el terreno bruto y un plan de siembra honesto.",
              fr: "Seize étapes entre un terrain brut et un plan de plantation honnête.",
            }}
            lede={{
              en: "Each step below requires laboratory or field verification. None of them have been completed for the project land yet.",
              es: "Cada paso requiere verificación de laboratorio o de campo. Ninguno se ha completado todavía en la tierra del proyecto.",
              fr: "Chaque étape exige une vérification en laboratoire ou sur le terrain.",
            }}
            status="NOT_YET_ACTIVE"
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
            {SOIL_PROTOCOL.map((s) => (
              <li key={s.n} className="bg-background p-6">
                <p className="display text-3xl text-clay">{s.n}</p>
                <h3 className="display mt-3 text-lg">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{t(s.note)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "05 · Water", es: "05 · Agua", fr: "05 · Eau" }}
            title={{
              en: "From the source to the plant, and back to the record book.",
              es: "De la fuente a la planta, y de vuelta al registro.",
              fr: "De la source à la plante, puis au registre.",
            }}
          />
          <div className="mt-12">
            <ProcessFlow steps={WATER_CHAIN} orientation="vertical" />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ActionLink to="/agriculture">
              {t({ en: "What could grow here", es: "Qué podría crecer aquí", fr: "Ce qui pourrait pousser ici" })}
            </ActionLink>
            <ActionLink to="/needs" variant="outline">
              {t({ en: "Equipment needed", es: "Equipos necesarios", fr: "Équipement requis" })}
            </ActionLink>
          </div>
          <SourceNotes sources={SOURCES["soil"] ?? SOURCES["matanzas"] ?? []} />
        </div>
      </section>
    </main>
  );
}
