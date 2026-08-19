import type { T } from "@/i18n";

/**
 * Researched regional context for Matanzas, Cuban agriculture and the CUBAFOOD.CA
 * development area.
 *
 * RULE: everything here is REGIONAL / HISTORICAL context or a PLANNED project
 * activity. Nothing in this file describes measured results from the project
 * land. No yields, no soil test results, no acreage, no endorsements.
 */

export type SourceRef = { label: string; publisher: string; url: string };

export const SOURCES: Record<string, SourceRef[]> = {
  matanzas: [
    {
      label: "Matanzas — city history and foundation (1693)",
      publisher: "Encyclopaedia Britannica",
      url: "https://www.britannica.com/place/Matanzas-Cuba",
    },
    {
      label: "Archaeological Landscape of the First Coffee Plantations / Cuban sugar landscape context",
      publisher: "UNESCO World Heritage Centre",
      url: "https://whc.unesco.org/en/list/1008/",
    },
    {
      label: "Juan Gualberto Gómez International Airport (Varadero), Matanzas",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Juan_Gualberto_G%C3%B3mez_Airport",
    },
    {
      label: "Kawama Airport, Varadero",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Kawama_Airport",
    },
  ],
  agriculture: [
    {
      label: "Cuba — country profile, crop production and agricultural statistics",
      publisher: "FAO",
      url: "https://www.fao.org/countryprofiles/index/en/?iso3=CUB",
    },
    {
      label: "FAOSTAT — sugar cane and food crop production data for Cuba",
      publisher: "FAO / FAOSTAT",
      url: "https://www.fao.org/faostat/en/#country/49",
    },
    {
      label: "World Reference Base for Soil Resources (Ferralsols)",
      publisher: "FAO",
      url: "https://www.fao.org/soils-portal/data-hub/soil-classification/world-reference-base/en/",
    },
  ],
};

/** THE LAND HAS A HISTORY — cinematic historical sequence. Regional history, not project claims. */
export const HISTORY_CHAPTERS: { year: T; title: T; body: T; tone?: "grave" }[] = [
  {
    year: { en: "1693", es: "1693", fr: "1693" },
    title: {
      en: "The foundation of Matanzas",
      es: "La fundación de Matanzas",
      fr: "La fondation de Matanzas",
    },
    body: {
      en: "The city of San Carlos y San Severino de Matanzas was founded in 1693 on a deep bay fed by rivers. Water, bridges and a working port shaped everything that came after it.",
      es: "La ciudad de San Carlos y San Severino de Matanzas fue fundada en 1693 sobre una bahía profunda alimentada por ríos. El agua, los puentes y un puerto activo definieron todo lo que vino después.",
      fr: "La ville de San Carlos y San Severino de Matanzas fut fondée en 1693 sur une baie profonde alimentée par des rivières. L'eau, les ponts et un port actif ont façonné tout ce qui a suivi.",
    },
  },
  {
    year: { en: "18th–19th c.", es: "Siglos XVIII–XIX", fr: "XVIIIe–XIXe s." },
    title: {
      en: "Agriculture expands across the province",
      es: "La agricultura se expande por la provincia",
      fr: "L'agriculture s'étend dans la province",
    },
    body: {
      en: "Plains, rivers and port access turned the region into farmland at scale. Roads, warehouses and later railways were built to move harvests, not people.",
      es: "Llanuras, ríos y acceso portuario convirtieron la región en tierra de cultivo a gran escala. Caminos, almacenes y luego ferrocarriles se construyeron para mover cosechas, no personas.",
      fr: "Plaines, rivières et accès portuaire ont transformé la région en terres agricoles à grande échelle. Routes, entrepôts puis chemins de fer furent bâtis pour déplacer les récoltes.",
    },
  },
  {
    year: { en: "19th century", es: "Siglo XIX", fr: "XIXe siècle" },
    title: {
      en: "A major sugar region — and 'the Athens of Cuba'",
      es: "Una gran región azucarera — y «la Atenas de Cuba»",
      fr: "Une grande région sucrière — et « l'Athènes de Cuba »",
    },
    body: {
      en: "Matanzas became one of Cuba's most important sugar-producing regions. Its printing houses, theatres and literary life earned it the name La Atenas de Cuba. Wealth and culture grew from the same soil.",
      es: "Matanzas se convirtió en una de las regiones azucareras más importantes de Cuba. Sus imprentas, teatros y vida literaria le dieron el nombre de La Atenas de Cuba. La riqueza y la cultura crecieron del mismo suelo.",
      fr: "Matanzas est devenue l'une des plus importantes régions sucrières de Cuba. Ses imprimeries, théâtres et sa vie littéraire lui ont valu le nom de La Atenas de Cuba.",
    },
  },
  {
    year: { en: "Colonial labour", es: "Trabajo colonial", fr: "Travail colonial" },
    title: {
      en: "A history that must be acknowledged",
      es: "Una historia que debe ser reconocida",
      fr: "Une histoire qui doit être reconnue",
    },
    body: {
      en: "The colonial sugar economy was inseparable from slavery. Matanzas sat at the centre of one of the largest sugar-and-slavery complexes in the nineteenth-century Caribbean. Any project that works this land has an obligation to name that history plainly rather than romanticise the landscape it produced.",
      es: "La economía azucarera colonial fue inseparable de la esclavitud. Matanzas estuvo en el centro de uno de los mayores complejos azucareros y esclavistas del Caribe del siglo XIX. Todo proyecto que trabaje esta tierra tiene la obligación de nombrar esa historia con claridad.",
      fr: "L'économie sucrière coloniale était indissociable de l'esclavage. Matanzas fut au cœur de l'un des plus grands complexes sucriers et esclavagistes des Caraïbes du XIXe siècle. Tout projet travaillant cette terre doit nommer cette histoire clairement.",
    },
    tone: "grave",
  },
  {
    year: { en: "20th century", es: "Siglo XX", fr: "XXe siècle" },
    title: {
      en: "Mechanisation and large-scale production",
      es: "Mecanización y producción a gran escala",
      fr: "Mécanisation et production à grande échelle",
    },
    body: {
      en: "Tractors, combines, central mills and rail networks reorganised the countryside around a single commodity. Efficiency rose. Diversity of what the land produced did not.",
      es: "Tractores, cosechadoras, centrales y redes ferroviarias reorganizaron el campo alrededor de un solo producto. La eficiencia subió. La diversidad de lo que producía la tierra, no.",
      fr: "Tracteurs, moissonneuses, centrales et réseaux ferroviaires ont réorganisé la campagne autour d'un seul produit.",
    },
  },
  {
    year: { en: "1990s →", es: "Años 1990 →", fr: "Années 1990 →" },
    title: {
      en: "Economic transformation, agricultural strain",
      es: "Transformación económica, tensión agrícola",
      fr: "Transformation économique, tension agricole",
    },
    body: {
      en: "The loss of trade partners, fuel, fertiliser and spare parts reduced production nationally. Land stayed. Knowledge stayed. Inputs, machinery and irrigation capacity did not.",
      es: "La pérdida de socios comerciales, combustible, fertilizantes y repuestos redujo la producción nacional. La tierra quedó. El conocimiento quedó. Los insumos, la maquinaria y la capacidad de riego no.",
      fr: "La perte de partenaires commerciaux, de carburant, d'engrais et de pièces a réduit la production nationale. La terre est restée. Le savoir aussi. Pas les intrants.",
    },
  },
  {
    year: { en: "2024", es: "2024", fr: "2024" },
    title: {
      en: "CUBAFOOD.CA begins",
      es: "CUBAFOOD.CA comienza",
      fr: "CUBAFOOD.CA commence",
    },
    body: {
      en: "A Canada–Cuba agricultural development initiative is founded, centred on a development area of more than 24 kilometres in the Matanzas / Varadero airport region.",
      es: "Se funda una iniciativa de desarrollo agrícola Canadá–Cuba, centrada en un área de desarrollo de más de 24 kilómetros en la región de Matanzas / aeropuerto de Varadero.",
      fr: "Une initiative de développement agricole Canada–Cuba est fondée, centrée sur une zone de plus de 24 kilomètres dans la région de Matanzas / aéroport de Varadero.",
    },
  },
  {
    year: { en: "Today", es: "Hoy", fr: "Aujourd'hui" },
    title: {
      en: "What should this land produce for Cuba's future?",
      es: "¿Qué debe producir esta tierra para el futuro de Cuba?",
      fr: "Que doit produire cette terre pour l'avenir de Cuba ?",
    },
    body: {
      en: "That question is not answered by history. It is answered by soil tests, water, machinery, farmers and food demand — in that order.",
      es: "Esa pregunta no la responde la historia. La responden los análisis de suelo, el agua, la maquinaria, los agricultores y la demanda de alimentos — en ese orden.",
      fr: "Cette question n'est pas tranchée par l'histoire, mais par les analyses de sol, l'eau, la machinerie, les agriculteurs et la demande alimentaire.",
    },
  },
];

