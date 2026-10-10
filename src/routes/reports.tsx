import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { FIELD_MEDIA } from "@/content/media";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Rapports publics | CUBAFOOD.CA" },
      { name: "description", content: "Public reporting framework for CUBAFOOD.CA. No fabricated financial, agricultural, operational or donation results; formal reports will be added when verified." },
      { property: "og:title", content: "The public record — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

const FRAMEWORK = [
  { n: "01", title: { en: "Institutional status", es: "Situación institucional", fr: "Situation institutionnelle" }, body: { en: "Publish only decisions or authorizations supported by verifiable records.", es: "Publicar únicamente decisiones y autorizaciones respaldadas por documentos verificables.", fr: "Publier uniquement les décisions et autorisations appuyées par des documents vérifiables." } },
  { n: "02", title: { en: "Land and water", es: "Tierra y agua", fr: "Sols et eau" }, body: { en: "Document methods, dates, measurement limits and site-specific findings once assessments exist.", es: "Documentar los métodos, las fechas, los límites de medición y los resultados específicos cuando existan análisis.", fr: "Documenter les méthodes, les dates, les limites des mesures et les résultats propres au site, lorsqu'ils seront disponibles." } },
  { n: "03", title: { en: "Inputs and equipment", es: "Insumos y equipos", fr: "Intrants et équipement" }, body: { en: "Record equipment actually received, verified conditions and approved uses rather than prospective wish lists.", es: "Registrar los equipos realmente recibidos, su estado verificado y su uso autorizado, sin confundir necesidades con entregas.", fr: "Consigner le matériel réellement reçu, son état vérifié et son utilisation autorisée, sans confondre besoins et livraisons." } },
  { n: "04", title: { en: "Operations and outcomes", es: "Operaciones y resultados", fr: "Activités et résultats" }, body: { en: "Publish measured activities and results only after operations are authorized and evidence can be checked.", es: "Publicar actividades y resultados medidos solo después de su autorización y cuando existan pruebas verificables.", fr: "Publier les activités et résultats mesurés uniquement après autorisation des opérations et vérification des preuves." } },
];

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Reports · Public accountability", es: "Informes · Rendición de cuentas", fr: "Rapports · Reddition de comptes" }}
        title={{ en: "If we publish a number, it needs a source.", es: "Cada cifra publicada necesita una fuente.", fr: "Chaque chiffre publié doit pouvoir être vérifié." }}
        subtitle={{ en: "Evidence first. Reporting follows.", es: "Primero las pruebas. Después los informes.", fr: "Les preuves d'abord. Les rapports ensuite." }}
        body={{
          en: "This page explains what future reports should contain. No official field results, audited accounts or operational performance reports are currently published here.",
          es: "Esta página explica qué deberán contener los futuros informes. Aquí no se publican todavía resultados oficiales de campo, cuentas auditadas ni informes de desempeño operativo.",
          fr: "Cette page présente les éléments attendus des futurs rapports. Aucun résultat officiel de terrain, compte audité ou bilan d'exploitation n'est actuellement publié ici.",
        }}
        statuses={["NOT_YET_ACTIVE", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip3.src, poster: FIELD_MEDIA.clip3.poster }}
      >
        <ActionLink to="/transparency" variant="cream">{t({ en: "Current public status", es: "Estado público actual", fr: "État d'avancement public" })}</ActionLink>
      </EditorialHero>
      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · Reporting framework", es: "01 · Marco de informes", fr: "01 · Cadre de reddition de comptes" }}
            title={{ en: "Four areas to document.", es: "Cuatro áreas por documentar.", fr: "Quatre domaines à documenter." }}
            lede={{
              en: "A report must say what happened, when it happened, how the evidence was obtained and what remains unknown.",
              es: "Un informe debe explicar qué ocurrió, cuándo, cómo se obtuvo la información y qué se desconoce todavía.",
              fr: "Un rapport doit préciser ce qui s'est passé, à quelle date, comment les données ont été obtenues et ce qui reste inconnu.",
            }}
          />
          <ol className="mt-14 grid gap-px overflow-hidden bg-foreground/15 md:grid-cols-2">
            {FRAMEWORK.map((item) => (
              <li key={item.n} className="flex min-h-72 flex-col justify-between bg-card p-8 md:p-10">
                <span className="display text-5xl text-clay">{item.n}</span>
                <div className="mt-10">
                  <h3 className="display text-2xl md:text-3xl">{t(item.title)}</h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed opacity-75">{t(item.body)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-soil py-24 text-soil-foreground md:py-32">
        <div className="shell">
          <p className="eyebrow text-clay">{t({ en: "02 · Current document status", es: "02 · Estado de los documentos", fr: "02 · État de la documentation" })}</p>
          <h2 className="poster mt-8 max-w-5xl text-balance">{t({ en: "Not published does not mean completed.", es: "No publicado no significa terminado.", fr: "Non publié ne signifie pas réalisé." })}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
            en: "We will not invent downloads, report dates, audits or results to fill this space. Verified documents can be published here once they exist and their public release is authorized.",
            es: "No inventaremos descargas, fechas de informes, auditorías ni resultados para llenar este espacio. Los documentos verificados se publicarán cuando existan y se autorice su difusión.",
            fr: "Nous n'inventerons ni téléchargements, ni dates, ni audits, ni résultats pour remplir cet espace. Les documents vérifiés pourront y être publiés lorsqu'ils existeront et que leur diffusion sera autorisée.",
          })}</p>
          <div className="mt-8"><StatusBadge status="NOT_YET_ACTIVE" /></div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/timeline" variant="cream">{t({ en: "Review the timeline", es: "Consultar la cronología", fr: "Consulter la chronologie" })}</ActionLink>
            <ActionLink to="/videos" variant="outline">{t({ en: "View actual field footage", es: "Ver imágenes reales del campo", fr: "Voir les vidéos de terrain" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
