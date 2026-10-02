import type { T } from "@/i18n";

export const SITE = {
  name: "CUBAFOOD.CA",
  tagline: { en: "Cultivando Cuba. Juntos.", es: "Cultivando Cuba. Juntos.", fr: "Cultivando Cuba. Juntos." } as T,
  subline: {
    en: "Growing more than food.",
    es: "Cultivando más que alimentos.",
    fr: "Cultiver plus que de la nourriture.",
  } as T,
  established: "2024",
  location: {
    en: "Matanzas, Cuba — Varadero airport area",
    es: "Matanzas, Cuba — zona del aeropuerto de Varadero",
    fr: "Matanzas, Cuba — secteur de l'aéroport de Varadero",
  } as T,
  landScale: {
    en: "More than 24 kilometres of project land and agricultural development area.",
    es: "Más de 24 kilómetros de terreno y área de desarrollo agrícola del proyecto.",
    fr: "Plus de 24 kilomètres de terrain et de zone de développement agricole du projet.",
  } as T,
  mission: {
    en: "Produce legumes, vegetables and other agricultural crops to increase agricultural production and contribute to Cuba's objectives related to Food Sovereignty and Nutritional Security, providing high-quality agricultural products and added value for the population and tourism sector.",
    es: "Producir legumbres, hortalizas y otros cultivos agrícolas para incrementar la producción agrícola y contribuir a los objetivos de Cuba relacionados con la Soberanía Alimentaria y la Seguridad Nutricional, aportando productos agrícolas de alta calidad y valor agregado para la población y el sector turístico.",
    fr: "Produire des légumineuses, des légumes et d'autres cultures agricoles afin d'augmenter la production agricole et de contribuer aux objectifs de Cuba en matière de souveraineté alimentaire et de sécurité nutritionnelle, en fournissant des produits agricoles de haute qualité et à valeur ajoutée pour la population et le secteur touristique.",
  } as T,
  statusLine: {
    en: "The project team has been working through the required coordination and approval process with the relevant Cuban agricultural authorities.",
    es: "El equipo del proyecto ha estado avanzando en el proceso de coordinación y aprobación requerido con las autoridades agrícolas cubanas correspondientes.",
    fr: "L'équipe du projet poursuit le processus de coordination et d'approbation requis auprès des autorités agricoles cubaines concernées.",
  } as T,
  locationLine: {
    en: "Located in the Matanzas region near the Varadero airport area, the project has strategic access to transportation, local communities, agricultural networks and one of Cuba's most important tourism regions.",
    es: "Ubicado en la región de Matanzas, cerca de la zona del aeropuerto de Varadero, el proyecto tiene acceso estratégico al transporte, las comunidades locales, las redes agrícolas y una de las regiones turísticas más importantes de Cuba.",
    fr: "Situé dans la région de Matanzas, près du secteur de l'aéroport de Varadero, le projet bénéficie d'un accès stratégique au transport, aux communautés locales, aux réseaux agricoles et à l'une des plus importantes régions touristiques de Cuba.",
  } as T,
} as const;

export const CORE_CTA = {
  headline: {
    en: "This project needs more than support. It needs participation.",
    es: "Este proyecto necesita más que apoyo. Necesita participación.",
    fr: "Ce projet a besoin de plus que du soutien. Il a besoin de participation.",
  } as T,
  verbs: [
    { en: "Work with us", es: "Trabaja con nosotros", fr: "Travaillez avec nous" },
    { en: "Farm with us", es: "Cultiva con nosotros", fr: "Cultivez avec nous" },
    { en: "Build with us", es: "Construye con nosotros", fr: "Bâtissez avec nous" },
    { en: "Teach with us", es: "Enseña con nosotros", fr: "Enseignez avec nous" },
    { en: "Supply us", es: "Abastécenos", fr: "Approvisionnez-nous" },
    { en: "Partner with us", es: "Asóciate con nosotros", fr: "Devenez partenaire" },
    { en: "Help from Canada", es: "Ayuda desde Canadá", fr: "Aidez depuis le Canada" },
  ] as T[],
};

