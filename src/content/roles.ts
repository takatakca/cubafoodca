import type { T } from "@/i18n";

export type Role = { id: string; label: T; note: T };

const r = (id: string, label: T, note: T): Role => ({ id, label, note });

/** Participation pathways for people in Cuba. */
export const CUBA_ROLES: Role[] = [
  r("agricultural-worker", { en: "Agricultural worker", es: "Obrero agrícola", fr: "Ouvrier agricole" }, { en: "Field work, planting, cultivation and harvest.", es: "Trabajo de campo, siembra, cultivo y cosecha.", fr: "Travail au champ, semis, culture et récolte." }),
  r("farmer", { en: "Farmer", es: "Agricultor / productor", fr: "Agriculteur" }, { en: "Independent producers and cooperative members.", es: "Productores independientes y miembros de cooperativas.", fr: "Producteurs indépendants et membres de coopératives." }),
  r("agronomist", { en: "Agronomist", es: "Agrónomo", fr: "Agronome" }, { en: "Crop planning, soil management and technical direction.", es: "Planificación de cultivos, manejo de suelos y dirección técnica.", fr: "Planification des cultures, gestion des sols et direction technique." }),
  r("veterinarian", { en: "Veterinarian", es: "Veterinario", fr: "Vétérinaire" }, { en: "Animal health where livestock activity applies.", es: "Salud animal donde aplique la actividad ganadera.", fr: "Santé animale lorsque l'élevage s'applique." }),
  r("tractor-operator", { en: "Tractor operator", es: "Operador de tractor", fr: "Opérateur de tracteur" }, { en: "Land preparation and mechanized field work.", es: "Preparación de tierras y trabajo mecanizado.", fr: "Préparation des terres et travaux mécanisés." }),
  r("mechanic", { en: "Mechanic", es: "Mecánico", fr: "Mécanicien" }, { en: "Keeping machinery running is a full-time job.", es: "Mantener la maquinaria funcionando es un trabajo a tiempo completo.", fr: "Maintenir la machinerie en marche est un travail à temps plein." }),
  r("electrician", { en: "Electrician", es: "Electricista", fr: "Électricien" }, { en: "Pumps, buildings, cold storage and solar systems.", es: "Bombas, edificaciones, refrigeración y sistemas solares.", fr: "Pompes, bâtiments, chambres froides et solaire." }),
  r("irrigation", { en: "Irrigation specialist", es: "Especialista en riego", fr: "Spécialiste en irrigation" }, { en: "Water is the first infrastructure priority.", es: "El agua es la primera prioridad de infraestructura.", fr: "L'eau est la première priorité d'infrastructure." }),
  r("construction", { en: "Construction worker", es: "Constructor", fr: "Travailleur de la construction" }, { en: "Warehouses, water systems and agricultural buildings.", es: "Almacenes, sistemas de agua y edificaciones agrícolas.", fr: "Entrepôts, systèmes d'eau et bâtiments agricoles." }),
  r("driver", { en: "Driver", es: "Chofer", fr: "Chauffeur" }, { en: "Moving people, inputs and produce.", es: "Mover personas, insumos y productos.", fr: "Déplacer personnes, intrants et produits." }),
  r("logistics", { en: "Warehouse / logistics", es: "Almacén / logística", fr: "Entrepôt / logistique" }, { en: "Receiving, storing and dispatching.", es: "Recepción, almacenamiento y despacho.", fr: "Réception, stockage et expédition." }),
  r("student", { en: "Student", es: "Estudiante", fr: "Étudiant" }, { en: "Internships, research and field learning.", es: "Pasantías, investigación y aprendizaje en campo.", fr: "Stages, recherche et apprentissage terrain." }),
  r("cooperative", { en: "Cooperative", es: "Cooperativa", fr: "Coopérative" }, { en: "Collective collaboration and shared production.", es: "Colaboración colectiva y producción compartida.", fr: "Collaboration collective et production partagée." }),
  r("supplier", { en: "Supplier", es: "Proveedor", fr: "Fournisseur" }, { en: "Local goods, services and agricultural inputs.", es: "Bienes, servicios e insumos agrícolas locales.", fr: "Biens, services et intrants agricoles locaux." }),
  r("community-volunteer", { en: "Community volunteer", es: "Voluntario comunitario", fr: "Bénévole communautaire" }, { en: "Community organization and food support.", es: "Organización comunitaria y apoyo alimentario.", fr: "Organisation communautaire et soutien alimentaire." }),
  r("administrative", { en: "Administrative support", es: "Apoyo administrativo", fr: "Soutien administratif" }, { en: "Records, coordination and communications.", es: "Registros, coordinación y comunicaciones.", fr: "Registres, coordination et communications." }),
];

