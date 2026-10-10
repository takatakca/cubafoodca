import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { VOLUNTEER_BLOCKS } from "@/content/roles";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Bénévolat et participation | CUBAFOOD.CA" },
      { name: "description", content: "Explore prospective volunteer skills for CUBAFOOD.CA and how to express interest from Cuba or Canada. No placements or field programs are currently guaranteed." },
      { property: "og:title", content: "Time, care and knowledge — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Time · Experience · Solidarity", es: "Tiempo · Experiencia · Solidaridad", fr: "Temps · Expérience · Solidarité" }}
        title={{ en: "There is more than one way to help.", es: "Hay muchas formas de ayudar.", fr: "Il existe mille façons de contribuer." }}
        subtitle={{ en: "The right skill in the right place.", es: "La habilidad adecuada en el lugar adecuado.", fr: "La bonne compétence, au bon endroit." }}
        body={{
          en: "The project welcomes expressions of interest in voluntary contributions, from technical expertise to community support. This is not a confirmed volunteer placement program.",
          es: "El proyecto recibe manifestaciones de interés para posibles aportes voluntarios, desde conocimientos técnicos hasta apoyo comunitario. No se trata de un programa confirmado de asignación de voluntarios.",
          fr: "Le projet accueille les manifestations d'intérêt pour de possibles contributions bénévoles, de l'expertise technique au soutien communautaire. Aucun programme de placement bénévole n'est actuellement confirmé.",
        }}
        statuses={["PLANNED", "NOT_YET_ACTIVE"]}
        media={{ video: FIELD_MEDIA.clip5.src, poster: FIELD_MEDIA.clip5.poster }}
      >
        <ActionLink to="/participate" variant="cream">{t({ en: "Find your path", es: "Elegir cómo participar", fr: "Choisir son parcours" })}</ActionLink>
      </EditorialHero>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Skills that could matter", es: "01 · Conocimientos que pueden ayudar", fr: "01 · Des compétences utiles" }}
            title={{ en: "Every contribution starts with listening.", es: "Cada aporte empieza por escuchar.", fr: "Toute contribution commence par l'écoute." }}
            lede={{
              en: "These potential volunteer roles need local validation, coordination, safety arrangements and appropriate authorization before any on-site activities.",
              es: "Estas posibles tareas voluntarias requieren validación local, coordinación, medidas de seguridad y autorizaciones antes de cualquier actividad sobre el terreno.",
              fr: "Ces contributions potentielles nécessitent une validation locale, une coordination, des mesures de sécurité et les autorisations requises avant toute activité sur place.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden bg-foreground/15 md:grid-cols-2 lg:grid-cols-3">
            {VOLUNTEER_BLOCKS.map((role, i) => (
              <article key={role.id} className="flex min-h-64 flex-col justify-between bg-card p-7 md:p-9">
                <span className="display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-9">
                  <h3 className="display text-xl leading-tight md:text-2xl">{t(role.label)}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-70">{t(role.note)}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{t({
            en: "No volunteer positions, travel arrangements, field assignments or reimbursements are offered or guaranteed by this information page.",
            es: "Esta página no ofrece ni garantiza puestos de voluntariado, viajes, tareas de campo ni reembolsos.",
            fr: "Cette page n'offre ni ne garantit de poste bénévole, de déplacement, de mission sur le terrain ou de remboursement.",
          })}</p>
        </div>
      </section>
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="shell">
          <p className="eyebrow text-cream/70">{t({ en: "02 · Where are you based?", es: "02 · ¿Dónde te encuentras?", fr: "02 · Où êtes-vous ?" })}</p>
          <h2 className="poster mt-8 max-w-5xl">{t({ en: "From Cuba or Canada.", es: "Desde Cuba o Canadá.", fr: "De Cuba ou du Canada." })}</h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/cuba" variant="cream">{t({ en: "I'm in Cuba", es: "Estoy en Cuba", fr: "Je suis à Cuba" })}</ActionLink>
            <ActionLink to="/canada" variant="outline">{t({ en: "I'm in Canada", es: "Estoy en Canadá", fr: "Je suis au Canada" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