/** BEFORE CULTIVATION — the professional sequence required before crop selection. */
export const SOIL_PROTOCOL: { n: string; title: T; note: T }[] = [
  { n: "01", title: { en: "GIS mapping", es: "Cartografía SIG", fr: "Cartographie SIG" }, note: { en: "Map the full development area before dividing it.", es: "Mapear toda el área de desarrollo antes de dividirla.", fr: "Cartographier toute la zone avant de la diviser." } },
  { n: "02", title: { en: "Management zones", es: "Zonas de manejo", fr: "Zones de gestion" }, note: { en: "Split the land into zones that can be measured separately.", es: "Dividir la tierra en zonas que puedan medirse por separado.", fr: "Diviser la terre en zones mesurables séparément." } },
  { n: "03", title: { en: "Soil sampling", es: "Muestreo de suelos", fr: "Échantillonnage des sols" }, note: { en: "Physical samples per zone, at depth, on a documented grid.", es: "Muestras físicas por zona, a profundidad, en una cuadrícula documentada.", fr: "Échantillons physiques par zone, en profondeur, sur une grille documentée." } },
  { n: "04", title: { en: "Texture analysis", es: "Análisis de textura", fr: "Analyse de texture" }, note: { en: "Sand, silt and clay fractions decide water behaviour.", es: "Las fracciones de arena, limo y arcilla deciden el comportamiento del agua.", fr: "Sable, limon et argile déterminent le comportement de l'eau." } },
  { n: "05", title: { en: "pH", es: "pH", fr: "pH" }, note: { en: "Controls which nutrients a plant can actually absorb.", es: "Controla qué nutrientes puede absorber realmente una planta.", fr: "Détermine les nutriments réellement absorbables." } },
  { n: "06", title: { en: "Organic matter", es: "Materia orgánica", fr: "Matière organique" }, note: { en: "The difference between soil and dirt.", es: "La diferencia entre suelo y tierra muerta.", fr: "La différence entre un sol vivant et de la terre morte." } },
  { n: "07", title: { en: "Nitrogen", es: "Nitrógeno", fr: "Azote" }, note: { en: "Growth. Also the easiest input to waste.", es: "Crecimiento. También el insumo más fácil de desperdiciar.", fr: "Croissance. Aussi l'intrant le plus facile à gaspiller." } },
  { n: "08", title: { en: "Available phosphorus", es: "Fósforo disponible", fr: "Phosphore disponible" }, note: { en: "Root establishment and early vigour.", es: "Establecimiento radicular y vigor inicial.", fr: "Enracinement et vigueur initiale." } },
  { n: "09", title: { en: "Potassium", es: "Potasio", fr: "Potassium" }, note: { en: "Stress tolerance and produce quality.", es: "Tolerancia al estrés y calidad del producto.", fr: "Tolérance au stress et qualité des produits." } },
  { n: "10", title: { en: "Calcium / magnesium", es: "Calcio / magnesio", fr: "Calcium / magnésium" }, note: { en: "Structure and base balance where relevant.", es: "Estructura y equilibrio de bases donde corresponda.", fr: "Structure et équilibre des bases." } },
  { n: "11", title: { en: "Salinity", es: "Salinidad", fr: "Salinité" }, note: { en: "Critical near coastal and low-lying land.", es: "Crítica cerca de la costa y en terrenos bajos.", fr: "Critique près du littoral et en terrain bas." } },
  { n: "12", title: { en: "Drainage", es: "Drenaje", fr: "Drainage" }, note: { en: "Where does water go after heavy rain?", es: "¿A dónde va el agua tras una lluvia fuerte?", fr: "Où va l'eau après une forte pluie ?" } },
  { n: "13", title: { en: "Compaction", es: "Compactación", fr: "Compaction" }, note: { en: "Decades of machinery leave a signature underground.", es: "Décadas de maquinaria dejan una huella bajo tierra.", fr: "Des décennies de machinerie laissent une empreinte souterraine." } },
  { n: "14", title: { en: "Water availability", es: "Disponibilidad de agua", fr: "Disponibilité de l'eau" }, note: { en: "Sources, volume, seasonality, legality.", es: "Fuentes, volumen, estacionalidad, legalidad.", fr: "Sources, volume, saisonnalité, légalité." } },
  { n: "15", title: { en: "Previous land use", es: "Uso anterior de la tierra", fr: "Usage antérieur" }, note: { en: "What was grown here, and what was applied to it.", es: "Qué se cultivó aquí y qué se le aplicó.", fr: "Ce qui a été cultivé ici et ce qui y a été appliqué." } },
  { n: "16", title: { en: "Crop suitability mapping", es: "Mapa de aptitud de cultivos", fr: "Cartographie d'aptitude" }, note: { en: "Only now can crops be chosen honestly.", es: "Solo entonces se pueden elegir los cultivos con honestidad.", fr: "Ce n'est qu'alors que les cultures peuvent être choisies honnêtement." } },
];