export const UI = {
  join: { en: "Join the project", es: "Únete al proyecto", fr: "Rejoindre le projet" } as T,
  seeProject: { en: "See the project", es: "Ver el proyecto", fr: "Voir le projet" } as T,
  iCanHelp: { en: "I can help", es: "Puedo ayudar", fr: "Je peux aider" } as T,
  whatsapp: {
    en: "Talk to the project team on WhatsApp",
    es: "Habla con el equipo del proyecto por WhatsApp",
    fr: "Parlez à l'équipe du projet sur WhatsApp",
  } as T,
  email: { en: "Email the project team", es: "Escribe al equipo del proyecto", fr: "Écrire à l'équipe du projet" } as T,
  inCuba: { en: "I am in Cuba", es: "Estoy en Cuba", fr: "Je suis à Cuba" } as T,
  inCanada: { en: "I am in Canada", es: "Estoy en Canadá", fr: "Je suis au Canada" } as T,
  aFarmer: { en: "I am a farmer", es: "Soy agricultor", fr: "Je suis agriculteur" } as T,
  aCompany: { en: "I represent a company", es: "Represento una empresa", fr: "Je représente une entreprise" } as T,
  noData: {
    en: "Reporting begins with active operations.",
    es: "Los reportes comenzarán con las operaciones activas.",
    fr: "Les rapports débuteront avec les opérations actives.",
  } as T,
};

export type NavItem = { to: string; label: T };

export const PRIMARY_NAV: NavItem[] = [
  { to: "/project", label: { en: "Project", es: "Proyecto", fr: "Projet" } },
  { to: "/land", label: { en: "The land", es: "La tierra", fr: "La terre" } },
  { to: "/agriculture", label: { en: "Agriculture", es: "Agricultura", fr: "Agriculture" } },
  { to: "/farmers", label: { en: "Farmers", es: "Agricultores", fr: "Agriculteurs" } },
  { to: "/participate", label: { en: "Participate", es: "Participar", fr: "Participer" } },
  { to: "/journal", label: { en: "Field journal", es: "Diario del campo", fr: "Journal de terrain" } },
  { to: "/videos", label: { en: "Videos", es: "Videos", fr: "Vidéos" } },
  { to: "/transparency", label: { en: "Transparency", es: "Transparencia", fr: "Transparence" } },
];

export const SECONDARY_NAV: { group: T; items: NavItem[] }[] = [
  {
    group: { en: "Agriculture", es: "Agricultura", fr: "Agriculture" },
    items: [
      { to: "/agriculture", label: { en: "Agricultural production", es: "Producción agrícola", fr: "Production agricole" } },
      { to: "/agroecology", label: { en: "Agroecology", es: "Agroecología", fr: "Agroécologie" } },
      { to: "/energy", label: { en: "Renewable energy", es: "Energía renovable", fr: "Énergie renouvelable" } },
      { to: "/needs", label: { en: "Equipment needs", es: "Necesidades de equipos", fr: "Besoins en équipement" } },
    ],
  },
  {
    group: { en: "People", es: "Personas", fr: "Personnes" },
    items: [
      { to: "/cuba", label: { en: "Cuba", es: "Cuba", fr: "Cuba" } },
      { to: "/canada", label: { en: "Canada", es: "Canadá", fr: "Canada" } },
      { to: "/volunteer", label: { en: "Volunteer", es: "Voluntariado", fr: "Bénévolat" } },
      { to: "/people", label: { en: "People of CUBAFOOD", es: "Gente de CUBAFOOD", fr: "Les gens de CUBAFOOD" } },
    ],
  },
  {
    group: { en: "Network", es: "Red", fr: "Réseau" },
    items: [
      { to: "/collaboration", label: { en: "Organizations", es: "Organizaciones", fr: "Organisations" } },
      { to: "/training", label: { en: "Training", es: "Formación", fr: "Formation" } },
      { to: "/partners", label: { en: "Partners", es: "Socios", fr: "Partenaires" } },
      { to: "/food-for-families", label: { en: "Food for families", es: "Del campo a la familia", fr: "Du champ à la famille" } },
    ],
  },
  {
    group: { en: "Locations", es: "Ubicaciones", fr: "Emplacements" },
    items: [
      { to: "/locations/matanzas", label: { en: "Matanzas", es: "Matanzas", fr: "Matanzas" } },
      { to: "/locations/jaguey-grande", label: { en: "Jagüey Grande", es: "Jagüey Grande", fr: "Jagüey Grande" } },
      { to: "/timeline", label: { en: "Timeline", es: "Cronología", fr: "Chronologie" } },
      { to: "/reports", label: { en: "Reports", es: "Informes", fr: "Rapports" } },
    ],
  },
];
