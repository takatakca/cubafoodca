import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { TRAINING_MODULES } from "@/content/research";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Formation et transmission | CUBAFOOD.CA" },
      { name: "description", content: "Explore fourteen prospective agricultural training subjects from tractor safety and irrigation to soil, cold chain and data collection. Courses are not yet being offered." },
      { property: "og:title", content: "Knowledge must keep growing — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Skills · Practice · Transmission", es: "Oficios · Práctica · Transmisión", fr: "Compétences · Pratique · Transmission" }}
        title={{ en: "Knowledge must keep growing.", es: "El conocimiento también se cultiva.", fr: "Le savoir se cultive aussi." }}
        subtitle={{ en: "Training is part of the infrastructure.", es: "La formación también es infraestructura.", fr: "La formation fait partie des infrastructures." }}
        body={{
          en: "Machinery matters. So does knowing how to operate, repair and improve it. The subjects below form a prospective training framework; no course, instructor or enrolment date is announced.",
          es: "La maquinaria importa. También importa saber utilizarla, repararla y mejorarla. Los temas siguientes son un marco de formación propuesto; no se anuncian cursos, docentes ni fechas de inscripción.",
          fr: "La machinerie est importante. Savoir l'utiliser, la réparer et l'améliorer l'est tout autant. Les thèmes suivants forment une proposition de programme : aucun cours, formateur ou calendrier d'inscription n'est annoncé.",
        }}
        statuses={["PLANNED", "NOT_YET_ACTIVE"]}
        media={{ video: FIELD_MEDIA.clip3.src, poster: FIELD_MEDIA.clip3.poster }}
      >
        <ActionLink to="/participate" variant="cream">{t({ en: "Offer your experience", es: "Compartir mi experiencia", fr: "Proposer son expertise" })}</ActionLink>
      </EditorialHero>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Proposed learning subjects", es: "01 · Temas de aprendizaje propuestos", fr: "01 · Domaines de formation envisagés" }}
            title={{ en: "Fourteen disciplines. A lifetime of practice.", es: "Catorce disciplinas. Toda una vida de práctica.", fr: "Quatorze domaines. Un savoir à transmettre." }}
            lede={{
              en: "A curriculum begins with safety and moves into practical agricultural systems. Modules are conceptual until trainers, facilities and applicable approvals are confirmed.",
              es: "La formación comienza por la seguridad y continúa con sistemas agrícolas prácticos. Los módulos son propuestas hasta confirmar formadores, instalaciones y autorizaciones.",
              fr: "Le parcours commencerait par la sécurité, puis aborderait les systèmes agricoles concrets. Ces modules restent à l'étude tant que les formateurs, les installations et les autorisations ne sont pas confirmés.",
            }}
          />
          <ol className="mt-14 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-2">
            {TRAINING_MODULES.map((module, i) => (
              <li key={module.id} className="flex min-h-[17rem] flex-col justify-between bg-card p-7 md:p-9">
                <span className="display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-9">
                  <h3 className="display text-2xl leading-tight md:text-3xl">{t(module.title)}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">{t(module.note)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-cream md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-secondary">{t({ en: "02 · Beyond a classroom", es: "02 · Más allá del aula", fr: "02 · Au-delà de la salle de cours" })}</p>
            <h2 className="poster mt-8 text-balance">{t({ en: "Learn. Practice. Pass it on.", es: "Aprender. Practicar. Compartir.", fr: "Apprendre. Pratiquer. Transmettre." })}</h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-lg leading-relaxed opacity-80">{t({
              en: "Any future training must reflect the real conditions in the field: available tools, local experience, safe working practices and an achievable maintenance culture.",
              es: "Una futura formación deberá reflejar las condiciones reales del campo: herramientas disponibles, experiencia local, prácticas de seguridad y una cultura de mantenimiento sostenible.",
              fr: "Toute formation future devra s'adapter aux conditions réelles du terrain : outils disponibles, savoirs locaux, pratiques sûres et entretien réalisable sur place.",
            })}</p>
            <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ActionLink to="/cuba" variant="cream">{t({ en: "Join from Cuba", es: "Participar desde Cuba", fr: "Participer depuis Cuba" })}</ActionLink>
              <ActionLink to="/canada" variant="outline">{t({ en: "Offer technical knowledge", es: "Ofrecer conocimientos técnicos", fr: "Partager une expertise technique" })}</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
