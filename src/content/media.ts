import type { ProjectVideo } from "./types";

/** Real, unedited field documentation supplied by the project team. No stock, no reconstructions. */
export const FIELD_MEDIA = {
  clip1: { src: "/media/cubafood/field-1.mp4", poster: "/media/cubafood/field-1-poster.jpg" },
  clip2: { src: "/media/cubafood/field-2.mp4", poster: "/media/cubafood/field-2-poster.jpg" },
  clip3: { src: "/media/cubafood/field-3.mp4", poster: "/media/cubafood/field-3-poster.jpg" },
  clip4: { src: "/media/cubafood/field-4.mp4", poster: "/media/cubafood/field-4-poster.jpg" },
  clip5: { src: "/media/cubafood/field-5.mp4", poster: "/media/cubafood/field-5-poster.jpg" },
};

const LOC = {
  en: "Matanzas, Cuba — Varadero airport area",
  es: "Matanzas, Cuba — zona del aeropuerto de Varadero",
  fr: "Matanzas, Cuba — secteur de l'aéroport de Varadero",
};

export const VIDEOS: ProjectVideo[] = [
  {
    id: "site-drive",
    title: {
      en: "Driving the project area",
      es: "Recorriendo el área del proyecto",
      fr: "Parcours de la zone du projet",
    },
    description: {
      en: "Unedited field documentation recorded while travelling through the agricultural development zone.",
      es: "Documentación de campo sin editar, grabada durante un recorrido por la zona de desarrollo agrícola.",
      fr: "Documentation de terrain non montée, enregistrée lors d'un parcours de la zone de développement agricole.",
    },
    category: "FROM_THE_LAND",
    location: LOC,
    duration: "3:00",
    src: FIELD_MEDIA.clip2.src,
    poster: FIELD_MEDIA.clip2.poster,
  },
  {
    id: "field-1",
    title: { en: "Field documentation I", es: "Documentación de campo I", fr: "Documentation de terrain I" },
    description: {
      en: "Project area footage recorded during a site visit.",
      es: "Imágenes del área del proyecto grabadas durante una visita al sitio.",
      fr: "Images de la zone du projet enregistrées lors d'une visite.",
    },
    category: "FROM_THE_LAND",
    location: LOC,
    duration: "0:14",
    src: FIELD_MEDIA.clip1.src,
    poster: FIELD_MEDIA.clip1.poster,
  },
  {
    id: "field-3",
    title: { en: "Field documentation II", es: "Documentación de campo II", fr: "Documentation de terrain II" },
    description: {
      en: "Project area footage recorded during a site visit.",
      es: "Imágenes del área del proyecto grabadas durante una visita al sitio.",
      fr: "Images de la zone du projet enregistrées lors d'une visite.",
    },
    category: "AGRICULTURAL_DEVELOPMENT",
    location: LOC,
    duration: "0:24",
    src: FIELD_MEDIA.clip3.src,
    poster: FIELD_MEDIA.clip3.poster,
  },
  {
    id: "field-4",
    title: { en: "Field documentation III", es: "Documentación de campo III", fr: "Documentation de terrain III" },
    description: {
      en: "Project area footage recorded during a site visit.",
      es: "Imágenes del área del proyecto grabadas durante una visita al sitio.",
      fr: "Images de la zone du projet enregistrées lors d'une visite.",
    },
    category: "PROJECT_UPDATES",
    location: LOC,
    duration: "0:14",
    src: FIELD_MEDIA.clip4.src,
    poster: FIELD_MEDIA.clip4.poster,
  },
  {
    id: "field-5",
    title: { en: "Field documentation IV", es: "Documentación de campo IV", fr: "Documentation de terrain IV" },
    description: {
      en: "Project area footage recorded during a site visit.",
      es: "Imágenes del área del proyecto grabadas durante una visita al sitio.",
      fr: "Images de la zone du projet enregistrées lors d'une visite.",
    },
    category: "PROJECT_UPDATES",
    location: LOC,
    duration: "0:17",
    src: FIELD_MEDIA.clip5.src,
    poster: FIELD_MEDIA.clip5.poster,
  },
  {
    id: "people-soon",
    title: { en: "People of the project", es: "Gente del proyecto", fr: "Les gens du projet" },
    description: {
      en: "Interviews with the workers, farmers and families building the project.",
      es: "Entrevistas con los trabajadores, agricultores y familias que construyen el proyecto.",
      fr: "Entretiens avec les travailleurs, agriculteurs et familles qui bâtissent le projet.",
    },
    category: "PEOPLE",
    location: LOC,
    comingSoon: true,
  },
  {
    id: "canada-soon",
    title: { en: "Canada → Cuba", es: "Canadá → Cuba", fr: "Canada → Cuba" },
    description: {
      en: "Canadian contribution stories: equipment, knowledge and partnerships.",
      es: "Historias de contribución canadiense: equipos, conocimiento y alianzas.",
      fr: "Histoires de contribution canadienne : équipement, savoir et partenariats.",
    },
    category: "CANADA_CUBA",
    location: { en: "Canada", es: "Canadá", fr: "Canada" },
    comingSoon: true,
  },
  {
    id: "community-soon",
    title: { en: "Community", es: "Comunidad", fr: "Communauté" },
    description: {
      en: "Food support and community development documentation.",
      es: "Documentación de apoyo alimentario y desarrollo comunitario.",
      fr: "Documentation du soutien alimentaire et du développement communautaire.",
    },
    category: "COMMUNITY",
    location: LOC,
    comingSoon: true,
  },
];

export const VIDEO_CATEGORIES: { id: string; label: { en: string; es: string; fr: string } }[] = [
  { id: "FROM_THE_LAND", label: { en: "From the land", es: "Desde la tierra", fr: "Depuis la terre" } },
  { id: "PEOPLE", label: { en: "People of the project", es: "Gente del proyecto", fr: "Les gens du projet" } },
  {
    id: "AGRICULTURAL_DEVELOPMENT",
    label: { en: "Agricultural development", es: "Desarrollo agrícola", fr: "Développement agricole" },
  },
  { id: "CANADA_CUBA", label: { en: "Canada → Cuba", es: "Canadá → Cuba", fr: "Canada → Cuba" } },
  { id: "PROJECT_UPDATES", label: { en: "Project updates", es: "Actualizaciones", fr: "Mises à jour" } },
  { id: "COMMUNITY", label: { en: "Community", es: "Comunidad", fr: "Communauté" } },
];
