import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import {
  EditorialHero,
  SectionIntro,
  StatusBadge,
  CropCard,
  SourceNotes,
} from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FIELD_MEDIA } from "@/content/media";
import { CROPS, CROP_DISCLAIMER, AGROECOLOGY_TOPICS, SOURCES } from "@/content/research";
import { seoHead } from "@/seo/head";

export const Route = createFileRoute("/agriculture")({
  // French title + description from this page's hero text.
  head: () =>
    seoHead({
      title: "Production agricole — Que devons-nous cultiver ? | CUBAFOOD.CA",
      description:
        "De la nourriture pour les gens, décidée par la terre. Ce sont des catégories en évaluation, pas un plan de plantation.",
      path: "/agriculture",
      type: "article",
    }),
  component: Page,
});

const FILTERS = [
  { id: "all", label: { en: "All", es: "Todos", fr: "Tous" }, match: () => true },
  { id: "viandas", label: { en: "Viandas", es: "Viandas", fr: "Viandas" }, match: (f: string) => /vianda|root|raíz|racine|tuber/i.test(f) },
  { id: "legumes", label: { en: "Legumes", es: "Legumbres", fr: "Légumineuses" }, match: (f: string) => /legum|frijol|légumineuse/i.test(f) },
  { id: "vegetables", label: { en: "Vegetables", es: "Hortalizas", fr: "Légumes" }, match: (f: string) => /vegetable|hortaliza|légume(?!s? sec)/i.test(f) },
  { id: "fruit", label: { en: "Fruit", es: "Frutas", fr: "Fruits" }, match: (f: string) => /fruit|fruta/i.test(f) },
];

const OLD_MODEL = [
  { en: "One dominant crop", es: "Un cultivo dominante", fr: "Une culture dominante" },
  { en: "Export orientation", es: "Orientación a la exportación", fr: "Orientation export" },
  { en: "Soil worked for volume", es: "Suelo trabajado por volumen", fr: "Sol exploité pour le volume" },
  { en: "Vulnerability to a single market", es: "Vulnerabilidad a un solo mercado", fr: "Vulnérabilité à un seul marché" },
];

const NEW_MODEL = [
  { en: "Multiple food crops", es: "Múltiples cultivos alimentarios", fr: "Cultures vivrières multiples" },
  { en: "Local consumption first", es: "Primero el consumo local", fr: "Consommation locale d'abord" },
  { en: "Rotation and soil recovery", es: "Rotación y recuperación del suelo", fr: "Rotation et régénération du sol" },
  { en: "Resilience across seasons", es: "Resiliencia entre temporadas", fr: "Résilience saisonnière" },
];

