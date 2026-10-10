import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { MISSION_PILLARS } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Notre mission | CUBAFOOD.CA" },
      { name: "description", content: "The mission of CUBAFOOD.CA: strengthen local food-growing capacity by connecting Cuban agricultural knowledge with practical infrastructure, collaboration and planning." },
      { property: "og:title", content: "Cultivando Cuba. Juntos. — Our mission" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "CCC · Cooperación Canadá–Cuba", es: "CCC · Cooperación Canadá–Cuba", fr: "CCC · Coopération Canada–Cuba" }}
        title="Cultivando Cuba. Juntos."
        subtitle={{
          en: "Help Cuba grow more food — not only receive more of it.",
          es: "Ayudar a Cuba a producir más alimentos, no solo a recibirlos.",
          fr: "Aider Cuba à produire davantage, pas seulement à recevoir davantage.",
        }}
        body={{
          en: "CUBAFOOD.CA is a Canada–Cuba agricultural development initiative whose purpose is to build the conditions for durable local food production. Its current stage remains one of coordination and assessment.",
          es: "CUBAFOOD.CA es una iniciativa de desarrollo agrícola entre Canadá y Cuba que busca crear condiciones para una producción alimentaria local duradera. Actualmente se encuentra en fase de coordinación y evaluación.",
          fr: "CUBAFOOD.CA est une initiative de développement agricole Canada–Cuba visant à créer les conditions d'une production alimentaire locale durable. Le projet est actuellement en phase de coordination et d'évaluation.",
        }}
        statuses={["PROJECT_FACT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip1.src, poster: FIELD_MEDIA.clip1.poster }}
      >
        <ActionLink to="/project" variant="cream">{t({ en: "See the project", es: "Conocer el proyecto", fr: "Découvrir le projet" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Our direction", es: "01 · Nuestro rumbo", fr: "01 · Notre ambition" }}
            title={{ en: "Growing capacity takes more than land.", es: "Cultivar capacidad requiere más que tierra.", fr: "Pour produire, la terre ne suffit pas." }}
            lede={{
              en: "Production depends on people, water, knowledge, machinery, energy, storage and reliable delivery. Each element matters; none is represented here as a completed operational system.",
              es: "La producción depende de personas, agua, conocimientos, maquinaria, energía, almacenamiento y transporte. Cada elemento cuenta; ninguno se presenta aquí como sistema operativo ya completado.",
              fr: "La production dépend des personnes, de l'eau, du savoir, de la machinerie, de l'énergie, du stockage et du transport. Chaque élément compte; aucun n'est présenté comme déjà opérationnel.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden bg-foreground/15 lg:grid-cols-2">
            {MISSION_PILLARS.map((p) => (
              <article key={p.n} className="flex min-h-80 flex-col justify-between bg-card p-8 md:p-11">
                <span className="display text-6xl text-clay">{p.n}</span>
                <div className="mt-10">
                  <h3 className="display text-3xl md:text-4xl">{t(p.title)}</h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed opacity-75">{t(p.body)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate bg-charcoal py-24 text-cream md:py-36">
        <img src={FIELD_MEDIA.clip5.poster} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="shell">
          <p className="eyebrow text-secondary">{t({ en: "02 · The promise we will not make", es: "02 · La promesa que no haremos", fr: "02 · Ce que nous ne promettrons pas" })}</p>
          <h2 className="poster mt-8 max-w-6xl text-balance">{t({ en: "Progress must be proven.", es: "El progreso se demuestra.", fr: "Le progrès se démontre." })}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "We will not confuse project intentions with government approval, confirmed employment, crop results, harvests or distribution. The public record should improve as verified evidence becomes available.",
            es: "No confundiremos las intenciones del proyecto con autorizaciones gubernamentales, empleos confirmados, resultados de cultivos, cosechas ni distribuciones. La información pública se actualizará cuando existan pruebas verificadas.",
            fr: "Nous ne confondrons pas les intentions du projet avec les autorisations gouvernementales, des emplois confirmés, des résultats agronomiques, des récoltes ou des distributions. L'information publique évoluera avec les preuves vérifiées.",
          })}</p>
          <div className="mt-10"><StatusBadge status="AWAITING_APPROVAL" /></div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/transparency" variant="cream">{t({ en: "Our transparency commitments", es: "Nuestros compromisos de transparencia", fr: "Nos engagements de transparence" })}</ActionLink>
            <ActionLink to="/participate" variant="outline">{t({ en: "Take part", es: "Participar", fr: "Participer" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
