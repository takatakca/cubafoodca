import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { AGROECOLOGY_TOPICS } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { FieldMosaic } from "@/components/site/field-mosaic";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/agroecology")({
  head: () => ({
    meta: [
      { title: "Agroécologie et santé des sols | CUBAFOOD.CA" },
      { name: "description", content: "Explore soil health, crop rotation, biodiversity and integrated pest management as proposed principles for responsible agriculture in Matanzas. No field results are claimed." },
      { property: "og:title", content: "A living soil. A resilient future. — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Agriculture · Ecology · Resilience", es: "Agricultura · Ecología · Resiliencia", fr: "Agriculture · Écologie · Résilience" }}
        title={{ en: "Begin with a living soil.", es: "Todo empieza por un suelo vivo.", fr: "Tout commence par un sol vivant." }}
        subtitle={{ en: "The most important infrastructure is below our feet.", es: "La infraestructura más importante está bajo nuestros pies.", fr: "La première infrastructure se trouve sous nos pieds." }}
        body={{
          en: "Soil structure, biological diversity, water management and informed cultivation decisions belong together. These are principles to assess, not techniques already installed or results measured on project land.",
          es: "La estructura del suelo, la biodiversidad, el manejo del agua y las decisiones de cultivo fundamentadas forman un conjunto. Son principios por evaluar, no técnicas ya aplicadas ni resultados medidos en el terreno del proyecto.",
          fr: "La structure du sol, la biodiversité, la gestion de l'eau et des choix de culture éclairés forment un tout. Ces principes restent à évaluer : il ne s'agit ni de pratiques déjà implantées ni de résultats mesurés sur le terrain du projet.",
        }}
        statuses={["UNDER_EVALUATION", "PLANNED"]}
        media={{ video: FIELD_MEDIA.clip3.src, poster: FIELD_MEDIA.clip3.poster }}
      >
        <ActionLink to="/land" variant="cream">{t({ en: "Understand the soil", es: "Comprender el suelo", fr: "Comprendre les sols" })}</ActionLink>
      </EditorialHero>

      <FieldMosaic layout="band" offset={2} />

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · A system, not a slogan", es: "01 · Un sistema, no un eslogan", fr: "01 · Une démarche, pas un slogan" }}
            title={{ en: "Ten lenses on the same land.", es: "Diez miradas sobre la misma tierra.", fr: "Dix façons de prendre soin d'un même territoire." }}
            lede={{
              en: "These areas of practice can inform the project's future approach, subject to site-specific studies and consultation with Cuban agricultural specialists.",
              es: "Estas prácticas pueden orientar el futuro del proyecto, siempre sujetas a estudios del sitio y al intercambio con especialistas agrícolas cubanos.",
              fr: "Ces pratiques peuvent éclairer les choix futurs, sous réserve d'études propres au site et d'échanges avec les spécialistes agricoles cubains.",
            }}
          />

          <div className="mt-14 border-t border-foreground/20">
            {AGROECOLOGY_TOPICS.map((topic, i) => (
              <article key={topic.id} className="grid gap-5 border-b border-foreground/20 py-9 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:py-12">
                <span className="display text-4xl text-clay md:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display max-w-md text-2xl leading-tight md:text-4xl">{t(topic.title)}</h3>
                <p className="max-w-xl text-base leading-relaxed opacity-75">{t(topic.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground md:py-36">
        <div className="shell grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow text-cream/70">{t({ en: "02 · The evidence comes first", es: "02 · Primero las pruebas", fr: "02 · Les données d'abord" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "Test. Understand. Then plant.", es: "Analizar. Comprender. Después sembrar.", fr: "Analyser. Comprendre. Puis cultiver." })}</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg leading-relaxed opacity-85">{t({
              en: "The project has not published parcel-specific soil analyses, water measurements or a confirmed cropping plan. Sustainable agriculture starts by learning what the land can actually support.",
              es: "El proyecto no ha publicado análisis de suelo específicos de las parcelas, mediciones de agua ni un plan de siembra confirmado. La agricultura sostenible comienza por conocer lo que el suelo puede producir.",
              fr: "Le projet n'a publié ni analyses de sol propres aux parcelles, ni mesures de disponibilité en eau, ni plan de culture confirmé. Une agriculture durable commence par comprendre les possibilités réelles du terrain.",
            })}</p>
            <div className="mt-9"><StatusBadge status="UNDER_EVALUATION" /></div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ActionLink to="/agriculture" variant="cream">{t({ en: "Explore potential crops", es: "Explorar cultivos potenciales", fr: "Explorer les cultures potentielles" })}</ActionLink>
              <ActionLink to="/farmers" variant="outline">{t({ en: "Connect with growers", es: "Conectar con productores", fr: "Échanger avec les agriculteurs" })}</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
