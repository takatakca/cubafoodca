import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { COMPANY_CONTRIBUTIONS } from "@/content/roles";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/collaboration")({
  head: () => ({
    meta: [
      { title: "Collaborer avec CUBAFOOD.CA" },
      { name: "description", content: "Explore concrete ways organizations can express interest in equipment, expertise, logistics and responsible agricultural development in Cuba." },
      { property: "og:title", content: "An invitation to build together — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Organizations · Cooperation", es: "Organizaciones · Cooperación", fr: "Organisations · Coopération" }}
        title={{ en: "Work together on what matters.", es: "Colaboremos en lo que importa.", fr: "Collaborons sur l'essentiel." }}
        subtitle={{ en: "Start with a real need.", es: "Empezar por una necesidad real.", fr: "Partir d'un besoin concret." }}
        body={{
          en: "An invitation to businesses, training organizations and technical specialists to discuss possible contributions. It is not a request to assume that partnerships or operations are already approved.",
          es: "Invitamos a empresas, entidades de formación y especialistas a estudiar posibles aportaciones. Esta invitación no significa que las alianzas o las operaciones estén aprobadas.",
          fr: "Une invitation aux entreprises, organismes de formation et spécialistes à explorer des contributions possibles. Elle ne signifie pas que des partenariats ou des opérations sont déjà approuvés.",
        }}
        statuses={["PROPOSED", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip4.src, poster: FIELD_MEDIA.clip4.poster }}
      >
        <ActionLink to="/canada" variant="cream">{t({ en: "Explore ways to contribute", es: "Explorar formas de contribuir", fr: "Explorer les contributions possibles" })}</ActionLink>
      </EditorialHero>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Concrete possibilities", es: "01 · Posibilidades concretas", fr: "01 · Des pistes concrètes" }}
            title={{ en: "Turn expertise into capacity.", es: "Convertir conocimiento en capacidad.", fr: "Transformer l'expertise en capacité." }}
            lede={{
              en: "The following areas are subjects for discussion, not signed commitments or confirmed donations.",
              es: "Los ámbitos siguientes son temas de conversación, no compromisos firmados ni donaciones confirmadas.",
              fr: "Les domaines suivants sont des pistes de discussion, et non des engagements signés ou des dons confirmés.",
            }}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2 lg:grid-cols-3">
            {COMPANY_CONTRIBUTIONS.map((r, i) => (
              <article key={r.id} className="flex min-h-72 flex-col justify-between bg-card p-7 md:p-9">
                <span className="display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-9">
                  <h3 className="display text-xl leading-tight md:text-2xl">{t(r.label)}</h3>
                  <p className="mt-5 text-sm leading-relaxed opacity-75">{t(r.note)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-charcoal py-24 text-cream md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-secondary">{t({ en: "02 · A transparent approach", es: "02 · Un enfoque transparente", fr: "02 · Une démarche transparente" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "Discuss. Validate. Document.", es: "Dialogar. Validar. Documentar.", fr: "Échanger. Vérifier. Documenter." })}</h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-lg leading-relaxed opacity-80">{t({
              en: "A proposal is not an endorsement or a partnership. Any future agreement must be negotiated, authorized and documented by the parties concerned.",
              es: "Una propuesta no equivale a un aval ni a una alianza. Todo futuro acuerdo deberá negociarse, autorizarse y documentarse por las partes correspondientes.",
              fr: "Une proposition n'est ni une approbation ni un partenariat. Tout accord éventuel devra être négocié, autorisé et documenté par les parties concernées.",
            })}</p>
            <div className="mt-9"><StatusBadge status="PROPOSED" /></div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/canada" variant="cream">{t({ en: "Contribute from Canada", es: "Contribuir desde Canadá", fr: "Contribuer depuis le Canada" })}</ActionLink>
              <ActionLink to="/needs" variant="outline">{t({ en: "Review identified needs", es: "Ver las necesidades identificadas", fr: "Voir les besoins identifiés" })}</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
