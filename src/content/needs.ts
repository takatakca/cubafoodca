import type { EquipmentCategory } from "./types";

const n = (id: string, en: string, es: string, fr: string) => ({
  id,
  label: { en, es, fr },
  status: "NEEDED" as const,
});

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: "land-preparation",
    title: { en: "Land preparation", es: "Preparación de tierras", fr: "Préparation des terres" },
    description: {
      en: "Nothing grows until the ground is opened. This is the first operational phase after approval.",
      es: "Nada crece hasta que se abre la tierra. Esta es la primera fase operativa tras la aprobación.",
      fr: "Rien ne pousse tant que le sol n'est pas ouvert. C'est la première phase opérationnelle après approbation.",
    },
    items: [
      n("tractors", "Tractors", "Tractores", "Tracteurs"),
      n("ploughs", "Ploughs", "Arados", "Charrues"),
      n("tillers", "Tillers", "Motocultores", "Motoculteurs"),
      n("cultivators", "Cultivators", "Cultivadoras", "Cultivateurs"),
      n("loaders", "Loaders", "Cargadores", "Chargeuses"),
      n("trailers", "Trailers", "Remolques", "Remorques"),
      n("clearing", "Land-clearing equipment", "Equipos de desbroce", "Équipement de défrichage"),
    ],
  },
  {
    id: "irrigation",
    title: { en: "Irrigation", es: "Riego", fr: "Irrigation" },
    description: {
      en: "Water makes agriculture possible. Everything else depends on it.",
      es: "El agua hace posible la agricultura. Todo lo demás depende de ella.",
      fr: "L'eau rend l'agriculture possible. Tout le reste en dépend.",
    },
    items: [
      n("pumps", "Pumps", "Bombas", "Pompes"),
      n("pipes", "Pipes", "Tuberías", "Tuyaux"),
      n("drip", "Drip systems", "Sistemas de goteo", "Systèmes goutte-à-goutte"),
      n("storage-water", "Water storage", "Almacenamiento de agua", "Stockage d'eau"),
      n("controls", "Irrigation controls", "Controles de riego", "Contrôles d'irrigation"),
    ],
  },
  {
    id: "harvesting",
    title: { en: "Harvesting", es: "Cosecha", fr: "Récolte" },
    description: {
      en: "Production only counts once it reaches people in good condition.",
      es: "La producción solo cuenta cuando llega a las personas en buen estado.",
      fr: "La production ne compte que si elle arrive en bon état.",
    },
    items: [
      n("hand-tools", "Agricultural tools", "Herramientas agrícolas", "Outils agricoles"),
      n("crates", "Crates", "Cajas", "Caisses"),
      n("harvest-equipment", "Harvesting equipment", "Equipos de cosecha", "Équipement de récolte"),
      n("sorting", "Sorting systems", "Sistemas de clasificación", "Systèmes de tri"),
    ],
  },
  {
    id: "storage",
    title: { en: "Storage", es: "Almacenamiento", fr: "Stockage" },
    description: {
      en: "Food lost after harvest is food never eaten.",
      es: "El alimento perdido tras la cosecha es alimento que nunca se come.",
      fr: "Les aliments perdus après la récolte ne nourrissent personne.",
    },
    items: [
      n("warehouses", "Warehouses", "Almacenes", "Entrepôts"),
      n("shelving", "Shelving", "Estanterías", "Rayonnages"),
      n("containers", "Containers", "Contenedores", "Conteneurs"),
      n("refrigeration", "Refrigeration", "Refrigeración", "Réfrigération"),
      n("cold-storage", "Cold storage", "Cámaras frías", "Chambres froides"),
    ],
  },
  {
    id: "transportation",
    title: { en: "Transportation", es: "Transporte", fr: "Transport" },
    description: {
      en: "24+ km of land needs movement — of people, inputs and produce.",
      es: "Más de 24 km de terreno exigen movimiento — de personas, insumos y productos.",
      fr: "Plus de 24 km de terrain exigent du mouvement — personnes, intrants et produits.",
    },
    items: [
      n("ag-vehicles", "Agricultural vehicles", "Vehículos agrícolas", "Véhicules agricoles"),
      n("trucks", "Trucks", "Camiones", "Camions"),
      n("transport-trailers", "Trailers", "Remolques", "Remorques"),
      n("transport-support", "Transport support", "Apoyo al transporte", "Soutien au transport"),
    ],
  },
  {
    id: "energy",
    title: { en: "Energy", es: "Energía", fr: "Énergie" },
    description: {
      en: "Pumps, cold storage and lighting all need reliable power.",
      es: "Bombas, refrigeración e iluminación necesitan energía confiable.",
      fr: "Pompes, réfrigération et éclairage exigent une énergie fiable.",
    },
    items: [
      n("solar", "Solar", "Solar", "Solaire"),
      n("batteries", "Batteries", "Baterías", "Batteries"),
      n("generators", "Generators where required", "Generadores donde sea necesario", "Génératrices au besoin"),
      n("efficient-pumps", "Efficient pumps", "Bombas eficientes", "Pompes efficaces"),
    ],
  },
  {
    id: "worker-equipment",
    title: { en: "Worker equipment", es: "Equipamiento del trabajador", fr: "Équipement des travailleurs" },
    description: {
      en: "People do this work. They need to be protected while they do it.",
      es: "Son personas quienes hacen este trabajo. Deben estar protegidas al hacerlo.",
      fr: "Ce sont des personnes qui font ce travail. Elles doivent être protégées.",
    },
    items: [
      n("ppe", "Protective equipment", "Equipos de protección", "Équipement de protection"),
      n("workwear", "Workwear", "Ropa de trabajo", "Vêtements de travail"),
      n("boots", "Boots", "Botas", "Bottes"),
      n("tools", "Hand tools", "Herramientas manuales", "Outils à main"),
    ],
  },
];

export const WATER_INFRASTRUCTURE = [
  { en: "Water access", es: "Acceso al agua", fr: "Accès à l'eau" },
  { en: "Irrigation", es: "Riego", fr: "Irrigation" },
  { en: "Pumping", es: "Bombeo", fr: "Pompage" },
  { en: "Storage", es: "Almacenamiento", fr: "Stockage" },
  { en: "Filtration", es: "Filtración", fr: "Filtration" },
  { en: "Distribution", es: "Distribución", fr: "Distribution" },
  { en: "Drip irrigation", es: "Riego por goteo", fr: "Goutte-à-goutte" },
  { en: "Crop monitoring", es: "Monitoreo de cultivos", fr: "Suivi des cultures" },
];
