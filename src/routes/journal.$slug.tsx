import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { ActionLink } from "@/components/site/primitives";
import { StatusBadge } from "@/components/site/editorial";

export const Route = createFileRoute("/journal/$slug")({
  head: () => ({
    meta: [
      { title: "Article non publié | Carnet de terrain CUBAFOOD.CA" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main className="bg-charcoal text-cream">
      <section className="shell flex min-h-[80vh] flex-col justify-center pb-20 pt-40 md:pt-52">
        <p className="eyebrow text-secondary">{t({ en: "Field journal · Archive", es: "Diario de campo · Archivo", fr: "Carnet de terrain · Archives" })}</p>
        <h1 className="poster mt-8 max-w-5xl text-balance">{t({ en: "This story is not published.", es: "Esta historia no está publicada.", fr: "Cet article n'est pas publié." })}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">{t({
          en: "We do not generate fictional articles to fill unpublished URLs. Verified, dated reporting will appear in the journal when ready.",
          es: "No generamos artículos ficticios para rellenar direcciones sin contenido publicado. Los informes fechados y verificados aparecerán cuando estén listos.",
          fr: "Nous ne créons pas d'articles fictifs pour remplir les adresses sans contenu publié. Les reportages datés et vérifiés paraîtront lorsqu'ils seront prêts.",
        })}</p>
        <div className="mt-9"><StatusBadge status="NOT_YET_ACTIVE" /></div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ActionLink to="/journal" variant="cream">{t({ en: "Back to the journal", es: "Volver al diario", fr: "Retour au carnet" })}</ActionLink>
          <ActionLink to="/videos" variant="outline">{t({ en: "Watch available footage", es: "Ver los videos disponibles", fr: "Voir les vidéos disponibles" })}</ActionLink>
        </div>
      </section>
    </main>
  );
}