/** Jobs agricultural development creates beyond farming itself. */
export const EMPLOYMENT_ROLES: T[] = [
  { en: "Agricultural workers", es: "Obreros agrícolas", fr: "Ouvriers agricoles" },
  { en: "Machinery operators", es: "Operadores de maquinaria", fr: "Opérateurs de machinerie" },
  { en: "Irrigation technicians", es: "Técnicos de riego", fr: "Techniciens en irrigation" },
  { en: "Electricians", es: "Electricistas", fr: "Électriciens" },
  { en: "Mechanics", es: "Mecánicos", fr: "Mécaniciens" },
  { en: "Drivers", es: "Choferes", fr: "Chauffeurs" },
  { en: "Warehouse workers", es: "Almaceneros", fr: "Magasiniers" },
  { en: "Administrators", es: "Administradores", fr: "Administrateurs" },
  { en: "Agronomists", es: "Agrónomos", fr: "Agronomes" },
  { en: "Veterinarians", es: "Veterinarios", fr: "Vétérinaires" },
  { en: "Security", es: "Seguridad", fr: "Sécurité" },
  { en: "Food handling", es: "Manipulación de alimentos", fr: "Manutention alimentaire" },
  { en: "Transportation", es: "Transporte", fr: "Transport" },
  { en: "Construction", es: "Construcción", fr: "Construction" },
  { en: "Maintenance", es: "Mantenimiento", fr: "Entretien" },
  { en: "Logistics", es: "Logística", fr: "Logistique" },
  { en: "Communications", es: "Comunicaciones", fr: "Communications" },
  { en: "Community coordination", es: "Coordinación comunitaria", fr: "Coordination communautaire" },
];

export const CANADA_CATEGORIES: Role[] = [
  r("canadian-farmers", { en: "Canadian farmers", es: "Agricultores canadienses", fr: "Agriculteurs canadiens" }, { en: "Share agricultural knowledge.", es: "Compartir conocimiento agrícola.", fr: "Partager le savoir agricole." }),
  r("ag-business", { en: "Agricultural businesses", es: "Empresas agrícolas", fr: "Entreprises agricoles" }, { en: "Provide technology, equipment or expertise.", es: "Aportar tecnología, equipos o experiencia.", fr: "Fournir technologie, équipement ou expertise." }),
  r("equipment-owners", { en: "Equipment owners", es: "Propietarios de equipos", fr: "Propriétaires d'équipement" }, { en: "Offer usable agricultural machinery and tools.", es: "Ofrecer maquinaria y herramientas agrícolas utilizables.", fr: "Offrir de la machinerie et des outils utilisables." }),
  r("logistics-companies", { en: "Logistics companies", es: "Empresas de logística", fr: "Entreprises de logistique" }, { en: "Help move resources.", es: "Ayudar a mover recursos.", fr: "Aider à déplacer les ressources." }),
  r("renewable-energy", { en: "Renewable energy companies", es: "Empresas de energía renovable", fr: "Entreprises d'énergie renouvelable" }, { en: "Help develop agricultural energy solutions.", es: "Ayudar a desarrollar soluciones energéticas agrícolas.", fr: "Développer des solutions énergétiques agricoles." }),
  r("universities", { en: "Universities & students", es: "Universidades y estudiantes", fr: "Universités et étudiants" }, { en: "Research, education and knowledge exchange.", es: "Investigación, educación e intercambio de conocimiento.", fr: "Recherche, éducation et échange de savoir." }),
  r("cuban-canadian", { en: "Cuban-Canadian community", es: "Comunidad cubano-canadiense", fr: "Communauté cubano-canadienne" }, { en: "Become a bridge between both countries.", es: "Ser un puente entre ambos países.", fr: "Devenir un pont entre les deux pays." }),
  r("volunteers", { en: "Volunteers", es: "Voluntarios", fr: "Bénévoles" }, { en: "Contribute expertise or time.", es: "Aportar experiencia o tiempo.", fr: "Offrir expertise ou temps." }),
  r("food-contributors", { en: "Food contributors", es: "Contribuyentes de alimentos", fr: "Contributeurs alimentaires" }, { en: "Support community assistance initiatives.", es: "Apoyar iniciativas de asistencia comunitaria.", fr: "Soutenir les initiatives d'aide communautaire." }),
  r("corporate", { en: "Corporate partners", es: "Socios corporativos", fr: "Partenaires corporatifs" }, { en: "Sponsor specific verified needs.", es: "Patrocinar necesidades verificadas específicas.", fr: "Parrainer des besoins vérifiés précis." }),
];