export const SOIL_LAYERS: { id: string; label: T; note: T; depth: string }[] = [
  { id: "topsoil", label: { en: "Topsoil", es: "Capa superficial", fr: "Couche arable" }, note: { en: "Where most biological activity and nutrient exchange happens.", es: "Donde ocurre la mayor actividad biológica e intercambio de nutrientes.", fr: "Où se concentrent l'activité biologique et les échanges nutritifs." }, depth: "0–20 cm" },
  { id: "organic", label: { en: "Organic matter", es: "Materia orgánica", fr: "Matière organique" }, note: { en: "Holds water, feeds microbiology, buffers drought.", es: "Retiene agua, alimenta la microbiología, amortigua la sequía.", fr: "Retient l'eau, nourrit la microbiologie, tamponne la sécheresse." }, depth: "—" },
  { id: "root", label: { en: "Root zone", es: "Zona radicular", fr: "Zone racinaire" }, note: { en: "Depth here decides which crops are realistic.", es: "La profundidad aquí decide qué cultivos son realistas.", fr: "La profondeur ici détermine les cultures réalistes." }, depth: "20–60 cm" },
  { id: "subsoil", label: { en: "Subsoil", es: "Subsuelo", fr: "Sous-sol" }, note: { en: "Structure, compaction and mineral reserve.", es: "Estructura, compactación y reserva mineral.", fr: "Structure, compaction et réserve minérale." }, depth: "60–120 cm" },
  { id: "drainage", label: { en: "Drainage horizon", es: "Horizonte de drenaje", fr: "Horizon de drainage" }, note: { en: "Determines whether irrigation helps or drowns a crop.", es: "Determina si el riego ayuda o ahoga un cultivo.", fr: "Détermine si l'irrigation aide ou noie une culture." }, depth: "—" },
];

export type CropEntry = {
  id: string;
  family: T;
  name: T;
  why: T;
  use: T;
  water: T;
  soil: T;
  cycle: T;
  storage: T;
};

const crop = (
  id: string,
  family: T,
  name: T,
  why: T,
  use: T,
  water: T,
  soil: T,
  cycle: T,
  storage: T,
): CropEntry => ({ id, family, name, why, use, water, soil, cycle, storage });

const VIANDAS: T = { en: "Viandas", es: "Viandas", fr: "Tubercules (viandas)" };
const VEG: T = { en: "Vegetables", es: "Hortalizas", fr: "Légumes" };
const LEG: T = { en: "Grains & legumes", es: "Granos y legumbres", fr: "Grains et légumineuses" };
const FRUIT: T = { en: "Fruit", es: "Frutas", fr: "Fruits" };

