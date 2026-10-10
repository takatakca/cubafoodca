import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { SITE } from "@/content/site";
import { FIELD_MEDIA } from "@/content/media";
import { LocationMap } from "@/components/site/map";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Territoires du projet | Matanzas | CUBAFOOD.CA" },
      { name: "description", content: "Explore Matanzas, the primary CUBAFOOD.CA development region, and Jagüey Grande as a future area of interest. The map is illustrative, not a surveyed parcel boundary." },
      { property: "og:title", content: "Where the project begins — CUBAFOOD.CA" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Places · Territory · Perspective", es: "Lugares · Territorio · Perspectiva", fr: "Lieux · Territoire · Perspective" }}
        title={{ en: "Every place has its own story.", es: "Cada lugar tiene su historia.", fr: "Chaque territoire a son histoire." }}
        subtitle={{ en: "Begin with Matanzas.", es: "Comenzamos en Matanzas.", fr: "Tout commence à Matanzas." }}
        body={{
          en: "A regional orientation to the development initiative. The corridor shown is schematic: it is not a boundary survey, a proof of land ownership or a map of approved operations.",
          es: "Una introducción regional al proyecto de desarrollo. El corredor mostrado es esquemático: no representa límites catastrales, propiedad de la tierra ni operaciones autorizadas.",
          fr: "Un aperçu régional de l'initiative. Le corridor représenté est schématique : il ne constitue ni un relevé cadastral, ni une preuve de propriété, ni une carte d'opérations autorisées.",
        }}
        statuses={["REGIONAL_CONTEXT", "AWAITING_APPROVAL"]}
        media={{ video: FIELD_MEDIA.clip2.src, poster: FIELD_MEDIA.clip2.poster }}
      >
        <ActionLink to="/locations/matanzas" variant="cream">{t({ en: "Explore Matanzas", es: "Explorar Matanzas", fr: "Explorer Matanzas" })}</ActionLink>
      </EditorialHero>

      <section className="bg-charcoal py-20 text-cream md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "01 · The primary development region", es: "01 · La región principal", fr: "01 · La région principale" }}
            title={{ en: "Matanzas / Varadero corridor.", es: "Corredor Matanzas / Varadero.", fr: "Corridor Matanzas / Varadero." }}
            lede={SITE.locationLine}
            status="REGIONAL_CONTEXT"
          />
          <div className="mt-14"><LocationMap /></div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-65">
            {t({
              en: "The stated scale of more than 24 kilometres describes the project's development-area length. It is not a measured area in hectares or a confirmed landholding.",
              es: "La referencia a más de 24 kilómetros describe la longitud de la zona de desarrollo del proyecto. No es una superficie medida en hectáreas ni prueba de tenencia de tierra.",
              fr: "La mention de plus de 24 kilomètres désigne la longueur de la zone de développement, et non une superficie en hectares ou une propriété foncière confirmée.",
            })}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "02 · Explore the places", es: "02 · Explorar los lugares", fr: "02 · Explorer les lieux" }}
            title={{ en: "One current focus. One future possibility.", es: "Un enfoque actual. Una posibilidad futura.", fr: "Une région prioritaire. Une possibilité future." }}
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            <article className="overflow-hidden bg-card">
              <img src={FIELD_MEDIA.clip1.poster} alt="" loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-8 md:p-10">
                <p className="eyebrow text-clay">01 · MATANZAS</p>
                <h3 className="display mt-6 text-4xl md:text-5xl">MATANZAS</h3>
                <p className="mt-5 max-w-md text-base leading-relaxed opacity-75">{t({
                  en: "The primary region behind the documented CUBAFOOD project work and the institutional coordination process.",
                  es: "La región principal de la documentación del proyecto CUBAFOOD y de los procesos de coordinación institucional.",
                  fr: "La région principale des démarches documentées de CUBAFOOD et du processus de coordination institutionnelle.",
                })}</p>
                <div className="mt-8"><StatusBadge status="CURRENT" /></div>
                <div className="mt-8"><ActionLink to="/locations/matanzas">{t({ en: "Discover Matanzas", es: "Descubrir Matanzas", fr: "Découvrir Matanzas" })}</ActionLink></div>
              </div>
            </article>
            <article className="flex flex-col justify-between bg-soil p-8 text-soil-foreground md:p-10">
              <div>
                <p className="eyebrow text-clay">02 · JAGÜEY GRANDE</p>
                <h3 className="display mt-8 max-w-md text-4xl leading-tight md:text-5xl">JAGÜEY GRANDE</h3>
                <p className="mt-8 max-w-md text-base leading-relaxed opacity-80">{t({
                  en: "A future area of interest, not an active development site. No land commitment, operation, production or permit is claimed.",
                  es: "Una zona de interés futuro, no un sitio de desarrollo activo. No se afirma ningún compromiso de tierras, operación, producción ni permiso.",
                  fr: "Un territoire d'intérêt futur, et non un site de développement actif. Aucun engagement foncier, aucune opération, production ou autorisation n'est revendiqué.",
                })}</p>
                <div className="mt-8"><StatusBadge status="FUTURE_DEVELOPMENT" /></div>
              </div>
              <div className="mt-12"><ActionLink to="/locations/jaguey-grande" variant="outline">{t({ en: "Future location", es: "Ubicación futura", fr: "Territoire à l'étude" })}</ActionLink></div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