export const VOLUNTEER_BLOCKS: Role[] = [
  r("field-work", { en: "Field work", es: "Trabajo de campo", fr: "Travail de terrain" }, { en: "People willing to help prepare agricultural areas.", es: "Personas dispuestas a ayudar a preparar áreas agrícolas.", fr: "Personnes prêtes à préparer les zones agricoles." }),
  r("knowledge", { en: "Agricultural knowledge", es: "Conocimiento agrícola", fr: "Savoir agricole" }, { en: "Experienced farmers and specialists.", es: "Agricultores y especialistas con experiencia.", fr: "Agriculteurs et spécialistes expérimentés." }),
  r("machinery", { en: "Machinery", es: "Maquinaria", fr: "Machinerie" }, { en: "Operators and mechanics.", es: "Operadores y mecánicos.", fr: "Opérateurs et mécaniciens." }),
  r("water", { en: "Water", es: "Agua", fr: "Eau" }, { en: "Irrigation specialists.", es: "Especialistas en riego.", fr: "Spécialistes en irrigation." }),
  r("energy", { en: "Energy", es: "Energía", fr: "Énergie" }, { en: "Solar and electrical specialists.", es: "Especialistas solares y eléctricos.", fr: "Spécialistes solaires et électriques." }),
  r("construction", { en: "Construction", es: "Construcción", fr: "Construction" }, { en: "People capable of helping develop agricultural infrastructure.", es: "Personas capaces de ayudar a desarrollar infraestructura agrícola.", fr: "Personnes capables de bâtir l'infrastructure agricole." }),
  r("logistics", { en: "Logistics", es: "Logística", fr: "Logistique" }, { en: "Transportation, warehousing and coordination.", es: "Transporte, almacenamiento y coordinación.", fr: "Transport, entreposage et coordination." }),
  r("media", { en: "Media", es: "Medios", fr: "Médias" }, { en: "Photography, documentary and communications.", es: "Fotografía, documental y comunicaciones.", fr: "Photographie, documentaire et communications." }),
  r("community", { en: "Community", es: "Comunidad", fr: "Communauté" }, { en: "People helping organize food distribution and community initiatives.", es: "Personas que ayudan a organizar la distribución de alimentos e iniciativas comunitarias.", fr: "Personnes aidant à organiser la distribution alimentaire." }),
  r("education", { en: "Education", es: "Educación", fr: "Éducation" }, { en: "Agronomists, professors and trainers.", es: "Agrónomos, profesores y formadores.", fr: "Agronomes, professeurs et formateurs." }),
];

export const FARMER_REQUESTS: T[] = [
  { en: "Tools", es: "Herramientas", fr: "Outils" },
  { en: "Seeds", es: "Semillas", fr: "Semences" },
  { en: "Equipment", es: "Equipos", fr: "Équipement" },
  { en: "Technical support", es: "Apoyo técnico", fr: "Soutien technique" },
  { en: "Training", es: "Capacitación", fr: "Formation" },
  { en: "Transportation", es: "Transporte", fr: "Transport" },
  { en: "Irrigation", es: "Riego", fr: "Irrigation" },
  { en: "Production partnership", es: "Alianza productiva", fr: "Partenariat de production" },
  { en: "Community project", es: "Proyecto comunitario", fr: "Projet communautaire" },
];

export const COMPANY_CONTRIBUTIONS: T[] = [
  { en: "Equipment", es: "Equipos", fr: "Équipement" },
  { en: "Agricultural supplies", es: "Insumos agrícolas", fr: "Fournitures agricoles" },
  { en: "Seeds", es: "Semillas", fr: "Semences" },
  { en: "Irrigation", es: "Riego", fr: "Irrigation" },
  { en: "Renewable energy", es: "Energía renovable", fr: "Énergie renouvelable" },
  { en: "Transportation", es: "Transporte", fr: "Transport" },
  { en: "Refrigeration", es: "Refrigeración", fr: "Réfrigération" },
  { en: "Warehousing", es: "Almacenamiento", fr: "Entreposage" },
  { en: "Expertise", es: "Experiencia", fr: "Expertise" },
  { en: "Education", es: "Educación", fr: "Éducation" },
  { en: "Financial partnership", es: "Alianza financiera", fr: "Partenariat financier" },
  { en: "Food", es: "Alimentos", fr: "Nourriture" },
  { en: "Logistics", es: "Logística", fr: "Logistique" },
  { en: "Other", es: "Otro", fr: "Autre" },
];

export const CUBAN_PROVINCES = [
  "Pinar del Río",
  "Artemisa",
  "La Habana",
  "Mayabeque",
  "Matanzas",
  "Cienfuegos",
  "Villa Clara",
  "Sancti Spíritus",
  "Ciego de Ávila",
  "Camagüey",
  "Las Tunas",
  "Holguín",
  "Granma",
  "Santiago de Cuba",
  "Guantánamo",
  "Isla de la Juventud",
];

export const CANADIAN_PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Québec",
  "Saskatchewan",
  "Yukon",
];
