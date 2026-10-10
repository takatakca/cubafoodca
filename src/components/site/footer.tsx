import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { PRIMARY_NAV, SECONDARY_NAV, SITE } from "@/content/site";
import { WhatsAppButton, EmailButton } from "./whatsapp";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-charcoal text-cream">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="display text-2xl">
              CUBAFOOD<span className="text-secondary">.CA</span>
            </p>
            <p className="mt-4 max-w-sm text-sm opacity-70">{t(SITE.tagline)} — {t(SITE.subline)}</p>
            <p className="mt-6 text-sm opacity-55">{t(SITE.location)}</p>
            <p className="text-sm opacity-55">{SITE.established} —</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <EmailButton />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="eyebrow text-secondary">{t({ en: "Explore", es: "Explorar", fr: "Explorer" })}</p>
              <ul className="mt-4 space-y-2.5">
                {PRIMARY_NAV.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="text-sm opacity-70 hover:opacity-100">
                      {t(i.label)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-sm opacity-70 hover:opacity-100">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {SECONDARY_NAV.slice(0, 2).map((g) => (
              <div key={g.group.en}>
                <p className="eyebrow text-secondary">{t(g.group)}</p>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i.to}>
                      <Link to={i.to} className="text-sm opacity-70 hover:opacity-100">
                        {t(i.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="sm:col-span-2 lg:col-span-1">
              {SECONDARY_NAV.slice(2).map((g) => (
                <div key={g.group.en} className="mb-8 last:mb-0">
                  <p className="eyebrow text-secondary">{t(g.group)}</p>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((i) => (
                      <li key={i.to}>
                        <Link to={i.to} className="text-sm opacity-70 hover:opacity-100">
                          {t(i.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs opacity-50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CUBAFOOD.CA — {t({ en: "Canada–Cuba agricultural development initiative.", es: "Iniciativa de desarrollo agrícola Canadá–Cuba.", fr: "Initiative de développement agricole Canada–Cuba." })}</p>
          <p>
            {t({
              en: "Project status: institutional coordination and approval process. No approval is claimed as final.",
              es: "Estado del proyecto: coordinación institucional y proceso de aprobación. No se declara ninguna aprobación como definitiva.",
              fr: "État du projet : coordination institutionnelle et processus d'approbation. Aucune approbation n'est présentée comme finale.",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
