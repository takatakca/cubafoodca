import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FOOD_CHAIN } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/food-for-families")({
  head: () => ({
    meta: [
      { title: "Du champ à la famille | CUBAFOOD.CA" },
      { name: "description", content: "Explore the proposed path from land preparation to household food access in Cuba. The field-to-family system is a future goal, not an active distribution service." },
      { property: "og:title", content: "From the land to the family — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Food security · Field to family", es: "Seguridad alimentaria · Del campo a la familia", fr: "Sécurité alimentaire · Du champ à la famille" }}
        title={{ en: "The harvest matters when it arrives.", es: "La cosecha importa cuando llega.", fr: "La récolte compte lorsqu'elle arrive à destination." }}
        subtitle={{ en: "Growing food is only the beginning.", es: "Cultivar es solo el comienzo.", fr: "Cultiver n'est que le début." }}
        body={{
          en: "Production, sorting, storage and transport must form one dependable chain before food can reach people. The diagram below is a development concept, not an active harvest or distribution operation.",
          es: "La producción, clasificación, conservación y transporte deben formar una cadena fiable antes de que los alimentos lleguen a las personas. El esquema siguiente es conceptual, no una cosecha ni una distribución activa.",
          fr: "La production, le tri, la conservation et le transport doivent former une chaîne fiable avant que les aliments puissent atteindre les familles. Le parcours ci-dessous est un projet, et non une récolte ou une distribution en cours.",
        }}
        statuses={["PLANNED", "NOT_YET_ACTIVE"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
      >
        <ActionLink to="/project" variant="cream">{t({ en: "Explore the full project", es: "Explorar el proyecto", fr: "Explorer le projet" })}</ActionLink>
      </EditorialHero>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Nine connected links", es: "01 · Nueve eslabones", fr: "01 · Neuf maillons indispensables" }}
            title={{ en: "Not just a field. A food system.", es: "No solo un campo. Un sistema alimentario.", fr: "Pas seulement un champ. Toute une chaîne alimentaire." }}
            lede={{
              en: "Each stage depends on the one before it. This is a proposed process, not a log of completed activities.",
              es: "Cada etapa depende de la anterior. Se trata de un proceso propuesto, no de actividades completadas.",
              fr: "Chaque étape dépend de la précédente. Ce parcours est envisagé, il ne constitue pas un relevé d'activités réalisées.",
            }}
          />
          <ol className="mt-16 border-t border-foreground/20">
            {FOOD_CHAIN.map((step, i) => (
              <li key={step.id} className="grid gap-5 border-b border-foreground/20 py-9 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-10">
                <span className="display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-2xl md:text-4xl">{t(step.label)}</h3>
                <p className="max-w-md text-base leading-relaxed opacity-70">{t(step.note)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-primary py-24 text-primary-foreground md:py-36">
        <div className="shell">
          <p className="eyebrow text-cream/70">{t({ en: "02 · A purpose, not a completed service", es: "02 · Un objetivo, no un servicio activo", fr: "02 · Un objectif, pas un service déjà en place" })}</p>
          <h2 className="poster mt-8 max-w-6xl text-balance">{t({ en: "For the people who need it.", es: "Para quienes lo necesitan.", fr: "Pour les personnes qui en ont besoin." })}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "Any future household, institutional or community supply depends on successful production, approvals, storage capacity, logistics and local coordination. No current food deliveries or beneficiaries are claimed.",
            es: "Cualquier suministro futuro a familias, instituciones o comunidades dependerá de la producción, autorizaciones, conservación, logística y coordinación local. No se afirman entregas ni beneficiarios actuales.",
            fr: "Tout futur approvisionnement des familles, institutions ou communautés dépendra de la production, des autorisations, du stockage, de la logistique et de la coordination locale. Aucune livraison ni aucun bénéficiaire actuel n'est revendiqué.",
          })}</p>
          <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/agriculture" variant="cream">{t({ en: "Potential crops", es: "Cultivos potenciales", fr: "Cultures potentielles" })}</ActionLink>
            <ActionLink to="/needs" variant="outline">{t({ en: "Infrastructure needs", es: "Infraestructura necesaria", fr: "Besoins en infrastructures" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
