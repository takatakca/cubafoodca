import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { FIELD_MEDIA } from "@/content/media";
import { EQUIPMENT_CATEGORIES, WATER_INFRASTRUCTURE } from "@/content/needs";
import { SUPPLY_STATUS_LABEL } from "@/content/types";
import { seoHead } from "@/seo/head";

export const Route = createFileRoute("/needs")({
  // French title + description from this page's hero text.
  head: () =>
    seoHead({
      title: "Ce projet a besoin d'une vraie infrastructure | CUBAFOOD.CA",
      description:
        "Pas de slogans. Machines, eau, énergie et chambres froides. Tout est listé comme REQUIS. Aucune quantité, prix, commanditaire ou livraison n'est publié.",
      path: "/needs",
      type: "article",
    }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const total = EQUIPMENT_CATEGORIES.reduce((n, c) => n + c.items.length, 0);

  return (
    <main>
      <EditorialHero
        eyebrow={{ en: "Needs", es: "Necesidades", fr: "Besoins" }}
        title={{
          en: "This project needs real infrastructure.",
          es: "Este proyecto necesita infraestructura real.",
          fr: "Ce projet a besoin d'une vraie infrastructure.",
        }}
        subtitle={{
          en: "Not slogans. Machines, water, power and cold rooms.",
          es: "No consignas. Máquinas, agua, energía y cámaras frías.",
          fr: "Pas de slogans. Machines, eau, énergie et chambres froides.",
        }}
        body={{
          en: "Everything below is listed as NEEDED. No quantities, prices, sponsors, deliveries or owners are published, because none have been verified.",
          es: "Todo lo siguiente aparece como NECESARIO. No se publican cantidades, precios, patrocinadores, entregas ni propietarios, porque nada ha sido verificado.",
          fr: "Tout est listé comme REQUIS. Aucune quantité, prix, commanditaire ou livraison n'est publié.",
        }}
        statuses={["PLANNED"]}
        media={{ video: FIELD_MEDIA.clip4.src, poster: FIELD_MEDIA.clip4.poster }}
        metrics={[
          { label: { en: "Categories", es: "Categorías", fr: "Catégories" }, value: String(EQUIPMENT_CATEGORIES.length) },
          { label: { en: "Items listed", es: "Elementos listados", fr: "Éléments listés" }, value: String(total) },
          { label: { en: "Confirmed sponsors", es: "Patrocinadores confirmados", fr: "Commanditaires confirmés" }, value: "0" },
          { label: { en: "Status", es: "Estado", fr: "Statut" }, value: "NEEDED" },
        ]}
      >
        <ActionLink to="/canada" variant="cream">
          {t({ en: "I can help with equipment", es: "Puedo ayudar con equipos", fr: "Je peux aider avec de l'équipement" })}
        </ActionLink>
      </EditorialHero>

      {EQUIPMENT_CATEGORIES.map((cat, idx) => (
        <section key={cat.id} className={idx % 2 === 0 ? "bg-background py-14 md:py-20" : "bg-card py-14 text-card-foreground md:py-20"}>
          <div className="shell">
            <SectionIntro
              eyebrow={`${String(idx + 1).padStart(2, "0")} · ${t(cat.title)}`}
              title={cat.title}
              lede={cat.description}
            />
            <ul className="mt-10 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <li
                  key={item.id}
                  className={
                    "flex items-center justify-between gap-4 p-5 " + (idx % 2 === 0 ? "bg-background" : "bg-card")
                  }
                >
                  <span className="display text-lg">{t(item.label)}</span>
                  <span className="eyebrow shrink-0 rounded-full border border-clay/60 px-3 py-1.5 text-[10px] text-clay">
                    {t(SUPPLY_STATUS_LABEL[item.status])}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ en: "Water infrastructure", es: "Infraestructura de agua", fr: "Infrastructure hydrique" }}
            title={{
              en: "Water is the first system, and the one everything else waits on.",
              es: "El agua es el primer sistema, y del que todo lo demás depende.",
              fr: "L'eau est le premier système, dont tout dépend.",
            }}
            status="PLANNED"
          />
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {WATER_INFRASTRUCTURE.map((w, i) => (
              <li key={i} className="eyebrow rounded-full border border-cream/25 px-4 py-2.5 text-[11px]">
                {t(w)}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <StatusBadge status="PLANNED" />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ActionLink to="/canada" variant="cream">{t({ en: "Offer equipment or expertise", es: "Ofrecer equipos o experiencia", fr: "Offrir équipement ou expertise" })}</ActionLink>
            <ActionLink to="/transparency" variant="outline">{t({ en: "How we report", es: "Cómo informamos", fr: "Comment nous rendons compte" })}</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
