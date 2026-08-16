import type { Milestone } from "./types";

export const MILESTONES: Milestone[] = [
  {
    id: "start",
    year: "2024",
    title: { en: "The project begins", es: "El proyecto comienza", fr: "Le projet commence" },
    description: {
      en: "In 2024, the foundation of the CUBAFOOD.CA agricultural initiative was established with the objective of developing a long-term Canada–Cuba collaboration focused on agricultural production, food sustainability, employment, community development and greater local food availability.",
      es: "En 2024 se estableció la base de la iniciativa agrícola CUBAFOOD.CA con el objetivo de desarrollar una colaboración a largo plazo entre Canadá y Cuba centrada en la producción agrícola, la sostenibilidad alimentaria, el empleo, el desarrollo comunitario y una mayor disponibilidad local de alimentos.",
      fr: "En 2024, les bases de l'initiative agricole CUBAFOOD.CA ont été établies avec l'objectif de développer une collaboration Canada–Cuba à long terme axée sur la production agricole, la durabilité alimentaire, l'emploi, le développement communautaire et une plus grande disponibilité alimentaire locale.",
    },
    state: "done",
  },
  {
    id: "planning",
    title: { en: "Development planning", es: "Planificación del desarrollo", fr: "Planification du développement" },
    description: {
      en: "Site and agricultural project planning across the Matanzas development area.",
      es: "Planificación del sitio y del proyecto agrícola en el área de desarrollo de Matanzas.",
      fr: "Planification du site et du projet agricole dans la zone de développement de Matanzas.",
    },
    state: "done",
  },
  {
    id: "coordination",
    title: { en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" },
    description: {
      en: "Project discussions and coordination with the relevant Cuban agricultural authorities and organizations.",
      es: "Conversaciones y coordinación del proyecto con las autoridades y organizaciones agrícolas cubanas correspondientes.",
      fr: "Discussions et coordination avec les autorités et organisations agricoles cubaines concernées.",
    },
    state: "done",
  },
  {
    id: "approval",
    title: { en: "Approval process", es: "Proceso de aprobación", fr: "Processus d'approbation" },
    description: {
      en: "CUBAFOOD.CA is advancing through the institutional process required for the agricultural project to enter its next stage of development.",
      es: "CUBAFOOD.CA avanza en el proceso institucional requerido para que el proyecto agrícola entre en su próxima etapa de desarrollo.",
      fr: "CUBAFOOD.CA progresse dans le processus institutionnel requis pour que le projet passe à l'étape suivante.",
    },
    state: "active",
  },
  {
    id: "land-prep",
    title: { en: "Land preparation", es: "Preparación de tierras", fr: "Préparation des terres" },
    description: {
      en: "The next major operational phase: clearing, ploughing and preparing agricultural areas.",
      es: "La próxima gran fase operativa: desbroce, arado y preparación de las áreas agrícolas.",
      fr: "La prochaine grande phase opérationnelle : défrichage, labour et préparation des surfaces.",
    },
    state: "future",
  },
  {
    id: "infrastructure",
    title: { en: "Infrastructure", es: "Infraestructura", fr: "Infrastructure" },
    description: {
      en: "Water, irrigation, energy, storage and machinery.",
      es: "Agua, riego, energía, almacenamiento y maquinaria.",
      fr: "Eau, irrigation, énergie, stockage et machinerie.",
    },
    state: "future",
  },
  {
    id: "production",
    title: { en: "First agricultural production", es: "Primera producción agrícola", fr: "Première production agricole" },
    description: {
      en: "Future milestone. Planting begins on prepared land.",
      es: "Hito futuro. La siembra comienza en la tierra preparada.",
      fr: "Jalon futur. Les semis commencent sur les terres préparées.",
    },
    state: "future",
  },
  {
    id: "harvest",
    title: { en: "Harvest", es: "Cosecha", fr: "Récolte" },
    description: {
      en: "Future milestone. Production reporting begins here.",
      es: "Hito futuro. Aquí comienza el reporte de producción.",
      fr: "Jalon futur. Le suivi de production commence ici.",
    },
    state: "future",
  },
  {
    id: "distribution",
    title: { en: "Community distribution", es: "Distribución comunitaria", fr: "Distribution communautaire" },
    description: {
      en: "Future milestone. From the field to the family.",
      es: "Hito futuro. Del campo a la familia.",
      fr: "Jalon futur. Du champ à la famille.",
    },
    state: "future",
  },
];