export const CROPS: CropEntry[] = [
  crop("yuca", VIANDAS, { en: "Yuca (cassava)", es: "Yuca", fr: "Manioc" },
    { en: "Calorie-dense staple that tolerates difficult seasons.", es: "Alimento básico calórico que tolera temporadas difíciles.", fr: "Aliment de base calorique tolérant les saisons difficiles." },
    { en: "Daily household food, processing.", es: "Alimento diario del hogar, procesamiento.", fr: "Alimentation quotidienne, transformation." },
    { en: "Low to moderate once established.", es: "Baja a moderada una vez establecida.", fr: "Faible à modérée une fois établie." },
    { en: "Prefers well-drained soil; hates waterlogging.", es: "Prefiere suelo bien drenado; no tolera encharcamiento.", fr: "Préfère un sol drainé ; craint l'engorgement." },
    { en: "Long cycle.", es: "Ciclo largo.", fr: "Cycle long." },
    { en: "Deteriorates quickly after harvest — handling matters.", es: "Se deteriora rápido tras la cosecha — el manejo importa.", fr: "Se détériore vite après récolte." }),
  crop("boniato", VIANDAS, { en: "Boniato (sweet potato)", es: "Boniato", fr: "Patate douce" },
    { en: "Fast, nutritious and widely eaten.", es: "Rápido, nutritivo y muy consumido.", fr: "Rapide, nutritif et très consommé." },
    { en: "Household staple, institutional supply.", es: "Base del hogar, abastecimiento institucional.", fr: "Aliment de base, approvisionnement institutionnel." },
    { en: "Moderate.", es: "Moderada.", fr: "Modérée." },
    { en: "Light, well-drained soils.", es: "Suelos ligeros y bien drenados.", fr: "Sols légers et bien drainés." },
    { en: "Short to medium cycle.", es: "Ciclo corto a medio.", fr: "Cycle court à moyen." },
    { en: "Cures and stores reasonably well.", es: "Se cura y almacena razonablemente bien.", fr: "Se conserve raisonnablement." }),
  crop("malanga", VIANDAS, { en: "Malanga", es: "Malanga", fr: "Malanga" },
    { en: "Culturally essential and always in demand.", es: "Culturalmente esencial y siempre demandada.", fr: "Culturellement essentielle, toujours demandée." },
    { en: "Household food, children and hospital diets.", es: "Alimento del hogar, dietas infantiles y hospitalarias.", fr: "Alimentation familiale et diététique." },
    { en: "High — needs consistent moisture.", es: "Alta — necesita humedad constante.", fr: "Élevée — humidité constante requise." },
    { en: "Moisture-retentive soils with managed drainage.", es: "Suelos que retienen humedad con drenaje manejado.", fr: "Sols retenant l'humidité avec drainage géré." },
    { en: "Long cycle.", es: "Ciclo largo.", fr: "Cycle long." },
    { en: "Requires careful post-harvest handling.", es: "Requiere manejo poscosecha cuidadoso.", fr: "Exige une manutention soignée." }),
  crop("platano", VIANDAS, { en: "Plátano", es: "Plátano", fr: "Plantain" },
    { en: "Year-round production potential and high household value.", es: "Potencial de producción todo el año y alto valor doméstico.", fr: "Production potentielle toute l'année, forte valeur." },
    { en: "Daily food and market sales.", es: "Alimento diario y venta en mercado.", fr: "Alimentation quotidienne et vente." },
    { en: "High and continuous — irrigation dependent.", es: "Alta y continua — depende del riego.", fr: "Élevée et continue — dépend de l'irrigation." },
    { en: "Deep soils, wind protection matters.", es: "Suelos profundos; la protección del viento importa.", fr: "Sols profonds ; protection contre le vent." },
    { en: "Perennial cycle.", es: "Ciclo perenne.", fr: "Cycle pérenne." },
    { en: "Needs fast movement to market.", es: "Necesita salida rápida al mercado.", fr: "Exige un acheminement rapide." }),
  crop("frijol", LEG, { en: "Frijol (beans)", es: "Frijol", fr: "Haricot" },
    { en: "Protein for households and nitrogen for the soil.", es: "Proteína para los hogares y nitrógeno para el suelo.", fr: "Protéine pour les foyers, azote pour le sol." },
    { en: "Core of the Cuban plate; excellent rotation crop.", es: "Centro del plato cubano; excelente cultivo de rotación.", fr: "Cœur de l'assiette cubaine ; excellente rotation." },
    { en: "Moderate, sensitive at flowering.", es: "Moderada, sensible en floración.", fr: "Modérée, sensible à la floraison." },
    { en: "Well-drained soils, no standing water.", es: "Suelos bien drenados, sin agua estancada.", fr: "Sols drainés, sans eau stagnante." },
    { en: "Short cycle.", es: "Ciclo corto.", fr: "Cycle court." },
    { en: "Dries and stores well — a strategic advantage.", es: "Se seca y almacena bien — ventaja estratégica.", fr: "Sèche et se conserve bien — avantage stratégique." }),
  crop("maiz", LEG, { en: "Maize", es: "Maíz", fr: "Maïs" },
    { en: "Food, feed and rotation value where conditions allow.", es: "Alimento, forraje y valor de rotación donde las condiciones lo permitan.", fr: "Alimentation, fourrage et rotation." },
    { en: "Household food and animal feed.", es: "Alimento doméstico y forraje animal.", fr: "Alimentation et fourrage." },
    { en: "Moderate to high at key stages.", es: "Moderada a alta en etapas clave.", fr: "Modérée à élevée aux stades clés." },
    { en: "Fertility-demanding.", es: "Exigente en fertilidad.", fr: "Exigeant en fertilité." },
    { en: "Medium cycle.", es: "Ciclo medio.", fr: "Cycle moyen." },
    { en: "Stores well when dried properly.", es: "Se almacena bien si se seca correctamente.", fr: "Se conserve bien une fois séché." }),
  crop("tomate", VEG, { en: "Tomato", es: "Tomate", fr: "Tomate" },
    { en: "High value for households, markets and hospitality.", es: "Alto valor para hogares, mercados y hostelería.", fr: "Forte valeur pour foyers, marchés et hôtellerie." },
    { en: "Fresh sale, sauce and processing.", es: "Venta fresca, salsa y procesamiento.", fr: "Vente fraîche, sauce, transformation." },
    { en: "High and precise — drip irrigation strongly preferred.", es: "Alta y precisa — se prefiere riego por goteo.", fr: "Élevée et précise — goutte-à-goutte préférable." },
    { en: "Needs drainage and disciplined rotation.", es: "Necesita drenaje y rotación disciplinada.", fr: "Exige drainage et rotation stricte." },
    { en: "Short cycle, season-sensitive.", es: "Ciclo corto, sensible a la temporada.", fr: "Cycle court, sensible à la saison." },
    { en: "Cold chain changes everything.", es: "La cadena de frío lo cambia todo.", fr: "La chaîne du froid change tout." }),
  crop("pimiento", VEG, { en: "Pepper", es: "Pimiento / ají", fr: "Poivron" },
    { en: "Strong local and hospitality demand.", es: "Fuerte demanda local y hotelera.", fr: "Forte demande locale et hôtelière." },
    { en: "Fresh consumption and cooking base.", es: "Consumo fresco y base de cocina.", fr: "Consommation fraîche et base de cuisine." },
    { en: "Consistent moisture required.", es: "Requiere humedad constante.", fr: "Humidité constante requise." },
    { en: "Warm, well-drained soils.", es: "Suelos cálidos y bien drenados.", fr: "Sols chauds et drainés." },
    { en: "Medium cycle.", es: "Ciclo medio.", fr: "Cycle moyen." },
    { en: "Perishable — packing matters.", es: "Perecedero — el empaque importa.", fr: "Périssable — l'emballage compte." }),
  crop("cebolla", VEG, { en: "Onion", es: "Cebolla", fr: "Oignon" },
    { en: "Used daily and stores far better than most vegetables.", es: "Se usa a diario y se almacena mucho mejor que otras hortalizas.", fr: "Usage quotidien, conservation supérieure." },
    { en: "Household cooking, institutional supply.", es: "Cocina doméstica, abastecimiento institucional.", fr: "Cuisine domestique, approvisionnement." },
    { en: "Moderate, must stop before harvest.", es: "Moderada, debe cesar antes de la cosecha.", fr: "Modérée, à interrompre avant récolte." },
    { en: "Loose, well-drained soils.", es: "Suelos sueltos y bien drenados.", fr: "Sols meubles et drainés." },
    { en: "Medium cycle.", es: "Ciclo medio.", fr: "Cycle moyen." },
    { en: "Excellent storage crop with dry, ventilated space.", es: "Excelente cultivo de almacén con espacio seco y ventilado.", fr: "Excellent en stockage sec et ventilé." }),
  crop("calabaza", VEG, { en: "Squash / pumpkin", es: "Calabaza", fr: "Courge" },
    { en: "Robust, filling and forgiving.", es: "Robusta, saciante y tolerante.", fr: "Robuste, nourrissante et tolérante." },
    { en: "Household food and institutional kitchens.", es: "Alimento del hogar y cocinas institucionales.", fr: "Alimentation et cuisines collectives." },
    { en: "Moderate.", es: "Moderada.", fr: "Modérée." },
    { en: "Tolerates a range of soils with drainage.", es: "Tolera diversos suelos con drenaje.", fr: "Tolère divers sols drainés." },
    { en: "Medium cycle.", es: "Ciclo medio.", fr: "Cycle moyen." },
    { en: "Stores well — a food-security asset.", es: "Se almacena bien — un activo de seguridad alimentaria.", fr: "Se conserve bien — atout de sécurité alimentaire." }),
  crop("pepino", VEG, { en: "Cucumber", es: "Pepino", fr: "Concombre" },
    { en: "Fast cycle, good early cash flow for producers.", es: "Ciclo rápido, buen flujo de caja inicial para productores.", fr: "Cycle rapide, trésorerie initiale." },
    { en: "Fresh market and hospitality.", es: "Mercado fresco y hostelería.", fr: "Marché frais et hôtellerie." },
    { en: "High — very sensitive to water stress.", es: "Alta — muy sensible al estrés hídrico.", fr: "Élevée — très sensible au stress hydrique." },
    { en: "Fertile, drained soils.", es: "Suelos fértiles y drenados.", fr: "Sols fertiles et drainés." },
    { en: "Short cycle.", es: "Ciclo corto.", fr: "Cycle court." },
    { en: "Highly perishable.", es: "Muy perecedero.", fr: "Très périssable." }),
  crop("quimbombo", VEG, { en: "Okra", es: "Quimbombó", fr: "Gombo" },
    { en: "Heat-tolerant and culturally familiar.", es: "Tolerante al calor y culturalmente familiar.", fr: "Tolérant à la chaleur, culturellement familier." },
    { en: "Household cooking.", es: "Cocina doméstica.", fr: "Cuisine domestique." },
    { en: "Moderate.", es: "Moderada.", fr: "Modérée." },
    { en: "Warm soils, good drainage.", es: "Suelos cálidos, buen drenaje.", fr: "Sols chauds, bon drainage." },
    { en: "Short to medium cycle.", es: "Ciclo corto a medio.", fr: "Cycle court à moyen." },
    { en: "Best consumed quickly.", es: "Mejor consumirlo rápido.", fr: "À consommer rapidement." }),
  crop("hojas", VEG, { en: "Leafy vegetables", es: "Hortalizas de hoja", fr: "Légumes-feuilles" },
    { en: "Fastest route from planting to a plate.", es: "La ruta más rápida de la siembra al plato.", fr: "Le chemin le plus rapide du semis à l'assiette." },
    { en: "Local nutrition and quick production cycles.", es: "Nutrición local y ciclos productivos rápidos.", fr: "Nutrition locale, cycles rapides." },
    { en: "Frequent, light irrigation.", es: "Riego frecuente y ligero.", fr: "Irrigation fréquente et légère." },
    { en: "Fertile topsoil with organic matter.", es: "Capa superficial fértil con materia orgánica.", fr: "Couche arable fertile avec matière organique." },
    { en: "Very short cycle.", es: "Ciclo muy corto.", fr: "Cycle très court." },
    { en: "Requires cooling within hours.", es: "Requiere enfriamiento en pocas horas.", fr: "Refroidissement en quelques heures." }),
  crop("frutas", FRUIT, { en: "Selected tropical fruit", es: "Frutas tropicales seleccionadas", fr: "Fruits tropicaux sélectionnés" },
    { en: "Long-term value where conditions and water permit.", es: "Valor a largo plazo donde las condiciones y el agua lo permitan.", fr: "Valeur à long terme si conditions et eau le permettent." },
    { en: "Fresh food, processing and the Varadero hospitality market.", es: "Alimento fresco, procesamiento y el mercado hotelero de Varadero.", fr: "Aliments frais, transformation et marché hôtelier de Varadero." },
    { en: "Species-dependent; establishment years are critical.", es: "Depende de la especie; los años de establecimiento son críticos.", fr: "Selon l'espèce ; les années d'implantation sont critiques." },
    { en: "Deep soils, no salinity, secure drainage.", es: "Suelos profundos, sin salinidad, drenaje seguro.", fr: "Sols profonds, sans salinité, drainage assuré." },
    { en: "Multi-year.", es: "Plurianual.", fr: "Pluriannuel." },
    { en: "Requires packing and cold chain to travel.", es: "Requiere empaque y cadena de frío para viajar.", fr: "Nécessite emballage et chaîne du froid." }),
];

