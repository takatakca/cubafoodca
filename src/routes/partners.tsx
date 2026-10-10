import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partenariats et collaborations | CUBAFOOD.CA" },
      { name: "description", content: "Explore potential collaboration with CUBAFOOD.CA. No companies, institutions or organizations are represented as confirmed partners without verified authorization." },
      { property: "og:title", content: "Partnerships built on real commitments — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

const FORMS = [
  { n: "01", title: { en: "Agricultural know-how", es: "Conocimiento agrícola", fr: "Savoir agricole" }, text: { en: "Support agronomic assessment, farmer-to-farmer exchange and practical training.", es: "Apoyar la evaluación agronómica, el intercambio entre productores y la formación práctica.", fr: "Soutenir les évaluations agronomiques, les échanges entre producteurs et la formation pratique." } },
  { n: "02", title: { en: "Equipment and maintenance", es: "Equipos y mantenimiento", fr: "Équipement et entretien" }, text: { en: "Discuss machinery, spare parts, repair skills and suitable technology.", es: "Estudiar maquinaria, repuestos, reparación y tecnología adecuada.", fr: "Échanger sur la machinerie, les pièces, les réparations et les technologies adaptées." } },
  { n: "03", title: { en: "Water and energy", es: "Agua y energía", fr: "Eau et énergie" }, text: { en: "Evaluate feasible irrigation, pumping, filtration, solar and backup systems.", es: "Evaluar soluciones viables de riego, bombeo, filtración, energía solar y respaldo.", fr: "Étudier les solutions d'irrigation, de pompage, de filtration, de solaire et de secours." } },
  { n: "04", title: { en: "Logistics and preservation", es: "Logística y conservación", fr: "Logistique et conservation" }, text: { en: "Assess transport, packing and storage needs before proposing commitments.", es: "Evaluar el transporte, el envasado y el almacenamiento antes de asumir compromisos.", fr: "Évaluer les besoins en transport, conditionnement et stockage avant tout engagement." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Canada × Cuba · Potential partnerships", es: "Canadá × Cuba · Posibles alianzas", fr: "Canada × Cuba · Partenariats envisagés" }}
        title={{ en: "Collaboration is built, not announced.", es: "La colaboración se construye, no se anuncia.", fr: "Un partenariat se construit, il ne se décrète pas." }}
        subtitle={{ en: "Useful commitments begin with specific needs.", es: "Los compromisos útiles parten de necesidades reales.", fr: "Les bons partenariats répondent à des besoins précis." }}
        body={{
          en: "We welcome conversations with producers, businesses, training organizations and specialists. No institution or brand is displayed as a confirmed project partner without documented authorization.",
          es: "Estamos abiertos al diálogo con productores, empresas, entidades de formación y especialistas. No presentamos a ninguna institución o marca como socio confirmado sin autorización documentada.",
          fr: "Nous souhaitons échanger avec les producteurs, entreprises, organismes de formation et spécialistes. Aucune institution ou marque n'est présentée comme partenaire confirmé sans autorisation documentée.",
        }}
        statuses={["PROPOSED", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip4.src, poster: FIELD_MEDIA.clip4.poster }}
      >
        <ActionLink to="/collaboration" variant="cream">{t({ en: "Propose a collaboration", es: "Proponer una colaboración", fr: "Proposer une collaboration" })}</ActionLink>
      </EditorialHero>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Where cooperation could help", es: "01 · Ámbitos de cooperación", fr: "01 · Domaines de collaboration" }}
            title={{ en: "Four ways to create practical value.", es: "Cuatro caminos hacia resultados útiles.", fr: "Quatre façons de contribuer concrètement." }}
            lede={{
              en: "These are discussion areas, not a directory of sponsors or signed agreements.",
              es: "Son ámbitos de diálogo, no una lista de patrocinadores o convenios firmados.",
              fr: "Il s'agit de pistes de discussion, et non d'un répertoire de commanditaires ou d'accords signés.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            {FORMS.map((form) => (
              <article key={form.n} className="flex min-h-80 flex-col justify-between bg-card p-8 md:p-11">
                <span className="display text-6xl text-clay">{form.n}</span>
                <div className="mt-10">
                  <h3 className="display text-2xl md:text-4xl">{t(form.title)}</h3>
                  <p className="mt-5 max-w-lg leading-relaxed opacity-75">{t(form.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-soil py-24 text-soil-foreground md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-clay">{t({ en: "02 · Transparent by design", es: "02 · Transparencia desde el inicio", fr: "02 · La transparence dès le départ" })}</p>
            <h2 className="poster mt-8">{t({ en: "No borrowed credibility.", es: "Sin avales inventados.", fr: "Aucun appui présumé." })}</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg leading-relaxed opacity-80">{t({
              en: "A logo, institution name or endorsement should appear only after the relevant organization authorizes its use. We will not list pending discussions as confirmed alliances.",
              es: "Un logotipo, el nombre de una institución o una recomendación solo aparecerán con la autorización correspondiente. No se presentarán conversaciones en curso como alianzas confirmadas.",
              fr: "Un logo, le nom d'une institution ou une recommandation ne devraient être publiés qu'avec leur autorisation. Des discussions en cours ne seront pas présentées comme des alliances confirmées.",
            })}</p>
            <div className="mt-8"><StatusBadge status="PROPOSED" /></div>
            <div className="mt-10"><ActionLink to="/contact" variant="cream">{t({ en: "Start a conversation", es: "Iniciar una conversación", fr: "Engager la conversation" })}</ActionLink></div>
          </div>
        </div>
      </section>
    </main>
  );
}
