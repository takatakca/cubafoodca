import { FIELD_MEDIA } from "./media";
import type { JournalPost } from "./types";

const MATANZAS = {
  en: "Matanzas, Cuba — Varadero airport area",
  es: "Matanzas, Cuba — zona del aeropuerto de Varadero",
  fr: "Matanzas, Cuba — secteur de l'aéroport de Varadero",
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "site-documentation-matanzas",
    title: {
      en: "Filming the ground we intend to farm",
      es: "Filmando la tierra que queremos cultivar",
      fr: "Filmer la terre que nous voulons cultiver",
    },
    subtitle: {
      en: "Raw field documentation from the Matanzas development area, recorded by the project team.",
      es: "Documentación de campo sin editar del área de desarrollo de Matanzas, grabada por el equipo del proyecto.",
      fr: "Documentation brute de la zone de développement de Matanzas, filmée par l'équipe du projet.",
    },
    date: "2026-08-15",
    location: MATANZAS,
    author: "CUBAFOOD.CA",
    status: "PUBLISHED",
    tags: ["site-visit", "documentation", "matanzas"],
    relatedProject: "matanzas",
    isProjectDocumentation: true,
    video: FIELD_MEDIA.clip2.src,
    poster: FIELD_MEDIA.clip2.poster,
    gallery: [
      FIELD_MEDIA.clip1.poster,
      FIELD_MEDIA.clip3.poster,
      FIELD_MEDIA.clip4.poster,
      FIELD_MEDIA.clip5.poster,
    ],
    body: [
      {
        en: "This is not a rendering and it is not stock footage. It is the actual ground, filmed while moving through the project area near the Varadero airport region in Matanzas.",
        es: "Esto no es una recreación ni imágenes de archivo. Es el terreno real, filmado mientras se recorría el área del proyecto cerca de la región del aeropuerto de Varadero, en Matanzas.",
        fr: "Ce n'est ni un rendu ni une banque d'images. C'est le terrain réel, filmé en parcourant la zone du projet près de l'aéroport de Varadero, à Matanzas.",
      },
      {
        en: "The purpose of publishing unedited documentation is simple: anyone considering participation should be able to see exactly what exists today, before any land preparation has begun.",
        es: "El propósito de publicar documentación sin editar es simple: cualquiera que considere participar debe poder ver exactamente lo que existe hoy, antes de que comience la preparación de la tierra.",
        fr: "L'objectif de publier une documentation non montée est simple : toute personne envisageant de participer doit voir exactement ce qui existe aujourd'hui, avant toute préparation.",
      },
      {
        en: "What comes next depends on the institutional approval process, and then on machinery, water, energy and people. Every stage after this will be documented the same way.",
        es: "Lo que sigue depende del proceso de aprobación institucional y luego de maquinaria, agua, energía y personas. Cada etapa posterior será documentada de la misma manera.",
        fr: "La suite dépend du processus d'approbation institutionnel, puis de la machinerie, de l'eau, de l'énergie et des gens. Chaque étape sera documentée de la même façon.",
      },
    ],
  },
];

export const JOURNAL_CONTENT_TYPES = [
  { en: "Site visits", es: "Visitas al sitio", fr: "Visites de site" },
  { en: "Agricultural meetings", es: "Reuniones agrícolas", fr: "Réunions agricoles" },
  { en: "Land preparation", es: "Preparación de tierras", fr: "Préparation des terres" },
  { en: "Equipment", es: "Equipos", fr: "Équipement" },
  { en: "Coordination milestones", es: "Hitos de coordinación", fr: "Jalons de coordination" },
  { en: "Farmers joining", es: "Agricultores que se suman", fr: "Agriculteurs qui se joignent" },
  { en: "Canadian partners", es: "Socios canadienses", fr: "Partenaires canadiens" },
  { en: "Volunteer participation", es: "Participación voluntaria", fr: "Participation bénévole" },
  { en: "Planting", es: "Siembra", fr: "Semis" },
  { en: "Irrigation construction", es: "Construcción de riego", fr: "Construction d'irrigation" },
  { en: "Renewable energy", es: "Energía renovable", fr: "Énergie renouvelable" },
  { en: "Harvest", es: "Cosecha", fr: "Récolte" },
  { en: "Community food support", es: "Apoyo alimentario comunitario", fr: "Soutien alimentaire" },
  { en: "Training", es: "Capacitación", fr: "Formation" },
  { en: "Interviews", es: "Entrevistas", fr: "Entretiens" },
  { en: "Documentary videos", es: "Videos documentales", fr: "Vidéos documentaires" },
];
