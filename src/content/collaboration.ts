import type { Institution } from "./types";

export const INSTITUTIONS: Institution[] = [
  {
    id: "universities",
    name: "University partners",
    kind: { en: "Academic", es: "Académico", fr: "Universitaire" },
    role: {
      en: "Academic collaboration in agronomy, agricultural innovation, environmental management, renewable energy and agricultural research.",
      es: "Colaboración académica en agronomía, innovación agrícola, gestión ambiental, energía renovable e investigación agrícola.",
      fr: "Collaboration universitaire en agronomie, innovation agricole, gestion environnementale, énergie renouvelable et recherche agricole.",
    },
    participate: {
      en: "Research projects, internships, student participation, field studies, joint training programs.",
      es: "Proyectos de investigación, pasantías, participación estudiantil, estudios de campo y programas de formación conjuntos.",
      fr: "Projets de recherche, stages, participation étudiante, études de terrain et programmes de formation conjoints.",
    },
    supportFromProject: {
      en: "Field access for study, real agricultural data, practical placements and documented project results.",
      es: "Acceso al campo para estudios, datos agrícolas reales, prácticas y resultados documentados del proyecto.",
      fr: "Accès au terrain pour les études, données agricoles réelles, stages pratiques et résultats documentés.",
    },
    learnFrom: {
      en: "Scientific method, soil and crop science, environmental management and rigorous measurement.",
      es: "Método científico, ciencia de suelos y cultivos, gestión ambiental y medición rigurosa.",
      fr: "Méthode scientifique, science des sols et des cultures, gestion environnementale et mesure rigoureuse.",
    },
    status: "IDENTIFIED",
    programs: [
      { en: "Agricultural education & knowledge", es: "Educación y conocimiento agrícola", fr: "Éducation et savoir agricoles" },
      { en: "Agroecology", es: "Agroecología", fr: "Agroécologie" },
    ],
  },
  {
    id: "minag-school",
    name: "MINAG Branch School",
    kind: { en: "Agricultural training", es: "Formación agrícola", fr: "Formation agricole" },
    role: {
      en: "Coordination with the agricultural training structure of MINAG for worker development and agricultural capacity building.",
      es: "Coordinación con la estructura de capacitación agrícola del MINAG para el desarrollo de trabajadores y la creación de capacidades agrícolas.",
      fr: "Coordination avec la structure de formation agricole du MINAG pour le développement des travailleurs et le renforcement des capacités.",
    },
    participate: {
      en: "Courses, workshops and seminars for project workers and surrounding agricultural communities.",
      es: "Cursos, talleres y seminarios para los trabajadores del proyecto y las comunidades agrícolas cercanas.",
      fr: "Cours, ateliers et séminaires pour les travailleurs du projet et les communautés agricoles voisines.",
    },
    supportFromProject: {
      en: "Training locations, practical field work, equipment exposure and employment pathways for graduates.",
      es: "Espacios de formación, trabajo práctico en campo, contacto con equipos y vías de empleo para egresados.",
      fr: "Lieux de formation, travail pratique, accès aux équipements et débouchés d'emploi pour les diplômés.",
    },
    learnFrom: {
      en: "National agricultural standards, Cuban training methodology and local crop expertise.",
      es: "Normas agrícolas nacionales, metodología cubana de formación y experiencia en cultivos locales.",
      fr: "Normes agricoles nationales, méthodologie de formation cubaine et expertise des cultures locales.",
    },
    status: "IDENTIFIED",
    programs: [{ en: "Training programs", es: "Programas de formación", fr: "Programmes de formation" }],
  },
  {
    id: "actaf",
    name: "ACTAF",
    kind: {
      en: "Agricultural & forestry technical association",
      es: "Asociación técnica agrícola y forestal",
      fr: "Association technique agricole et forestière",
    },
    role: {
      en: "Potential role in agricultural and forestry techniques, sustainable farming practices and technical knowledge transfer.",
      es: "Posible papel en técnicas agrícolas y forestales, prácticas sostenibles y transferencia de conocimiento técnico.",
      fr: "Rôle potentiel en techniques agricoles et forestières, pratiques durables et transfert de savoir technique.",
    },
    participate: {
      en: "Technical advisory, workshops, agroecological practice guidance and producer networks.",
      es: "Asesoría técnica, talleres, orientación en prácticas agroecológicas y redes de productores.",
      fr: "Conseil technique, ateliers, orientation agroécologique et réseaux de producteurs.",
    },
    supportFromProject: {
      en: "A large working field for demonstration, documented results and access to Canadian technical partners.",
      es: "Un amplio campo de trabajo para demostración, resultados documentados y acceso a socios técnicos canadienses.",
      fr: "Un vaste terrain de démonstration, des résultats documentés et un accès à des partenaires techniques canadiens.",
    },
    learnFrom: {
      en: "Proven low-input techniques adapted to Cuban soil, climate and resource conditions.",
      es: "Técnicas probadas de bajos insumos adaptadas al suelo, clima y condiciones de recursos de Cuba.",
      fr: "Techniques éprouvées à faibles intrants adaptées au sol, au climat et aux ressources de Cuba.",
    },
    status: "IDENTIFIED",
    programs: [{ en: "Agroecology", es: "Agroecología", fr: "Agroécologie" }],
  },
  {
    id: "acmv",
    name: "ACMV",
    kind: { en: "Veterinary sciences", es: "Ciencias veterinarias", fr: "Sciences vétérinaires" },
    role: {
      en: "Potential areas include veterinary knowledge, animal health expertise and agricultural support where applicable.",
      es: "Las áreas posibles incluyen conocimiento veterinario, salud animal y apoyo agrícola cuando corresponda.",
      fr: "Domaines possibles : savoir vétérinaire, santé animale et soutien agricole le cas échéant.",
    },
    participate: {
      en: "Animal health guidance, sanitary standards and training where livestock activity is relevant.",
      es: "Orientación en salud animal, normas sanitarias y formación donde la actividad ganadera sea relevante.",
      fr: "Orientation en santé animale, normes sanitaires et formation lorsque l'élevage est pertinent.",
    },
    supportFromProject: {
      en: "Field collaboration, logistics support and documentation of practical outcomes.",
      es: "Colaboración en campo, apoyo logístico y documentación de resultados prácticos.",
      fr: "Collaboration sur le terrain, soutien logistique et documentation des résultats.",
    },
    learnFrom: {
      en: "Veterinary and sanitary practice within the Cuban agricultural context.",
      es: "Práctica veterinaria y sanitaria en el contexto agrícola cubano.",
      fr: "Pratique vétérinaire et sanitaire dans le contexte agricole cubain.",
    },
    status: "IDENTIFIED",
    programs: [{ en: "Training programs", es: "Programas de formación", fr: "Programmes de formation" }],
  },
  {
    id: "acpa",
    name: "ACPA",
    kind: { en: "Animal production", es: "Producción animal", fr: "Production animale" },
    role: {
      en: "Potential cooperation involving sustainable livestock and agricultural production and producer development where relevant.",
      es: "Posible cooperación en producción ganadera y agrícola sostenible y desarrollo de productores cuando sea pertinente.",
      fr: "Coopération possible en production animale et agricole durable et en développement des producteurs.",
    },
    participate: {
      en: "Producer development programs, sustainable production methods and community producer networks.",
      es: "Programas de desarrollo de productores, métodos sostenibles y redes comunitarias de productores.",
      fr: "Programmes de développement des producteurs, méthodes durables et réseaux communautaires.",
    },
    supportFromProject: {
      en: "Access to project infrastructure, inputs coordination and shared logistics.",
      es: "Acceso a la infraestructura del proyecto, coordinación de insumos y logística compartida.",
      fr: "Accès aux infrastructures du projet, coordination des intrants et logistique partagée.",
    },
    learnFrom: {
      en: "Producer organization models and sustainable production experience.",
      es: "Modelos de organización de productores y experiencia en producción sostenible.",
      fr: "Modèles d'organisation des producteurs et expérience en production durable.",
    },
    status: "IDENTIFIED",
    programs: [{ en: "Productive partnerships", es: "Encadenamientos productivos", fr: "Partenariats productifs" }],
  },
  {
    id: "fibras",
    name: "Empresa de Fibras Naturales",
    kind: { en: "Natural fibres", es: "Fibras naturales", fr: "Fibres naturelles" },
    role: {
      en: "The project intends to explore assistance and contractual arrangements that can contribute to the development and strengthening of natural-fibre production plans.",
      es: "El proyecto pretende explorar asistencia y arreglos contractuales que contribuyan al desarrollo y fortalecimiento de los planes de producción de fibras naturales.",
      fr: "Le projet souhaite explorer une assistance et des ententes contractuelles pouvant renforcer les plans de production de fibres naturelles.",
    },
    participate: {
      en: "Joint production planning, cultivation areas, processing support and materials development.",
      es: "Planificación conjunta de producción, áreas de cultivo, apoyo al procesamiento y desarrollo de materiales.",
      fr: "Planification conjointe, zones de culture, soutien à la transformation et développement de matériaux.",
    },
    supportFromProject: {
      en: "Land capacity, machinery access, logistics and Canadian materials-industry connections.",
      es: "Capacidad de tierra, acceso a maquinaria, logística y conexiones con la industria canadiense de materiales.",
      fr: "Capacité foncière, accès à la machinerie, logistique et liens avec l'industrie canadienne des matériaux.",
    },
    learnFrom: {
      en: "Fibre agronomy, processing requirements and national production planning.",
      es: "Agronomía de fibras, requisitos de procesamiento y planificación nacional de producción.",
      fr: "Agronomie des fibres, exigences de transformation et planification nationale.",
    },
    status: "PROPOSED",
    programs: [{ en: "Agriculture beyond food", es: "Agricultura más allá de los alimentos", fr: "L'agriculture au-delà de l'alimentation" }],
  },
  {
    id: "cooperatives",
    name: "Agricultural cooperatives",
    kind: { en: "Cooperatives", es: "Cooperativas", fr: "Coopératives" },
    role: {
      en: "Productive linkages with cooperatives working land near the project area.",
      es: "Encadenamientos productivos con cooperativas que trabajan tierras cercanas al proyecto.",
      fr: "Liens productifs avec les coopératives cultivant des terres proches du projet.",
    },
    participate: {
      en: "Shared machinery, joint planting plans, input access, transport and combined market delivery.",
      es: "Maquinaria compartida, planes de siembra conjuntos, acceso a insumos, transporte y entrega combinada al mercado.",
      fr: "Machinerie partagée, plans de semis conjoints, accès aux intrants, transport et livraison groupée.",
    },
    supportFromProject: {
      en: "Equipment access, irrigation, storage, refrigeration, training and market connections.",
      es: "Acceso a equipos, riego, almacenamiento, refrigeración, capacitación y conexiones de mercado.",
      fr: "Accès aux équipements, irrigation, stockage, réfrigération, formation et débouchés.",
    },
    learnFrom: {
      en: "Local crop calendars, soil behaviour and decades of practical field experience.",
      es: "Calendarios locales de cultivo, comportamiento del suelo y décadas de experiencia práctica.",
      fr: "Calendriers culturaux locaux, comportement des sols et décennies d'expérience pratique.",
    },
    status: "IN_DISCUSSION",
    programs: [{ en: "Farmer collaboration", es: "Colaboración con agricultores", fr: "Collaboration avec les agriculteurs" }],
  },
  {
    id: "farmers",
    name: "Local farmers",
    kind: { en: "Producers", es: "Productores", fr: "Producteurs" },
    role: {
      en: "Farmers are partners, not competitors. Independent producers around the project area are central to the plan.",
      es: "Los agricultores son socios, no competidores. Los productores independientes de la zona son centrales en el plan.",
      fr: "Les agriculteurs sont des partenaires, pas des concurrents. Les producteurs indépendants sont au cœur du plan.",
    },
    participate: {
      en: "Register a farm, request collaboration, join production partnerships and shared logistics.",
      es: "Registrar una finca, solicitar colaboración, integrarse a alianzas productivas y logística compartida.",
      fr: "Inscrire une ferme, demander une collaboration, rejoindre des partenariats de production.",
    },
    supportFromProject: {
      en: "Seeds, tools, machinery access, irrigation, inputs, storage, transport, refrigeration and training.",
      es: "Semillas, herramientas, acceso a maquinaria, riego, insumos, almacenamiento, transporte, refrigeración y capacitación.",
      fr: "Semences, outils, accès à la machinerie, irrigation, intrants, stockage, transport, réfrigération et formation.",
    },
    learnFrom: {
      en: "Everything about growing on this land — the knowledge no outside partner can bring.",
      es: "Todo sobre cultivar en esta tierra — el conocimiento que ningún socio externo puede aportar.",
      fr: "Tout sur la culture de cette terre — le savoir qu'aucun partenaire externe ne peut apporter.",
    },
    status: "IN_DISCUSSION",
    programs: [{ en: "Farmer support", es: "Apoyo a agricultores", fr: "Soutien aux agriculteurs" }],
  },
  {
    id: "state-enterprises",
    name: "State enterprises",
    kind: { en: "Institutional", es: "Institucional", fr: "Institutionnel" },
    role: {
      en: "Coordination on production planning, land use, distribution channels and institutional requirements.",
      es: "Coordinación en planificación productiva, uso de la tierra, canales de distribución y requisitos institucionales.",
      fr: "Coordination sur la planification, l'usage des terres, la distribution et les exigences institutionnelles.",
    },
    participate: {
      en: "Formal agreements, production contracts and distribution to population and tourism sectors.",
      es: "Acuerdos formales, contratos de producción y distribución a la población y al sector turístico.",
      fr: "Ententes formelles, contrats de production et distribution à la population et au tourisme.",
    },
    supportFromProject: {
      en: "Additional productive capacity, added value and imported equipment and technology.",
      es: "Capacidad productiva adicional, valor agregado y equipos y tecnología importados.",
      fr: "Capacité productive additionnelle, valeur ajoutée et équipements et technologies importés.",
    },
    learnFrom: {
      en: "Regulatory framework, distribution systems and national planning priorities.",
      es: "Marco regulatorio, sistemas de distribución y prioridades de planificación nacional.",
      fr: "Cadre réglementaire, systèmes de distribution et priorités nationales.",
    },
    status: "IN_DISCUSSION",
    programs: [{ en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" }],
  },
  {
    id: "canadian-partners",
    name: "Canadian agricultural partners",
    kind: { en: "Canada", es: "Canadá", fr: "Canada" },
    role: {
      en: "Equipment, agronomic expertise, supplies, logistics and long-term partnership from the Canadian side.",
      es: "Equipos, experiencia agronómica, suministros, logística y alianzas de largo plazo desde Canadá.",
      fr: "Équipement, expertise agronomique, fournitures, logistique et partenariats à long terme depuis le Canada.",
    },
    participate: {
      en: "Contribute machinery, sponsor verified needs, send specialists or host training exchanges.",
      es: "Aportar maquinaria, patrocinar necesidades verificadas, enviar especialistas o acoger intercambios de formación.",
      fr: "Fournir de la machinerie, parrainer des besoins vérifiés, envoyer des spécialistes ou accueillir des échanges.",
    },
    supportFromProject: {
      en: "Documented, transparent deployment of every contribution and direct field reporting.",
      es: "Despliegue documentado y transparente de cada contribución e informes directos desde el campo.",
      fr: "Déploiement documenté et transparent de chaque contribution et rapports directs du terrain.",
    },
    learnFrom: {
      en: "Mechanization, precision agriculture, cold chain and farm management systems.",
      es: "Mecanización, agricultura de precisión, cadena de frío y sistemas de gestión agrícola.",
      fr: "Mécanisation, agriculture de précision, chaîne du froid et gestion agricole.",
    },
    status: "IN_DISCUSSION",
    programs: [{ en: "Canada participation", es: "Participación de Canadá", fr: "Participation du Canada" }],
  },
  {
    id: "technology",
    name: "Technology companies",
    kind: { en: "Clean tech & systems", es: "Tecnología limpia y sistemas", fr: "Technologies propres" },
    role: {
      en: "Solar, irrigation control, refrigeration, monitoring and energy-efficient agricultural systems.",
      es: "Solar, control de riego, refrigeración, monitoreo y sistemas agrícolas eficientes.",
      fr: "Solaire, contrôle d'irrigation, réfrigération, surveillance et systèmes agricoles écoénergétiques.",
    },
    participate: {
      en: "Propose a technology, supply systems, or design a pilot deployment on project land.",
      es: "Proponer una tecnología, suministrar sistemas o diseñar un despliegue piloto en el terreno del proyecto.",
      fr: "Proposer une technologie, fournir des systèmes ou concevoir un déploiement pilote.",
    },
    supportFromProject: {
      en: "A real-world deployment site, performance documentation and long-term visibility.",
      es: "Un sitio de despliegue real, documentación de desempeño y visibilidad a largo plazo.",
      fr: "Un site de déploiement réel, une documentation de performance et une visibilité durable.",
    },
    learnFrom: {
      en: "How systems actually perform under Cuban conditions and constraints.",
      es: "Cómo funcionan realmente los sistemas bajo las condiciones y limitaciones cubanas.",
      fr: "Le comportement réel des systèmes dans les conditions cubaines.",
    },
    status: "PROPOSED",
    programs: [{ en: "Renewable energy", es: "Energía renovable", fr: "Énergie renouvelable" }],
  },
];
