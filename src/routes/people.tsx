import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { PEOPLE_GROUPS } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "Les personnes au cœur du projet | CUBAFOOD.CA" },
      { name: "description", content: "The roles and knowledge that a future agricultural development in Matanzas needs, without implying that any individuals have been hired or appointed." },
      { property: "og:title", content: "The people behind the possibility — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "People · Knowledge · Dignity", es: "Personas · Conocimiento · Dignidad", fr: "Personnes · Savoir · Dignité" }}
        title={{ en: "No land grows food alone.", es: "La tierra no produce sola.", fr: "La terre ne produit pas toute seule." }}
        subtitle={{ en: "People make agriculture possible.", es: "Las personas hacen posible la agricultura.", fr: "Ce sont les gens qui rendent l'agriculture possible." }}
        body={{
          en: "Behind every working field is an entire network of skills: cultivation, repair, planning, transport and care. These are the roles the project hopes to bring together, not an announced staff roster.",
          es: "Detrás de cada campo productivo existe una red de conocimientos: cultivo, reparación, planificación, transporte y cuidado. Son funciones que el proyecto desea reunir, no una plantilla ya contratada.",
          fr: "Derrière chaque champ cultivé se trouve tout un réseau de compétences : culture, réparation, planification, transport et soin. Ces fonctions sont envisagées, elles ne constituent pas une équipe déjà recrutée.",
        }}
        statuses={["PLANNED", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip5.src, poster: FIELD_MEDIA.clip5.poster }}
      >
        <ActionLink to="/cuba" variant="cream">{t({ en: "Express interest from Cuba", es: "Expresar interés desde Cuba", fr: "Manifester son intérêt depuis Cuba" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Every skill counts", es: "01 · Cada oficio cuenta", fr: "01 · Chaque métier compte" }}
            title={{ en: "An ecosystem of know-how.", es: "Un ecosistema de saberes.", fr: "Un écosystème de savoir-faire." }}
            lede={{
              en: "From those who cultivate to those who document, the project relies on the knowledge of people already connected to Cuban agriculture.",
              es: "Desde quienes cultivan hasta quienes documentan, el proyecto se apoya en el conocimiento de las personas vinculadas a la agricultura cubana.",
              fr: "Des personnes qui cultivent à celles qui documentent, le projet entend valoriser les savoirs déjà présents dans l'agriculture cubaine.",
            }}
          />

          <div className="mt-14 border-t border-foreground/20">
            {PEOPLE_GROUPS.map((person, i) => (
              <article key={person.id} className="grid gap-4 border-b border-foreground/20 py-9 md:grid-cols-[7rem_minmax(15rem,1fr)_minmax(0,1.3fr)] md:gap-10 md:py-12">
                <span className="display text-4xl text-clay md:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display max-w-sm text-2xl leading-tight md:text-4xl">{t(person.title)}</h3>
                <p className="max-w-xl text-base leading-relaxed opacity-75">{t(person.body)}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t({
              en: "Role descriptions are prospective and do not represent an employment contract, verified recruitment, or confirmed appointments.",
              es: "Las funciones descritas son prospectivas y no representan contratos de trabajo, contrataciones verificadas ni nombramientos confirmados.",
              fr: "Les fonctions présentées sont envisagées; elles ne constituent ni des contrats de travail, ni des embauches vérifiées, ni des nominations confirmées.",
            })}
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal py-24 text-cream md:py-36">
        <img src={FIELD_MEDIA.clip2.poster} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="shell">
          <p className="eyebrow text-secondary">{t({ en: "02 · Cooperation begins with listening", es: "02 · Colaborar empieza por escuchar", fr: "02 · Collaborer commence par écouter" })}</p>
          <h2 className="poster mt-8 max-w-6xl text-balance">{t({ en: "Build with, never over.", es: "Construir con la gente.", fr: "Construire avec, jamais à la place." })}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "The contribution of existing Cuban farmers and cooperatives is not a detail to add later. It is central to designing a viable agricultural project.",
            es: "La participación de productores y cooperativas cubanas existentes no es un detalle que se agregará después. Es esencial para diseñar un proyecto agrícola viable.",
            fr: "La contribution des agriculteurs et des coopératives cubaines n'est pas un détail à ajouter plus tard. Elle est essentielle à la conception d'un projet agricole viable.",
          })}</p>
          <div className="mt-10"><StatusBadge status="PLANNED" /></div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/farmers" variant="cream">{t({ en: "Farmers & cooperatives", es: "Productores y cooperativas", fr: "Agriculteurs et coopératives" })}</ActionLink>
            <ActionLink to="/training" variant="outline">{t({ en: "Knowledge and training", es: "Conocimiento y formación", fr: "Savoir et formation" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
