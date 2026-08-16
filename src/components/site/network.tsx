import { useI18n } from "@/i18n";

const NODES = [
  { id: "farmers", label: { en: "Farmers", es: "Agricultores", fr: "Agriculteurs" }, x: 130, y: 90 },
  { id: "coops", label: { en: "Cooperatives", es: "Cooperativas", fr: "Coopératives" }, x: 110, y: 210 },
  { id: "institutions", label: { en: "Institutions", es: "Instituciones", fr: "Institutions" }, x: 170, y: 330 },
  { id: "universities", label: { en: "Universities", es: "Universidades", fr: "Universités" }, x: 350, y: 380 },
  { id: "communities", label: { en: "Communities", es: "Comunidades", fr: "Communautés" }, x: 560, y: 350 },
  { id: "canada", label: { en: "Canadian partners", es: "Socios canadienses", fr: "Partenaires canadiens" }, x: 640, y: 210 },
  { id: "market", label: { en: "Tourism / market", es: "Turismo / mercado", fr: "Tourisme / marché" }, x: 600, y: 90 },
  { id: "families", label: { en: "Families", es: "Familias", fr: "Familles" }, x: 390, y: 60 },
];

const CENTER = { x: 375, y: 220 };

export function AgriculturalNetwork() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden rounded-lg border border-current/15">
      <svg viewBox="0 0 750 440" className="h-full w-full" role="img" aria-label="CUBAFOOD agricultural network diagram">
        {NODES.map((n, i) => (
          <line
            key={`l-${n.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="1.5"
            strokeDasharray="420"
            style={{ animation: `draw-line 1.6s ${i * 120}ms ease-out forwards`, ["--dash" as string]: "420" }}
          />
        ))}
        <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="currentColor" fillOpacity="0.12" />
        <circle cx={CENTER.x} cy={CENTER.y} r="9" fill="currentColor" />
        <text
          x={CENTER.x}
          y={CENTER.y + 78}
          textAnchor="middle"
          fill="currentColor"
          fontSize="17"
          letterSpacing="2.5"
          fontWeight="700"
        >
          CUBAFOOD
        </text>
        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="5"
              fill="currentColor"
              style={{ animation: `pulse-node 3.2s ${i * 200}ms ease-in-out infinite` }}
            />
            <text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              fill="currentColor"
              fontSize="14"
              opacity="0.8"
            >
              {t(n.label)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
