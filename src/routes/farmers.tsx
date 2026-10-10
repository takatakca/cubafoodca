import { FieldMosaic } from "@/components/site/field-mosaic";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FarmerForm } from "@/components/site/forms";
import { FIELD_MEDIA } from "@/content/media";
import { CUBAN_PROVINCES, FARMER_REQUESTS } from "@/content/roles";
import { TRAINING_MODULES } from "@/content/research";

export const Route = createFileRoute("/farmers")({
  head: () => ({
    meta: [
      { title: "Farmers — Support the People Who Already Know the Land | CUBAFOOD.CA" },
      {
        name: "description",
        content:
          "CUBAFOOD.CA does not want to replace Cuban farmers. Register your farm or cooperative for equipment sharing, irrigation, inputs, storage, transport and training collaboration.",
      },
      { property: "og:title", content: "Support the People Who Already Know the Land" },
      { property: "og:description", content: "Farmer and cooperative collaboration with the CUBAFOOD.CA agricultural project in Matanzas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const SUPPORT_AREAS = [
  { id: "equipment", title: { en: "Shared equipment", es: "Equipos compartidos", fr: "Équipement partagé" }, body: { en: "One tractor used by several producers does more work than one tractor parked.", es: "Un tractor usado por varios productores rinde más que un tractor parado.", fr: "Un tracteur partagé travaille plus qu'un tracteur immobile." } },
  { id: "irrigation", title: { en: "Irrigation", es: "Riego", fr: "Irrigation" }, body: { en: "Pumps, pipe, drip line and the technical help to size them correctly.", es: "Bombas, tuberías, goteo y la ayuda técnica para dimensionarlos bien.", fr: "Pompes, tuyaux, goutte-à-goutte et appui technique." } },
  { id: "inputs", title: { en: "Seeds and inputs", es: "Semillas e insumos", fr: "Semences et intrants" }, body: { en: "Seed and input support tied to soil results, not guesswork.", es: "Apoyo en semillas e insumos ligado a resultados de suelo, no a suposiciones.", fr: "Appui en semences lié aux résultats de sol." } },
  { id: "storage", title: { en: "Storage", es: "Almacenamiento", fr: "Stockage" }, body: { en: "Dry storage and cold rooms turn a good harvest into food that lasts.", es: "Almacenamiento seco y cámaras frías convierten una buena cosecha en alimento que dura.", fr: "Stockage sec et froid font durer la récolte." } },
  { id: "transport", title: { en: "Transport", es: "Transporte", fr: "Transport" }, body: { en: "Produce that cannot move does not reach a family.", es: "El producto que no se mueve no llega a ninguna familia.", fr: "Un produit immobile n'atteint aucune famille." } },
  { id: "training", title: { en: "Training", es: "Capacitación", fr: "Formation" }, body: { en: "Two-way: machinery and cold chain from Canada, tropical agronomy from Cuba.", es: "En dos direcciones: maquinaria y frío desde Canadá, agronomía tropical desde Cuba.", fr: "Dans les deux sens : machinerie du Canada, agronomie tropicale de Cuba." } },
  { id: "exchange", title: { en: "Knowledge exchange", es: "Intercambio de conocimiento", fr: "Échange de savoir" }, body: { en: "Cuban producers have worked this climate for generations. That knowledge leads.", es: "Los productores cubanos llevan generaciones trabajando este clima. Ese conocimiento manda.", fr: "Les producteurs cubains connaissent ce climat depuis des générations." } },
  { id: "partnership", title: { en: "Production partnerships", es: "Alianzas productivas", fr: "Partenariats de production" }, body: { en: "Collaboration between the project, cooperatives and independent producers.", es: "Colaboración entre el proyecto, cooperativas y productores independientes.", fr: "Collaboration entre le projet, coopératives et producteurs." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Farmers & cooperatives", es: "Agricultores y cooperativas", fr: "Agriculteurs et coopératives" }}
        title={{
          en: "We do not want to replace Cuban farmers.",
          es: "No queremos sustituir a los agricultores cubanos.",
          fr: "Nous ne voulons pas remplacer les agriculteurs cubains.",
        }}
        subtitle={{
          en: "We want to help them produce more.",
          es: "Queremos ayudarlos a producir más.",
          fr: "Nous voulons les aider à produire davantage.",
        }}
        body={{
          en: "The people who already work this land are the starting point of the project, not an audience for it. Register your farm or cooperative so collaboration can be planned around real producers.",
          es: "Quienes ya trabajan esta tierra son el punto de partida del proyecto, no su público. Registra tu finca o cooperativa para que la colaboración se planifique con productores reales.",
          fr: "Ceux qui travaillent déjà cette terre sont le point de départ du projet.",
        }}
        statuses={["CURRENT"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
        tone="green"
      >
        <ActionLink href="#register" variant="cream">
          {t({ en: "Register your farm", es: "Registra tu finca", fr: "Inscrivez votre ferme" })}
        </ActionLink>
      </EditorialHero>
      <FieldMosaic layout="stack" offset={0} />

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Collaboration", es: "01 · Colaboración", fr: "01 · Collaboration" }}
            title={{
              en: "Eight ways this project can support a producer.",
              es: "Ocho formas en que este proyecto puede apoyar a un productor.",
              fr: "Huit façons de soutenir un producteur.",
            }}
            status="PROPOSED"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_AREAS.map((s) => (
              <div key={s.id} className="bg-background p-6">
                <h3 className="display text-lg">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{t(s.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · What producers can request", es: "02 · Qué pueden solicitar", fr: "02 · Ce qui peut être demandé" }}
            title={{
              en: "Ask for what is actually missing.",
              es: "Pide lo que realmente falta.",
              fr: "Demandez ce qui manque vraiment.",
            }}
          />
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {FARMER_REQUESTS.map((r, i) => (
              <li key={i} className="eyebrow rounded-full border border-current/25 px-4 py-2.5 text-[11px]">
                {t(r)}
              </li>
            ))}
          </ul>
          <div className="mt-8"><StatusBadge status="PROPOSED" /></div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · Training", es: "03 · Capacitación", fr: "03 · Formation" }}
            title={{
              en: "Training is part of the equipment.",
              es: "La capacitación es parte del equipo.",
              fr: "La formation fait partie de l'équipement.",
            }}
            lede={{
              en: "A machine without a trained operator becomes scrap in one season. These modules are planned alongside every piece of equipment.",
              es: "Una máquina sin operador capacitado se convierte en chatarra en una temporada. Estos módulos se planifican junto a cada equipo.",
              fr: "Une machine sans opérateur formé devient de la ferraille en une saison.",
            }}
            status="PLANNED"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
            {TRAINING_MODULES.map((m) => (
              <div key={m.id} className="bg-charcoal p-6">
                <h3 className="display text-lg">{t(m.title)}</h3>
                <p className="mt-2 text-sm opacity-70">{t(m.note)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="bg-background py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow={{ en: "04 · Register", es: "04 · Registro", fr: "04 · Inscription" }}
            title={{
              en: "Register your farm or cooperative.",
              es: "Registra tu finca o cooperativa.",
              fr: "Inscrivez votre ferme ou coopérative.",
            }}
            lede={{
              en: "Registration records interest in collaboration. It is not a contract, a purchase or a promise of supply.",
              es: "El registro documenta interés en colaborar. No es un contrato, una compra ni una promesa de suministro.",
              fr: "L'inscription enregistre un intérêt, sans contrat ni promesse.",
            }}
          />
          <FarmerForm provinces={CUBAN_PROVINCES} />
        </div>
      </section>
    </main>
  );
}