export const CROP_DISCLAIMER: T = {
  en: "Potential crop categories only. Crop selection is subject to soil, water, climate, agronomic and institutional evaluation. No planting plan is confirmed.",
  es: "Solo categorías potenciales de cultivo. La selección está sujeta a evaluación de suelo, agua, clima, agronómica e institucional. No hay plan de siembra confirmado.",
  fr: "Catégories de cultures potentielles uniquement. La sélection dépend d'évaluations du sol, de l'eau, du climat, agronomiques et institutionnelles.",
};

/** Field → family logistics chain. */
export const FOOD_CHAIN: { id: string; label: T; note: T }[] = [
  { id: "land", label: { en: "Land", es: "Tierra", fr: "Terre" }, note: { en: "Mapped, tested, prepared.", es: "Mapeada, analizada, preparada.", fr: "Cartographiée, analysée, préparée." } },
  { id: "seed", label: { en: "Seed", es: "Semilla", fr: "Semence" }, note: { en: "Selected for the zone, not for a brochure.", es: "Seleccionada para la zona, no para un folleto.", fr: "Choisie pour la zone, pas pour une brochure." } },
  { id: "cultivation", label: { en: "Cultivation", es: "Cultivo", fr: "Culture" }, note: { en: "Irrigation, nutrition, monitoring.", es: "Riego, nutrición, monitoreo.", fr: "Irrigation, nutrition, suivi." } },
  { id: "harvest", label: { en: "Harvest", es: "Cosecha", fr: "Récolte" }, note: { en: "Timing decides quality.", es: "El momento decide la calidad.", fr: "Le moment décide de la qualité." } },
  { id: "wash", label: { en: "Wash & sort", es: "Lavado y clasificación", fr: "Lavage et tri" }, note: { en: "Food safety starts here.", es: "La inocuidad comienza aquí.", fr: "La sécurité alimentaire commence ici." } },
  { id: "pack", label: { en: "Pack", es: "Empaque", fr: "Emballage" }, note: { en: "Protects everything already invested.", es: "Protege todo lo ya invertido.", fr: "Protège tout ce qui a été investi." } },
  { id: "cold", label: { en: "Cold storage", es: "Refrigeración", fr: "Chambre froide" }, note: { en: "The difference between food and loss.", es: "La diferencia entre alimento y pérdida.", fr: "La différence entre aliment et perte." } },
  { id: "transport", label: { en: "Transport", es: "Transporte", fr: "Transport" }, note: { en: "Roads, vehicles, fuel, schedules.", es: "Caminos, vehículos, combustible, horarios.", fr: "Routes, véhicules, carburant, horaires." } },
  { id: "community", label: { en: "Community", es: "Comunidad", fr: "Communauté" }, note: { en: "Families, markets, institutions, hospitality.", es: "Familias, mercados, instituciones, hostelería.", fr: "Familles, marchés, institutions, hôtellerie." } },
];

export const AGROECOLOGY_TOPICS: { id: string; title: T; body: T }[] = [
  { id: "soil-health", title: { en: "Soil health", es: "Salud del suelo", fr: "Santé des sols" }, body: { en: "Yield is a symptom. Soil is the cause. Structure, biology and organic matter are treated as project infrastructure, not as an afterthought.", es: "El rendimiento es un síntoma. El suelo es la causa. Estructura, biología y materia orgánica se tratan como infraestructura del proyecto.", fr: "Le rendement est un symptôme. Le sol en est la cause." } },
  { id: "rotation", title: { en: "Crop rotation", es: "Rotación de cultivos", fr: "Rotation des cultures" }, body: { en: "Rotation breaks pest cycles, rebuilds nitrogen with legumes and protects soil structure. Monoculture history is precisely what a diversified plan must avoid repeating.", es: "La rotación rompe ciclos de plagas, restaura nitrógeno con leguminosas y protege la estructura del suelo.", fr: "La rotation casse les cycles de ravageurs et reconstitue l'azote." } },
  { id: "organic-matter", title: { en: "Organic matter", es: "Materia orgánica", fr: "Matière organique" }, body: { en: "Every percentage point of organic matter increases water retention. In a climate with intense rain and dry periods, that is drought insurance.", es: "Cada punto porcentual de materia orgánica aumenta la retención de agua. En este clima, eso es un seguro contra la sequía.", fr: "Chaque point de matière organique augmente la rétention d'eau." } },
  { id: "compost", title: { en: "Compost", es: "Compost", fr: "Compost" }, body: { en: "Crop residue, organic waste and manure are inputs the project can produce locally instead of importing.", es: "Residuos de cultivo, desechos orgánicos y estiércol son insumos que el proyecto puede producir localmente.", fr: "Résidus, déchets organiques et fumier sont des intrants produits localement." } },
  { id: "biological", title: { en: "Biological controls", es: "Controles biológicos", fr: "Luttes biologiques" }, body: { en: "Cuba has real institutional experience in biological pest control. That knowledge is a local asset to work with, not something to import over.", es: "Cuba tiene experiencia institucional real en control biológico de plagas. Ese conocimiento es un activo local con el que trabajar.", fr: "Cuba possède une expérience institutionnelle réelle en lutte biologique." } },
  { id: "biodiversity", title: { en: "Biodiversity", es: "Biodiversidad", fr: "Biodiversité" }, body: { en: "Hedgerows, field margins and mixed plantings support pollinators and predators that reduce input dependence.", es: "Setos, márgenes de campo y siembras mixtas apoyan polinizadores y depredadores que reducen la dependencia de insumos.", fr: "Haies, marges et cultures mixtes soutiennent pollinisateurs et prédateurs." } },
  { id: "ipm", title: { en: "Integrated pest management", es: "Manejo integrado de plagas", fr: "Lutte intégrée" }, body: { en: "Monitor first, intervene second, spray last. IPM is both an environmental and an economic decision.", es: "Primero monitorear, después intervenir, fumigar al final. El MIP es una decisión ambiental y económica.", fr: "Surveiller d'abord, intervenir ensuite, traiter en dernier." } },
  { id: "water", title: { en: "Water efficiency", es: "Eficiencia del agua", fr: "Efficacité de l'eau" }, body: { en: "Drip lines, scheduling, mulching and soil cover deliver more crop per litre pumped — which also means less energy per litre.", es: "Goteo, programación, acolchado y cobertura del suelo dan más cultivo por litro bombeado — y menos energía por litro.", fr: "Goutte-à-goutte, planification et paillage : plus de récolte par litre pompé." } },
  { id: "fertilisation", title: { en: "Responsible fertilisation", es: "Fertilización responsable", fr: "Fertilisation responsable" }, body: { en: "Fertiliser applied without soil data is money placed in a hole. Test, then apply what is missing — nothing more.", es: "Fertilizar sin datos de suelo es dinero puesto en un hoyo. Analizar y aplicar solo lo que falta.", fr: "Fertiliser sans données de sol, c'est jeter de l'argent." } },
  { id: "monitoring", title: { en: "Field monitoring", es: "Monitoreo de campo", fr: "Suivi de terrain" }, body: { en: "Records make claims verifiable. Every zone, every input, every observation — documented so results can be published later.", es: "Los registros hacen verificables las afirmaciones. Cada zona, cada insumo, cada observación documentada.", fr: "Les registres rendent les affirmations vérifiables." } },
];

