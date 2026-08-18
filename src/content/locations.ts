import type { T } from "@/i18n";
import type { ProjectLocation } from "./types";

export const LOCATIONS: ProjectLocation[] = [
  {
    slug: "matanzas",
    name: { en: "Matanzas", es: "Matanzas", fr: "Matanzas" },
    region: {
      en: "Matanzas province, near the Varadero airport region",
      es: "Provincia de Matanzas, cerca de la región del aeropuerto de Varadero",
      fr: "Province de Matanzas, près de la région de l'aéroport de Varadero",
    },
    status: "AWAITING_APPROVAL",
    established: "2024",
    isPrimary: true,
    summary: {
      en: "The primary development area: more than 24 kilometres of identified agricultural land in the broader Matanzas / Varadero airport region.",
      es: "El área de desarrollo principal: más de 24 kilómetros de tierra agrícola identificada en la región más amplia de Matanzas / aeropuerto de Varadero.",
      fr: "La zone de développement principale : plus de 24 kilomètres de terres agricoles identifiées dans la région élargie de Matanzas / aéroport de Varadero.",
    },
  },
  {
    slug: "jaguey-grande",
    name: { en: "Jagüey Grande", es: "Jagüey Grande", fr: "Jagüey Grande" },
    region: {
      en: "Matanzas province, Zapata peninsula area",
      es: "Provincia de Matanzas, zona de la península de Zapata",
      fr: "Province de Matanzas, secteur de la péninsule de Zapata",
    },
    status: "PLANNING",
    isPrimary: false,
    summary: {
      en: "A secondary area identified for potential future coordination. Planning-stage only — no commitments have been made.",
      es: "Un área secundaria identificada para una posible coordinación futura. Solo en etapa de planificación — no se han asumido compromisos.",
      fr: "Une zone secondaire identifiée pour une éventuelle coordination future. Uniquement en phase de planification — aucun engagement n'a été pris.",
    },
  },
];

export const LAND_PREP_STAGES: { id: string; title: T; description: T; state: "done" | "active" | "future" }[] = [
  {
    id: "survey",
    title: { en: "Verified survey", es: "Levantamiento verificado", fr: "Relevé vérifié" },
    description: {
      en: "Formal land survey and measurement, conducted with the relevant Cuban authorities.",
      es: "Levantamiento y medición formal del terreno, realizado con las autoridades cubanas correspondientes.",
      fr: "Levé et mesure officiels du terrain, réalisés avec les autorités cubaines concernées.",
    },
    state: "future",
  },
  {
    id: "clearing",
    title: { en: "Clearing", es: "Desbroce", fr: "Défrichage" },
    description: {
      en: "Clearing identified agricultural parcels for cultivation.",
      es: "Desbroce de las parcelas agrícolas identificadas para el cultivo.",
      fr: "Défrichage des parcelles agricoles identifiées pour la culture.",
    },
    state: "future",
  },
  {
    id: "ploughing",
    title: { en: "Ploughing", es: "Arado", fr: "Labour" },
    description: {
      en: "Preparing soil for planting across sectioned areas.",
      es: "Preparación del suelo para la siembra en las áreas seccionadas.",
      fr: "Préparation du sol pour la plantation dans les zones sectionnées.",
    },
    state: "future",
  },
  {
    id: "irrigation",
    title: { en: "Water & irrigation", es: "Agua y riego", fr: "Eau et irrigation" },
    description: {
      en: "Water access and irrigation infrastructure for consistent crop production.",
      es: "Acceso al agua e infraestructura de riego para una producción agrícola constante.",
      fr: "Accès à l'eau et infrastructure d'irrigation pour une production agricole constante.",
    },
    state: "future",
  },
  {
    id: "energy",
    title: { en: "Energy", es: "Energía", fr: "Énergie" },
    description: {
      en: "Renewable and reliable energy for equipment, storage and irrigation systems.",
      es: "Energía renovable y confiable para equipos, almacenamiento y sistemas de riego.",
      fr: "Énergie renouvelable et fiable pour l'équipement, le stockage et les systèmes d'irrigation.",
    },
    state: "future",
  },
];
