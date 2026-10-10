import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { PROJECT_EMAIL, emailLink, whatsappLink } from "@/lib/contact";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et participation | CUBAFOOD.CA" },
      { name: "description", content: "Contact CUBAFOOD.CA about participation in Cuba, cooperation from Canada, farming, equipment or the development project in Matanzas." },
      { property: "og:title", content: "Start a conversation — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

const CONTACT_PATHS = [
  { n: "01", title: { en: "I live in Cuba.", es: "Vivo en Cuba.", fr: "Je vis à Cuba." }, note: { en: "Agriculture, work interests, technical skills and local participation.", es: "Agricultura, interés profesional, habilidades técnicas y participación local.", fr: "Agriculture, intérêt professionnel, compétences techniques et participation locale." }, action: { en: "Cuba participation", es: "Participación desde Cuba", fr: "Participer depuis Cuba" }, to: "/cuba" },
  { n: "02", title: { en: "I am in Canada.", es: "Estoy en Canadá.", fr: "Je suis au Canada." }, note: { en: "Equipment, technical knowledge, logistics and potential contributions.", es: "Equipos, conocimientos técnicos, logística y posibles contribuciones.", fr: "Équipement, expertise, logistique et contributions possibles." }, action: { en: "Canada contribution", es: "Colaborar desde Canadá", fr: "Contribuer depuis le Canada" }, to: "/canada" },
  { n: "03", title: { en: "I represent an organization.", es: "Represento una organización.", fr: "Je représente une organisation." }, note: { en: "Explore a specific cooperation proposal; nothing is described as an approved agreement.", es: "Explora una propuesta concreta de cooperación. Ningún acuerdo se presenta como aprobado.", fr: "Présentez une proposition concrète, sans présumer qu'un accord a déjà été conclu." }, action: { en: "Discuss cooperation", es: "Proponer colaboración", fr: "Proposer une collaboration" }, to: "/collaboration" },
  { n: "04", title: { en: "I grow food.", es: "Soy productor agrícola.", fr: "Je travaille la terre." }, note: { en: "Cuban farmers and cooperatives can share local knowledge and interests.", es: "Los productores y las cooperativas cubanas pueden compartir conocimientos e intereses.", fr: "Les agriculteurs et coopératives cubaines peuvent partager leur savoir et leurs intérêts." }, action: { en: "Farmers & cooperatives", es: "Agricultores y cooperativas", fr: "Agriculteurs et coopératives" }, to: "/farmers" },
];

function Page() {
  const { t } = useI18n();
  const mail = emailLink("CUBAFOOD.CA — Project enquiry");
  const whatsapp = whatsappLink("general");
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Get in touch · CCC", es: "Contacto · CCC", fr: "Entrons en contact · CCC" }}
        title={{ en: "Let's start with a conversation.", es: "Todo empieza con una conversación.", fr: "Tout commence par une conversation." }}
        subtitle={{ en: "Tell us where you would like to contribute.", es: "Cuéntanos cómo te gustaría participar.", fr: "Dites-nous comment vous souhaitez contribuer." }}
        body={{
          en: "Choose the right pathway for your question. We will never publish invented offices, phone numbers, named contacts or partnership approvals.",
          es: "Elige la vía adecuada para tu consulta. No publicaremos oficinas, teléfonos, contactos personales ni aprobaciones de alianzas que no estén verificados.",
          fr: "Choisissez le parcours correspondant à votre demande. Nous ne publierons ni bureau, ni numéro de téléphone, ni personne-ressource, ni partenariat sans vérification.",
        }}
        statuses={["CURRENT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
      />
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Direct your request", es: "01 · Dirige tu consulta", fr: "01 · Orientez votre demande" }}
            title={{ en: "A clear route to the right team.", es: "El camino correcto para cada consulta.", fr: "Le bon parcours pour chaque demande." }}
            lede={{
              en: "Use the existing CUBAFOOD-specific participation pages. No TAKATAK account is required to browse these routes.",
              es: "Utiliza las páginas de participación propias de CUBAFOOD. No es necesario disponer de una cuenta TAKATAK para consultarlas.",
              fr: "Utilisez les parcours de participation propres à CUBAFOOD. Aucun compte TAKATAK n'est nécessaire pour les consulter.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            {CONTACT_PATHS.map((p) => (
              <article key={p.n} className="flex min-h-80 flex-col justify-between bg-card p-8 md:p-10">
                <div>
                  <span className="display text-5xl text-clay">{p.n}</span>
                  <h3 className="display mt-9 text-2xl md:text-4xl">{t(p.title)}</h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed opacity-75">{t(p.note)}</p>
                </div>
                <div className="mt-8"><ActionLink to={p.to} variant="outline">{t(p.action)}</ActionLink></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-charcoal py-24 text-cream md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-secondary">{t({ en: "02 · Direct contact", es: "02 · Contacto directo", fr: "02 · Coordonnées directes" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "Stay connected.", es: "Sigamos conectados.", fr: "Gardons le contact." })}</h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed opacity-80">{t({
              en: "Verified direct contact options appear when the project has configured them. Until then, use the dedicated participation routes above.",
              es: "Las opciones de contacto directo aparecen cuando el proyecto haya configurado sus datos. Mientras tanto, utiliza las vías de participación indicadas arriba.",
              fr: "Les coordonnées directes s'affichent lorsqu'elles sont configurées par le projet. D'ici là, utilisez les parcours de participation ci-dessus.",
            })}</p>
            <div className="mt-9"><StatusBadge status="CURRENT" /></div>
          </div>
          <div className="border-t border-cream/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-8">
            {mail && PROJECT_EMAIL ? (
              <a className="block border-b border-cream/25 py-6 text-lg underline-offset-4 hover:underline" href={mail}>
                {PROJECT_EMAIL} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {whatsapp ? (
              <a className="block border-b border-cream/25 py-6 text-lg underline-offset-4 hover:underline" href={whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {!mail && !whatsapp ? (
              <p className="border-t border-cream/25 pt-6 text-base leading-relaxed opacity-70">
                {t({ en: "No public direct contact details are configured at this time.", es: "Por ahora no hay datos de contacto directo configurados para el público.", fr: "Aucune coordonnée directe n'est actuellement configurée pour le public." })}
              </p>
            ) : null}
            <div className="mt-10"><ActionLink to="/participate" variant="cream">{t({ en: "Explore all ways to participate", es: "Todas las formas de participar", fr: "Toutes les façons de participer" })}</ActionLink></div>
          </div>
        </div>
      </section>
    </main>
  );
}