export const ENERGY_SYSTEMS: { id: string; label: T; note: T; phase: "day" | "night" | "both" }[] = [
  { id: "solar", label: { en: "Solar generation", es: "Generación solar", fr: "Production solaire" }, note: { en: "The only fuel that does not need to be shipped.", es: "El único combustible que no hay que enviar.", fr: "Le seul carburant qui n'a pas besoin d'être livré." }, phase: "day" },
  { id: "pumps", label: { en: "Irrigation pumps", es: "Bombas de riego", fr: "Pompes d'irrigation" }, note: { en: "The largest and most critical agricultural load.", es: "La carga agrícola más grande y crítica.", fr: "La charge agricole la plus critique." }, phase: "day" },
  { id: "cold", label: { en: "Cold storage", es: "Refrigeración", fr: "Chambre froide" }, note: { en: "Runs 24 hours. Cannot be interrupted.", es: "Funciona 24 horas. No puede interrumpirse.", fr: "Fonctionne 24 h. Sans interruption." }, phase: "both" },
  { id: "packing", label: { en: "Packing facilities", es: "Instalaciones de empaque", fr: "Installations d'emballage" }, note: { en: "Lighting, scales, washing lines and ventilation.", es: "Iluminación, básculas, líneas de lavado y ventilación.", fr: "Éclairage, balances, lavage et ventilation." }, phase: "day" },
  { id: "lighting", label: { en: "Lighting", es: "Iluminación", fr: "Éclairage" }, note: { en: "Safety for early and late field operations.", es: "Seguridad para operaciones tempranas y nocturnas.", fr: "Sécurité pour les opérations tôt et tard." }, phase: "night" },
  { id: "water", label: { en: "Water systems", es: "Sistemas de agua", fr: "Systèmes d'eau" }, note: { en: "Filtration, pressure and distribution.", es: "Filtración, presión y distribución.", fr: "Filtration, pression et distribution." }, phase: "both" },
  { id: "monitoring", label: { en: "Field monitoring", es: "Monitoreo de campo", fr: "Suivi de terrain" }, note: { en: "Sensors and records need small, constant power.", es: "Sensores y registros necesitan energía pequeña y constante.", fr: "Capteurs et registres exigent une énergie constante." }, phase: "both" },
  { id: "backup", label: { en: "Backup power", es: "Energía de respaldo", fr: "Alimentation de secours" }, note: { en: "Batteries first; generators only where unavoidable.", es: "Primero baterías; generadores solo donde sea inevitable.", fr: "Batteries d'abord ; génératrices en dernier recours." }, phase: "night" },
  { id: "efficiency", label: { en: "Energy-efficient equipment", es: "Equipos eficientes", fr: "Équipement écoénergétique" }, note: { en: "The cheapest kilowatt is the one never needed.", es: "El kilovatio más barato es el que nunca se necesita.", fr: "Le kilowatt le moins cher est celui qu'on n'utilise pas." }, phase: "both" },
];

export const TRAINING_MODULES: { id: string; title: T; note: T }[] = [
  { id: "tractor-safety", title: { en: "Tractor safety", es: "Seguridad con tractores", fr: "Sécurité des tracteurs" }, note: { en: "The first course, before any machine moves.", es: "El primer curso, antes de que se mueva cualquier máquina.", fr: "Le premier cours, avant tout démarrage." } },
  { id: "machinery", title: { en: "Machinery operation", es: "Operación de maquinaria", fr: "Conduite de machinerie" }, note: { en: "Operation, daily checks and basic maintenance.", es: "Operación, chequeos diarios y mantenimiento básico.", fr: "Conduite, vérifications et entretien de base." } },
  { id: "irrigation", title: { en: "Irrigation", es: "Riego", fr: "Irrigation" }, note: { en: "Design, scheduling, pressure and repair.", es: "Diseño, programación, presión y reparación.", fr: "Conception, planification, pression et réparation." } },
  { id: "soil", title: { en: "Soil management", es: "Manejo de suelos", fr: "Gestion des sols" }, note: { en: "Sampling, interpretation and correction.", es: "Muestreo, interpretación y corrección.", fr: "Échantillonnage, interprétation et correction." } },
  { id: "crops", title: { en: "Crop management", es: "Manejo de cultivos", fr: "Gestion des cultures" }, note: { en: "Planning, spacing, nutrition and rotation.", es: "Planificación, marco de siembra, nutrición y rotación.", fr: "Planification, densité, nutrition et rotation." } },
  { id: "compost", title: { en: "Compost", es: "Compost", fr: "Compost" }, note: { en: "Producing inputs on site.", es: "Producir insumos en el sitio.", fr: "Produire des intrants sur place." } },
  { id: "pest", title: { en: "Pest management", es: "Manejo de plagas", fr: "Gestion des ravageurs" }, note: { en: "Scouting, thresholds and biological controls.", es: "Exploración, umbrales y controles biológicos.", fr: "Dépistage, seuils et luttes biologiques." } },
  { id: "solar", title: { en: "Solar systems", es: "Sistemas solares", fr: "Systèmes solaires" }, note: { en: "Installation, safety and maintenance.", es: "Instalación, seguridad y mantenimiento.", fr: "Installation, sécurité et entretien." } },
  { id: "cold", title: { en: "Cold storage", es: "Cadena de frío", fr: "Chaîne du froid" }, note: { en: "Temperature discipline and loss prevention.", es: "Disciplina de temperatura y prevención de pérdidas.", fr: "Discipline des températures et prévention des pertes." } },
  { id: "food-handling", title: { en: "Food handling", es: "Manipulación de alimentos", fr: "Manutention alimentaire" }, note: { en: "Hygiene from field to packing.", es: "Higiene del campo al empaque.", fr: "Hygiène du champ à l'emballage." } },
  { id: "safety", title: { en: "Workplace safety", es: "Seguridad laboral", fr: "Sécurité au travail" }, note: { en: "Heat, chemicals, machinery and first response.", es: "Calor, químicos, maquinaria y primera respuesta.", fr: "Chaleur, produits, machinerie et premiers secours." } },
  { id: "management", title: { en: "Farm management", es: "Gestión agrícola", fr: "Gestion agricole" }, note: { en: "Planning, costs, labour and scheduling.", es: "Planificación, costos, mano de obra y calendarios.", fr: "Planification, coûts, main-d'œuvre et calendriers." } },
  { id: "data", title: { en: "Data collection", es: "Recolección de datos", fr: "Collecte de données" }, note: { en: "If it is not recorded, it cannot be reported.", es: "Lo que no se registra, no se puede reportar.", fr: "Ce qui n'est pas consigné ne peut être rapporté." } },
  { id: "agtech", title: { en: "Agricultural technology", es: "Tecnología agrícola", fr: "Technologie agricole" }, note: { en: "Mapping, sensors and practical field tools.", es: "Mapeo, sensores y herramientas prácticas de campo.", fr: "Cartographie, capteurs et outils de terrain." } },
];

