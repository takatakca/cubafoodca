import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { WhatsAppButton, EmailButton } from "@/components/site/whatsapp";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title: "Participer au projet | CUBAFOOD.CA" },
      {
        name: "description",
        content: "Find a meaningful way to take part in CUBAFOOD.CA from Cuba or Canada. Farmers, cooperatives, organizations and volunteers can register their interest.",
      },
      { property: "og:title", content: "Be part of what grows — CUBAFOOD.CA" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

const PATHS = [
  {
    id: "cuba",
    n: "01",
    country: { en: "IN CUBA", es: "EN CUBA", fr: "À CUBA" },
    title: { en: "Your knowledge belongs here.", es: "Tu experiencia tiene un lugar aquí.", fr: "Votre savoir a sa place ici." },
    body: {
      en: "Farmers, machinery operators, mechanics, agronomists, students and community members: tell us what skills you can contribute and where you are based.",
      es: "Agricultores, operadores de maquinaria, mecánicos, agrónomos, estudiantes y miembros de la comunidad: cuéntanos qué sabes hacer y dónde te encuentras.",
      fr: "Agriculteurs, opérateurs, mécaniciens, agronomes, étudiants et membres de la communauté : faites connaître vos compétences et votre région.",
    },
    action: { en: "Register your interest in Cuba", es: "Registrar mi interés desde Cuba", fr: "Manifester mon intérêt depuis Cuba" },
    to: "/cuba",
  },
  {
    id: "canada",
    n: "02",
    country: { en: "IN CANADA", es: "EN CANADÁ", fr: "AU CANADA" },
    title: { en: "Support the means to grow.", es: "Aporta medios para cultivar.", fr: "Contribuer aux moyens de produire." },
    body: {
      en: "Technology, agricultural tools, training, logistics and professional expertise can help turn a development plan into viable local capacity.",
      es: "La tecnología, las herramientas agrícolas, la capacitación, la logística y el conocimiento profesional pueden contribuir al desarrollo de capacidades locales.",
      fr: "Technologie, équipement agricole, formation, logistique et expertise peuvent contribuer à bâtir une capacité de production locale.",
    },
    action: { en: "Explore contributions from Canada", es: "Explorar aportes desde Canadá", fr: "Contribuer depuis le Canada" },
    to: "/canada",
  },
  {
    id: "farmers",
    n: "03",
    country: { en: "FARMERS & COOPERATIVES", es: "PRODUCTORES Y COOPERATIVAS", fr: "AGRICULTEURS ET COOPÉRATIVES" },
    title: { en: "Work with those who know the land.", es: "Colaborar con quienes conocen la tierra.", fr: "Collaborer avec celles et ceux qui connaissent la terre." },
    body: {
      en: "Cuban agricultural experience is essential. We want to hear from existing producers and cooperatives, without presenting any collaboration as already approved.",
      es: "La experiencia agrícola cubana es esencial. Queremos conocer a productores y cooperativas existentes, sin presentar ninguna colaboración como ya aprobada.",
      fr: "L'expérience agricole cubaine est essentielle. Nous souhaitons échanger avec les producteurs et coopératives, sans présenter de collaboration comme déjà approuvée.",
    },
    action: { en: "Connect as a farmer", es: "Participar como productor", fr: "Participer comme agriculteur" },
    to: "/farmers",
  },
  {
    id: "organizations",
    n: "04",
    country: { en: "ORGANIZATIONS", es: "ORGANIZACIONES", fr: "ORGANISATIONS" },
    title: { en: "Build a practical collaboration.", es: "Construir una colaboración concreta.", fr: "Construire une collaboration concrète." },
    body: {
      en: "Businesses, training organizations, institutions and logistics partners can begin a conversation around specific needs and verifiable commitments.",
      es: "Empresas, centros de formación, instituciones y socios logísticos pueden iniciar conversaciones sobre necesidades concretas y compromisos verificables.",
      fr: "Entreprises, organismes de formation, institutions et partenaires logistiques peuvent échanger autour de besoins précis et d'engagements vérifiables.",
    },
    action: { en: "Discuss collaboration", es: "Hablar de colaboración", fr: "Proposer une collaboration" },
    to: "/collaboration",
  },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "CCC · Cuba × Canada", es: "CCC · Cuba × Canadá", fr: "CCC · Cuba × Canada" }}
        title={{ en: "A project grows through people.", es: "Un proyecto crece con su gente.", fr: "Un projet grandit grâce aux gens." }}
        subtitle={{ en: "Choose how you want to take part.", es: "Elige cómo quieres participar.", fr: "Choisissez votre façon de participer." }}
        body={{
          en: "Participation starts with a conversation, not with a promise of employment, partnership or immediate operations. Explore the path that fits your experience and your location.",
          es: "La participación empieza con un diálogo, no con una promesa de empleo, asociación u operaciones inmediatas. Explora la opción que corresponde a tu experiencia y ubicación.",
          fr: "Participer commence par un échange, et non par une promesse d'emploi, de partenariat ou de démarrage immédiat des opérations. Trouvez le parcours qui correspond à votre expérience.",
        }}
        statuses={["CURRENT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip5.src, poster: FIELD_MEDIA.clip5.poster }}
      >
        <ActionLink to="/cuba" variant="cream">{t({ en: "I am in Cuba", es: "Estoy en Cuba", fr: "Je suis à Cuba" })}</ActionLink>
        <ActionLink to="/canada" variant="outline">{t({ en: "I am in Canada", es: "Estoy en Canadá", fr: "Je suis au Canada" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Find your place", es: "01 · Encuentra tu lugar", fr: "01 · Trouvez votre place" }}
            title={{ en: "Different places. One shared effort.", es: "Distintos lugares. Un esfuerzo común.", fr: "Des parcours différents. Un effort commun." }}
            lede={{
              en: "No universal form, no confusing account requirement: select the most relevant pathway. The existing registration processes remain within CUBAFOOD.",
              es: "Sin formulario único complicado ni obligación de crear una cuenta: selecciona la vía que te corresponda. Los registros existentes permanecen dentro de CUBAFOOD.",
              fr: "Pas de formulaire universel complexe ni d'obligation de créer un compte : choisissez le parcours approprié. Les inscriptions existantes restent propres à CUBAFOOD.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 lg:grid-cols-2">
            {PATHS.map((path, i) => (
              <article key={path.id} className={"relative flex min-h-[26rem] flex-col justify-between p-7 md:p-11 " + (i === 0 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground")}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="eyebrow opacity-70">{t(path.country)}</span>
                    <span className="display text-5xl opacity-30">{path.n}</span>
                  </div>
                  <h3 className="display mt-12 max-w-xl text-3xl leading-none md:text-5xl">{t(path.title)}</h3>
                  <p className="mt-7 max-w-lg text-sm leading-relaxed opacity-80 md:text-base">{t(path.body)}</p>
                </div>
                <div className="mt-10">
                  <ActionLink to={path.to} variant={i === 0 ? "cream" : "outline"}>{t(path.action)}</ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soil py-20 text-soil-foreground md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-clay">{t({ en: "02 · An honest invitation", es: "02 · Una invitación honesta", fr: "02 · Une invitation transparente" })}</p>
            <h2 className="headline mt-6 text-balance">{t({ en: "Interest is not a contract.", es: "El interés no es un contrato.", fr: "Un intérêt manifesté n'est pas un contrat." })}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed opacity-80">
              {t({
                en: "CUBAFOOD.CA is in institutional coordination. Registering interest does not mean hiring, placement, confirmed partnership or guaranteed participation. We will publish changes to that status only when verified.",
                es: "CUBAFOOD.CA está en fase de coordinación institucional. Registrar tu interés no equivale a contratación, asignación de puesto, alianza confirmada ni participación garantizada. Publicaremos los cambios de estado únicamente cuando estén verificados.",
                fr: "CUBAFOOD.CA est en phase de coordination institutionnelle. Une manifestation d'intérêt n'est ni une embauche, ni un placement, ni un partenariat confirmé, ni une participation garantie. Les changements de statut seront publiés seulement après vérification.",
              })}
            </p>
          </div>
          <div className="border-t border-cream/30 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <StatusBadge status="AWAITING_APPROVAL" />
            <h3 className="display mt-10 text-2xl md:text-3xl">{t({ en: "Before making a commitment", es: "Antes de comprometerte", fr: "Avant de vous engager" })}</h3>
            <p className="mt-5 text-sm leading-relaxed opacity-75">
              {t({
                en: "Ask what is currently planned, what has been verified and which next steps require authorization. No payment or transfer is requested on this page.",
                es: "Pregunta qué está planificado, qué está verificado y qué pasos requieren autorización. Esta página no solicita pagos ni transferencias.",
                fr: "Informez-vous sur ce qui est prévu, ce qui est vérifié et les démarches exigeant des autorisations. Aucun paiement ni transfert n'est demandé sur cette page.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton variant="outline" />
              <EmailButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "03 · What the project needs", es: "03 · Qué necesita el proyecto", fr: "03 · Les besoins du projet" }}
            title={{ en: "From intention to useful action.", es: "De la intención a la acción útil.", fr: "Passer de l'intention à l'action utile." }}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/needs">{t({ en: "Explore equipment needs", es: "Ver necesidades de equipos", fr: "Voir les besoins en équipement" })}</ActionLink>
            <ActionLink to="/project" variant="outline">{t({ en: "Understand the project", es: "Conocer el proyecto", fr: "Comprendre le projet" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
