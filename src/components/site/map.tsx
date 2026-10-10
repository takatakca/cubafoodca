import { useI18n } from "@/i18n";
import { SITE } from "@/content/site";

/**
 * Schematic location panel for the Matanzas / Varadero airport development area.
 * Deliberately abstract: no invented street address or GPS coordinates.
 */
export function LocationMap({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();

  const layers = [
    { id: "matanzas", label: { en: "Matanzas, Cuba", es: "Matanzas, Cuba", fr: "Matanzas, Cuba" } },
    { id: "varadero", label: { en: "Varadero region", es: "Región de Varadero", fr: "Région de Varadero" } },
    { id: "airport", label: { en: "Airport area", es: "Zona del aeropuerto", fr: "Secteur de l'aéroport" } },
    {
      id: "zone",
      label: {
        en: "Agricultural development zone",
        es: "Zona de desarrollo agrícola",
        fr: "Zone de développement agricole",
      },
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div className="relative overflow-hidden rounded-lg border border-cream/15 bg-charcoal">
        <svg viewBox="0 0 800 480" className="h-full w-full" role="img" aria-label={t({ en: "Schematic map of the Matanzas development region", es: "Mapa esquemático de la región de desarrollo en Matanzas", fr: "Carte schématique de la région de développement à Matanzas" })}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0v40" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
            </pattern>
            <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.44 0.106 250)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.44 0.106 250)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="800" height="480" fill="oklch(0.19 0.012 85)" />
          <rect width="800" height="480" fill="url(#grid)" className="text-cream" />
          <path d="M0 0h800v120c-180 40-340 10-520 46C170 194 80 186 0 172Z" fill="url(#sea)" />
          <path
            d="M0 172c80 14 170 22 280 -6 180-36 340-6 520-46v360H0Z"
            fill="oklch(0.365 0.078 146)"
            fillOpacity="0.22"
          />
          {/* development corridor: more than 24 km */}
          <path
            d="M120 330 C 260 288, 430 300, 690 250"
            fill="none"
            stroke="oklch(0.79 0.135 78)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1400"
            style={{ animation: "draw-line 2.4s ease-out forwards", ["--dash" as string]: "1400" }}
          />
          <circle cx="120" cy="330" r="7" fill="oklch(0.79 0.135 78)" />
          <circle cx="690" cy="250" r="7" fill="oklch(0.79 0.135 78)" />
          <circle cx="470" cy="214" r="6" fill="oklch(0.505 0.196 27)" />
          <text x="486" y="208" fill="oklch(0.955 0.014 92)" fontSize="15" opacity="0.8">
            {t({ en: "Varadero airport area", es: "Zona del aeropuerto de Varadero", fr: "Secteur de l’aéroport de Varadero" })}
          </text>
          <text x="120" y="368" fill="oklch(0.955 0.014 92)" fontSize="15" opacity="0.8">
            Matanzas
          </text>
          <text x="330" y="300" fill="oklch(0.79 0.135 78)" fontSize="17" letterSpacing="2">
            {t({ en: "24+ KM CORRIDOR (SCHEMATIC)", es: "CORREDOR DE +24 KM (ESQUEMA)", fr: "CORRIDOR DE +24 KM (SCHÉMA)" })}
          </text>
        </svg>
        <p className="border-t border-cream/10 px-5 py-3 text-[11px] text-cream/45">
          {t({
            en: "Schematic representation. Exact surveyed boundaries and coordinates will be published once formally measured.",
            es: "Representación esquemática. Los límites y coordenadas exactos se publicarán una vez medidos formalmente.",
            fr: "Représentation schématique. Les limites et coordonnées exactes seront publiées après l'arpentage.",
          })}
        </p>
      </div>

      <div>
        <ul className="space-y-3">
          {layers.map((l) => (
            <li key={l.id} className="flex items-center gap-3 rounded-lg border border-current/15 px-4 py-3.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden />
              <span className="eyebrow">{t(l.label)}</span>
            </li>
          ))}
        </ul>
        {!compact ? <p className="mt-6 text-sm leading-relaxed opacity-75">{t(SITE.locationLine)}</p> : null}
      </div>
    </div>
  );
}