export const PEOPLE_GROUPS: { id: string; title: T; body: T }[] = [
  { id: "cultivate", title: { en: "The people who cultivate", es: "Quienes cultivan", fr: "Ceux qui cultivent" }, body: { en: "Field workers, farmers, cooperative members. The project does not exist without them and does not intend to replace them.", es: "Obreros agrícolas, agricultores, cooperativistas. El proyecto no existe sin ellos y no pretende reemplazarlos.", fr: "Ouvriers, agriculteurs, coopérateurs. Le projet n'existe pas sans eux." } },
  { id: "repair", title: { en: "The people who repair", es: "Quienes reparan", fr: "Ceux qui réparent" }, body: { en: "Mechanics and electricians. In a context where spare parts are scarce, repair skill is production capacity.", es: "Mecánicos y electricistas. Donde escasean los repuestos, la habilidad de reparar es capacidad productiva.", fr: "Mécaniciens et électriciens : réparer, c'est produire." } },
  { id: "drive", title: { en: "The people who drive", es: "Quienes conducen", fr: "Ceux qui conduisent" }, body: { en: "Drivers and machinery operators moving inputs, people and harvests across more than 24 km of development area.", es: "Choferes y operadores que mueven insumos, personas y cosechas a lo largo de más de 24 km de área de desarrollo.", fr: "Chauffeurs et opérateurs déplaçant intrants, personnes et récoltes." } },
  { id: "design", title: { en: "The people who design", es: "Quienes diseñan", fr: "Ceux qui conçoivent" }, body: { en: "Agronomists, irrigation and energy specialists who decide what is technically possible before anything is promised.", es: "Agrónomos y especialistas en riego y energía que definen lo técnicamente posible antes de prometer nada.", fr: "Agronomes et spécialistes qui définissent le possible avant toute promesse." } },
  { id: "teach", title: { en: "The people who teach", es: "Quienes enseñan", fr: "Ceux qui enseignent" }, body: { en: "Professors, trainers and experienced producers. Knowledge transfer is a deliverable, not a side effect.", es: "Profesores, formadores y productores con experiencia. La transferencia de conocimiento es un resultado, no un efecto secundario.", fr: "Professeurs, formateurs et producteurs expérimentés." } },
  { id: "organize", title: { en: "The people who organise", es: "Quienes organizan", fr: "Ceux qui organisent" }, body: { en: "Coordinators, administrators and community organisers who turn intentions into schedules.", es: "Coordinadores, administradores y organizadores comunitarios que convierten intenciones en calendarios.", fr: "Coordinateurs et organisateurs qui transforment les intentions en calendriers." } },
  { id: "distribute", title: { en: "The people who distribute", es: "Quienes distribuyen", fr: "Ceux qui distribuent" }, body: { en: "Warehouse, cold chain and logistics workers. Food that never arrives was never food.", es: "Trabajadores de almacén, cadena de frío y logística. El alimento que no llega nunca fue alimento.", fr: "Entrepôt, chaîne du froid et logistique." } },
  { id: "document", title: { en: "The people who document", es: "Quienes documentan", fr: "Ceux qui documentent" }, body: { en: "Photographers, writers and record keepers. Transparency is produced by people, not by promises.", es: "Fotógrafos, redactores y responsables de registros. La transparencia la producen personas, no promesas.", fr: "Photographes, rédacteurs et archivistes." } },
];

export const MISSION_PILLARS: { n: string; title: T; body: T }[] = [
  { n: "01", title: { en: "Produce", es: "Producir", fr: "Produire" }, body: { en: "Increase local agricultural production on land that is currently not producing at capacity.", es: "Aumentar la producción agrícola local en tierras que hoy no producen a plena capacidad.", fr: "Augmenter la production agricole locale." } },
  { n: "02", title: { en: "Enable", es: "Habilitar", fr: "Rendre possible" }, body: { en: "Provide the infrastructure production depends on: machinery, irrigation, energy and storage.", es: "Aportar la infraestructura de la que depende la producción: maquinaria, riego, energía y almacenamiento.", fr: "Fournir l'infrastructure : machinerie, irrigation, énergie et stockage." } },
  { n: "03", title: { en: "Partner", es: "Asociarse", fr: "S'associer" }, body: { en: "Work with existing Cuban farmers, cooperatives and agricultural knowledge instead of around them.", es: "Trabajar con los agricultores, cooperativas y conocimientos agrícolas cubanos existentes, no al margen de ellos.", fr: "Travailler avec les agriculteurs et coopératives cubaines." } },
  { n: "04", title: { en: "Connect", es: "Conectar", fr: "Connecter" }, body: { en: "Link production to families, institutions, markets and the regional hospitality economy.", es: "Vincular la producción con familias, instituciones, mercados y la economía turística regional.", fr: "Relier la production aux familles, institutions et marchés." } },
];

