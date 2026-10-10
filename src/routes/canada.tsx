import { FieldMosaic } from "@/components/site/field-mosaic";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { PartnerForm } from "@/components/site/forms";
import { FIELD_MEDIA } from "@/content/media";
import { CANADA_CATEGORIES, COMPANY_CONTRIBUTIONS } from "@/content/roles";

export const Route = createFileRoute("/canada")({
  head: () => ({
    meta: [
      { title: "Canada Can Help Cuba Grow | CUBAFOOD.CA" },
      {
        name: "description",
        content:
          "Contribution pathways from Canada: farmers, equipment owners, agricultural companies, universities, energy, logistics, students, volunteers and the Cuban-Canadian community.",
      },
      { property: "og:title", content: "Canada Can Help Cuba Grow" },
      { property: "og:description", content: "Equipment, expertise, logistics and knowledge — concrete ways to support the project." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const ANSWERS = [
  { q: { en: "I have equipment", es: "Tengo equipos", fr: "J'ai de l'équipement" }, a: { en: "Tractors, implements, irrigation parts, tools, refrigeration or vehicles that still have working life in them.", es: "Tractores, implementos, piezas de riego, herramientas, refrigeración o vehículos con vida útil restante.", fr: "Tracteurs, outils, pièces d'irrigation, réfrigération ou véhicules encore fonctionnels." } },
  { q: { en: "I know irrigation", es: "Sé de riego", fr: "Je connais l'irrigation" }, a: { en: "Help design, size and troubleshoot water systems for a region where water is the first constraint.", es: "Ayuda a diseñar, dimensionar y resolver sistemas de agua donde el agua es la primera limitación.", fr: "Aidez à concevoir et dimensionner les systèmes d'eau." } },
  { q: { en: "I can help with solar", es: "Puedo ayudar con solar", fr: "Je peux aider avec le solaire" }, a: { en: "Pumps and cold storage need power that does not depend on fuel deliveries.", es: "Bombas y refrigeración necesitan energía que no dependa de entregas de combustible.", fr: "Pompes et froid exigent une énergie indépendante du carburant." } },
  { q: { en: "I can provide transport", es: "Puedo aportar transporte", fr: "Je peux fournir du transport" }, a: { en: "Freight, customs knowledge and logistics coordination between Canada and Cuba.", es: "Carga, conocimiento aduanero y coordinación logística entre Canadá y Cuba.", fr: "Fret, douanes et coordination logistique." } },
  { q: { en: "I can share knowledge", es: "Puedo compartir conocimiento", fr: "Je peux partager mon savoir" }, a: { en: "Agronomy, machinery maintenance, cold chain, food safety, training curricula.", es: "Agronomía, mantenimiento de maquinaria, cadena de frío, inocuidad, planes de capacitación.", fr: "Agronomie, entretien, chaîne du froid, formation." } },
  { q: { en: "I want to volunteer", es: "Quiero ser voluntario", fr: "Je veux faire du bénévolat" }, a: { en: "Time, coordination, translation, documentation and community organising.", es: "Tiempo, coordinación, traducción, documentación y organización comunitaria.", fr: "Temps, coordination, traduction, documentation." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "From Canada", es: "Desde Canadá", fr: "Depuis le Canada" }}
        title={{ en: "Canada can help Cuba grow.", es: "Canadá puede ayudar a Cuba a producir.", fr: "Le Canada peut aider Cuba à cultiver." }}
        subtitle={{
          en: "Equipment, expertise, logistics, energy, training.",
          es: "Equipos, experiencia, logística, energía, capacitación.",
          fr: "Équipement, expertise, logistique, énergie, formation.",
        }}
        body={{
          en: "This is not a donation appeal. It is a request for the specific things agricultural development needs — machinery that still works, knowledge that transfers, and people willing to stay involved past the first shipment.",
          es: "Esto no es una campaña de donaciones. Es una solicitud de lo que el desarrollo agrícola necesita: maquinaria que aún funciona, conocimiento transferible y personas dispuestas a seguir involucradas.",
          fr: "Ce n'est pas un appel aux dons, mais une demande précise de ce dont le développement agricole a besoin.",
        }}
        statuses={["CURRENT"]}
        media={{ video: FIELD_MEDIA.clip3.src, poster: FIELD_MEDIA.clip3.poster }}
        tone="soil"
      >
        <ActionLink href="#contribute" variant="cream">
          {t({ en: "Offer a contribution", es: "Ofrecer una contribución", fr: "Offrir une contribution" })}
        </ActionLink>
      </EditorialHero>
      <FieldMosaic layout="triptych" offset={4} />

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · What can I do?", es: "01 · ¿Qué puedo hacer?", fr: "01 · Que puis-je faire ?" }}
            title={{
              en: "Start from what you already have.",
              es: "Empieza por lo que ya tienes.",
              fr: "Partez de ce que vous avez déjà.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-3">
            {ANSWERS.map((x, i) => (
              <div key={i} className="bg-background p-7">
                <h3 className="display text-xl text-clay">{t(x.q)}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-78">{t(x.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · Contribution pathways", es: "02 · Vías de contribución", fr: "02 · Voies de contribution" }}
            title={{
              en: "Ten groups this project is looking for.",
              es: "Diez grupos que este proyecto está buscando.",
              fr: "Dix groupes recherchés par ce projet.",
            }}
            status="PROPOSED"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-3">
            {CANADA_CATEGORIES.map((c) => (
              <div key={c.id} className="bg-card p-6">
                <h3 className="display text-lg">{t(c.label)}</h3>
                <p className="mt-2 text-sm opacity-75">{t(c.note)}</p>
                <div className="mt-4"><StatusBadge status="PROPOSED" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contribute" className="bg-background py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow={{ en: "03 · Offer support", es: "03 · Ofrecer apoyo", fr: "03 · Offrir un soutien" }}
            title={{ en: "Tell us what you can contribute.", es: "Dinos qué puedes aportar.", fr: "Dites-nous ce que vous pouvez offrir." }}
            lede={{
              en: "Nothing is committed by submitting this form. It creates a record the project can act on when approval, logistics and shipping become possible.",
              es: "Enviar este formulario no compromete nada. Crea un registro con el que el proyecto podrá actuar cuando la aprobación y la logística lo permitan.",
              fr: "Ce formulaire n'engage à rien. Il crée un registre exploitable plus tard.",
            }}
          />
          <PartnerForm
            sourcePage="/canada"
            contributionOptions={COMPANY_CONTRIBUTIONS.map((c, i) => ({ id: String(i), label: t(c) }))}
          />
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <p className="poster max-w-5xl text-balance">
            {t({
              en: "A tractor sitting unused in Canada is an entire season of food in Matanzas.",
              es: "Un tractor sin uso en Canadá es toda una temporada de alimento en Matanzas.",
              fr: "Un tracteur inutilisé au Canada, c'est une saison entière de nourriture à Matanzas.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/needs" variant="cream">{t({ en: "See the equipment needed", es: "Ver los equipos necesarios", fr: "Voir l'équipement requis" })}</ActionLink>
            <ActionLink to="/participate" variant="outline">{t({ en: "All participation routes", es: "Todas las vías de participación", fr: "Toutes les voies de participation" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