function Page() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");

  const shown = useMemo(() => {
    const f = FILTERS.find((x) => x.id === filter) ?? FILTERS[0]!;
    return CROPS.filter((c) => f.match(`${c.family.en} ${c.family.es ?? ""} ${c.family.fr ?? ""}`));
  }, [filter]);

  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Agricultural production", es: "Producción agrícola", fr: "Production agricole" }}
        title={{ en: "What should we grow?", es: "¿Qué debemos cultivar?", fr: "Que devons-nous cultiver ?" }}
        subtitle={{
          en: "Food for people, decided by the land.",
          es: "Alimento para las personas, decidido por la tierra.",
          fr: "De la nourriture pour les gens, décidée par la terre.",
        }}
        body={{
          en: "These are crop categories under evaluation for the region — not a planting plan. Final selection depends on soil results, water availability, climate and institutional approval.",
          es: "Estas son categorías de cultivo en evaluación para la región — no un plan de siembra. La selección final depende de los resultados de suelo, la disponibilidad de agua, el clima y la aprobación institucional.",
          fr: "Ce sont des catégories en évaluation, pas un plan de plantation.",
        }}
        statuses={["UNDER_EVALUATION"]}
        media={{ video: FIELD_MEDIA.clip4.src, poster: FIELD_MEDIA.clip4.poster }}
        tone="green"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Crop explorer", es: "01 · Explorador de cultivos", fr: "01 · Explorateur de cultures" }}
            title={{
              en: "Every crop here is a question, not a promise.",
              es: "Cada cultivo aquí es una pregunta, no una promesa.",
              fr: "Chaque culture ici est une question, pas une promesse.",
            }}
            lede={CROP_DISCLAIMER}
          />

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Crop filters">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={
                  "eyebrow min-h-11 rounded-full border px-5 py-2.5 transition-colors " +
                  (filter === f.id ? "border-primary bg-primary text-primary-foreground" : "border-current/25 hover:bg-current/5")
                }
              >
                {t(f.label)}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((c) => (
              <CropCard key={c.id} crop={c} />
            ))}
          </div>
          {!shown.length ? (
            <p className="mt-10 text-sm opacity-65">
              {t({
                en: "No crops in this category yet.",
                es: "Todavía no hay cultivos en esta categoría.",
                fr: "Aucune culture dans cette catégorie pour l'instant.",
              })}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{
              en: "02 · From sugar history to food diversity",
              es: "02 · De la historia azucarera a la diversidad alimentaria",
              fr: "02 · De l'histoire sucrière à la diversité alimentaire",
            }}
            title={{
              en: "The region's agricultural past was built around one crop.",
              es: "El pasado agrícola de la región se construyó alrededor de un solo cultivo.",
              fr: "Le passé agricole de la région s'est construit autour d'une seule culture.",
            }}
            status="REGIONAL_CONTEXT"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-cream/15 md:grid-cols-2">
            <div className="bg-soil p-8 text-soil-foreground md:p-10">
              <p className="eyebrow opacity-70">
                {t({ en: "Historical regional production", es: "Producción regional histórica", fr: "Production régionale historique" })}
              </p>
              <ul className="mt-6 space-y-3">
                {OLD_MODEL.map((x, i) => (
                  <li key={i} className="display border-t border-current/15 pt-3 text-lg opacity-85">{t(x)}</li>
                ))}
              </ul>
              <div className="mt-8"><StatusBadge status="REGIONAL_CONTEXT" /></div>
            </div>
            <div className="bg-primary p-8 text-primary-foreground md:p-10">
              <p className="eyebrow opacity-80">
                {t({ en: "Proposed food strategy", es: "Estrategia alimentaria propuesta", fr: "Stratégie alimentaire proposée" })}
              </p>
              <ul className="mt-6 space-y-3">
                {NEW_MODEL.map((x, i) => (
                  <li key={i} className="display border-t border-current/20 pt-3 text-lg">{t(x)}</li>
                ))}
              </ul>
              <div className="mt-8"><StatusBadge status="PROPOSED" /></div>
            </div>
          </div>
          <p className="poster mt-16 max-w-5xl text-balance">
            {t({
              en: "The future of agriculture must start with the land's history — not ignore it.",
              es: "El futuro de la agricultura debe partir de la historia de la tierra — no ignorarla.",
              fr: "L'avenir de l'agriculture doit partir de l'histoire de la terre — pas l'ignorer.",
            })}
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · How it would be grown", es: "03 · Cómo se cultivaría", fr: "03 · Comment cultiver" }}
            title={{
              en: "Agroecology is not a slogan. It is a method.",
              es: "La agroecología no es un eslogan. Es un método.",
              fr: "L'agroécologie n'est pas un slogan. C'est une méthode.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-3">
            {AGROECOLOGY_TOPICS.map((a) => (
              <div key={a.id} className="bg-background p-7">
                <h3 className="display text-lg">{t(a.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed opacity-75">{t(a.body)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ActionLink to="/land">{t({ en: "The land and soil study", es: "La tierra y el estudio de suelos", fr: "La terre et l'étude des sols" })}</ActionLink>
            <ActionLink to="/farmers" variant="outline">{t({ en: "Farmers", es: "Agricultores", fr: "Agriculteurs" })}</ActionLink>
          </div>
          <SourceNotes sources={SOURCES["crops"] ?? SOURCES["matanzas"] ?? []} />
        </div>
      </section>
    </main>
  );
}