export const POLICY_PAGES = {
  privacy: {
    title: { en: "Privacy", es: "Privacidad", fr: "Confidentialité" } as T,
    lede: { en: "What we collect, why we collect it and what we will never do with it.", es: "Qué recopilamos, por qué y qué nunca haremos con esa información.", fr: "Ce que nous collectons, pourquoi, et ce que nous ne ferons jamais." } as T,
    sections: [
      { h: { en: "What we collect", es: "Qué recopilamos", fr: "Ce que nous collectons" } as T, p: { en: "Only what you submit through a participation, partner, farmer, volunteer, contact or update form: your name, contact details, location, and the information you choose to provide about how you can participate.", es: "Solo lo que envías en un formulario de participación, socios, agricultores, voluntariado, contacto o actualizaciones: nombre, datos de contacto, ubicación y la información que decidas aportar.", fr: "Uniquement ce que vous soumettez via nos formulaires." } as T },
      { h: { en: "Why", es: "Por qué", fr: "Pourquoi" } as T, p: { en: "To contact you about the project and to organise participation. Nothing else.", es: "Para contactarte sobre el proyecto y organizar la participación. Nada más.", fr: "Pour vous contacter au sujet du projet et organiser la participation." } as T },
      { h: { en: "What we do not do", es: "Lo que no hacemos", fr: "Ce que nous ne faisons pas" } as T, p: { en: "We do not sell, rent or trade personal information. We do not publish the identity of a participant without their agreement.", es: "No vendemos, alquilamos ni intercambiamos información personal. No publicamos la identidad de un participante sin su acuerdo.", fr: "Nous ne vendons ni n'échangeons de données personnelles." } as T },
      { h: { en: "Removal", es: "Eliminación", fr: "Suppression" } as T, p: { en: "Write to the project team and your record will be removed.", es: "Escribe al equipo del proyecto y tu registro será eliminado.", fr: "Écrivez-nous et votre dossier sera supprimé." } as T },
    ],
  },
  terms: {
    title: { en: "Terms", es: "Términos", fr: "Conditions" } as T,
    lede: { en: "The conditions under which this site and this project communicate.", es: "Las condiciones bajo las cuales este sitio y este proyecto comunican.", fr: "Les conditions de communication de ce site." } as T,
    sections: [
      { h: { en: "Project stage", es: "Etapa del proyecto", fr: "Étape du projet" } as T, p: { en: "CUBAFOOD.CA is in institutional coordination and an approval process. Nothing on this site should be read as a final approval, an authorisation, a government endorsement or a guarantee of future activity.", es: "CUBAFOOD.CA está en coordinación institucional y proceso de aprobación. Nada en este sitio debe leerse como aprobación final, autorización, respaldo gubernamental ni garantía.", fr: "CUBAFOOD.CA est en coordination institutionnelle et en processus d'approbation." } as T },
      { h: { en: "No offer", es: "No es una oferta", fr: "Aucune offre" } as T, p: { en: "This site is informational. It is not an offer of employment, an investment offer or a contract.", es: "Este sitio es informativo. No es oferta de empleo, oferta de inversión ni contrato.", fr: "Ce site est informatif. Ce n'est ni une offre d'emploi ni un contrat." } as T },
      { h: { en: "Content", es: "Contenido", fr: "Contenu" } as T, p: { en: "Historical and agricultural material is presented as regional context and is sourced. Project-specific claims are labelled by status.", es: "El material histórico y agrícola se presenta como contexto regional con fuentes. Las afirmaciones del proyecto se etiquetan por estado.", fr: "Le matériel historique est présenté comme contexte régional, avec sources." } as T },
    ],
  },
  "transparency-policy": {
    title: { en: "Transparency policy", es: "Política de transparencia", fr: "Politique de transparence" } as T,
    lede: { en: "How we decide what may be published as fact.", es: "Cómo decidimos qué puede publicarse como un hecho.", fr: "Comment nous décidons ce qui peut être publié comme un fait." } as T,
    sections: [
      { h: { en: "Evidence first", es: "Primero la evidencia", fr: "La preuve d'abord" } as T, p: { en: "A number is published only when it can be traced to a document, a delivery, a receipt or a dated field record. Until then a module reads NOT YET ACTIVE.", es: "Un número se publica solo cuando puede rastrearse a un documento, entrega, recibo o registro de campo fechado. Hasta entonces el módulo dice AÚN NO ACTIVO.", fr: "Un chiffre n'est publié que s'il est traçable." } as T },
      { h: { en: "Regional context is labelled", es: "El contexto regional se etiqueta", fr: "Le contexte régional est étiqueté" } as T, p: { en: "Research about Matanzas or Cuban agriculture in general is never presented as a measurement of the project land.", es: "La investigación sobre Matanzas o la agricultura cubana nunca se presenta como una medición de la tierra del proyecto.", fr: "La recherche régionale n'est jamais présentée comme une mesure de nos terres." } as T },
      { h: { en: "Corrections", es: "Correcciones", fr: "Corrections" } as T, p: { en: "If something published here is wrong, it is corrected and the correction is visible.", es: "Si algo publicado aquí es incorrecto, se corrige y la corrección queda visible.", fr: "Toute erreur est corrigée de manière visible." } as T },
    ],
  },
  "media-policy": {
    title: { en: "Media policy", es: "Política de medios", fr: "Politique médias" } as T,
    lede: { en: "How photography and video are used on this site.", es: "Cómo se usan la fotografía y el video en este sitio.", fr: "Comment la photo et la vidéo sont utilisées." } as T,
    sections: [
      { h: { en: "Project footage", es: "Material del proyecto", fr: "Images du projet" } as T, p: { en: "Video labelled as project documentation was recorded by the project team in the development area. It is unedited field material.", es: "El video etiquetado como documentación del proyecto fue grabado por el equipo en el área de desarrollo. Es material de campo sin editar.", fr: "Les vidéos étiquetées « documentation » ont été filmées par l'équipe." } as T },
      { h: { en: "Contextual imagery", es: "Imágenes de contexto", fr: "Images contextuelles" } as T, p: { en: "Any regional or illustrative image is labelled as representative agricultural imagery. People appearing in contextual imagery are never described as project employees.", es: "Toda imagen regional o ilustrativa se etiqueta como imagen agrícola representativa. Las personas que aparecen nunca se describen como empleados del proyecto.", fr: "Toute image illustrative est étiquetée comme telle." } as T },
      { h: { en: "Consent", es: "Consentimiento", fr: "Consentement" } as T, p: { en: "Participants are identified only with their agreement.", es: "Los participantes se identifican solo con su acuerdo.", fr: "Les participants ne sont identifiés qu'avec leur accord." } as T },
    ],
  },
  "contribution-policy": {
    title: { en: "Contribution policy", es: "Política de contribuciones", fr: "Politique de contribution" } as T,
    lede: { en: "What a contribution is, and what it is not.", es: "Qué es una contribución y qué no lo es.", fr: "Ce qu'est une contribution, et ce qu'elle n'est pas." } as T,
    sections: [
      { h: { en: "Interest, not payment", es: "Interés, no pago", fr: "Intérêt, pas paiement" } as T, p: { en: "This site currently records contribution interest only. It does not process payments.", es: "Este sitio registra actualmente solo interés en contribuir. No procesa pagos.", fr: "Ce site enregistre l'intérêt à contribuer, sans traiter de paiements." } as T },
      { h: { en: "No tax claims", es: "Sin afirmaciones fiscales", fr: "Aucune allégation fiscale" } as T, p: { en: "No contribution is described as tax-deductible. No charitable tax status is claimed.", es: "Ninguna contribución se describe como deducible de impuestos. No se reclama estatus caritativo.", fr: "Aucune contribution n'est présentée comme déductible d'impôt." } as T },
      { h: { en: "Documentation", es: "Documentación", fr: "Documentation" } as T, p: { en: "Equipment and material contributions will be listed with status once they exist: identified, offered, sponsored, in transit, delivered, in service.", es: "Las contribuciones de equipos y materiales se listarán con su estado cuando existan.", fr: "Les contributions matérielles seront listées avec leur statut." } as T },
    ],
  },
} as const;

export type PolicySlug = keyof typeof POLICY_PAGES;
