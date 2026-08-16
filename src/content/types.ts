import type { T } from "@/i18n";

/**
 * CMS-ready content model for CUBAFOOD.CA.
 * Presentational components must never hardcode project data — it lives here
 * and can be swapped for a Lovable Cloud backend without touching the UI.
 */

export type ProjectStatus =
  | "PLANNING"
  | "COORDINATION"
  | "AWAITING_APPROVAL"
  | "APPROVED"
  | "PREPARING_LAND"
  | "INFRASTRUCTURE"
  | "PLANTING"
  | "GROWING"
  | "HARVESTING"
  | "DISTRIBUTING"
  | "COMPLETED";

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, T> = {
  PLANNING: { en: "Planning", es: "Planificación", fr: "Planification" },
  COORDINATION: { en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" },
  AWAITING_APPROVAL: { en: "Approval process", es: "Proceso de aprobación", fr: "Processus d'approbation" },
  APPROVED: { en: "Approved", es: "Aprobado", fr: "Approuvé" },
  PREPARING_LAND: { en: "Land preparation", es: "Preparación de tierras", fr: "Préparation des terres" },
  INFRASTRUCTURE: { en: "Infrastructure", es: "Infraestructura", fr: "Infrastructure" },
  PLANTING: { en: "Planting", es: "Siembra", fr: "Plantation" },
  GROWING: { en: "Growing", es: "Cultivo", fr: "Croissance" },
  HARVESTING: { en: "Harvest", es: "Cosecha", fr: "Récolte" },
  DISTRIBUTING: { en: "Distribution", es: "Distribución", fr: "Distribution" },
  COMPLETED: { en: "Completed", es: "Completado", fr: "Terminé" },
};

export type SupplyStatus = "NEEDED" | "FOUND" | "SPONSORED" | "IN_TRANSIT" | "DELIVERED" | "IN_SERVICE";

export const SUPPLY_STATUS_LABEL: Record<SupplyStatus, T> = {
  NEEDED: { en: "Needed", es: "Necesario", fr: "Requis" },
  FOUND: { en: "Found", es: "Localizado", fr: "Trouvé" },
  SPONSORED: { en: "Sponsored", es: "Patrocinado", fr: "Parrainé" },
  IN_TRANSIT: { en: "In transit", es: "En tránsito", fr: "En transit" },
  DELIVERED: { en: "Delivered", es: "Entregado", fr: "Livré" },
  IN_SERVICE: { en: "In service", es: "En servicio", fr: "En service" },
};

export type CollaborationStatus =
  | "IDENTIFIED"
  | "PROPOSED"
  | "IN_DISCUSSION"
  | "PLANNED"
  | "ACTIVE";

export const COLLABORATION_STATUS_LABEL: Record<CollaborationStatus, T> = {
  IDENTIFIED: { en: "Identified for coordination", es: "Identificada para coordinación", fr: "Identifiée pour coordination" },
  PROPOSED: { en: "Proposed collaboration", es: "Colaboración propuesta", fr: "Collaboration proposée" },
  IN_DISCUSSION: { en: "In discussion", es: "En conversación", fr: "En discussion" },
  PLANNED: { en: "Planned collaboration", es: "Colaboración planificada", fr: "Collaboration planifiée" },
  ACTIVE: { en: "Active collaboration", es: "Colaboración activa", fr: "Collaboration active" },
};

export type ParticipantStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "ASSIGNED"
  | "PARTICIPATING"
  | "PARTNER"
  | "DECLINED"
  | "ARCHIVED";

/** Shape of the future `participants` table (frontend contract). */
export type ParticipantRecord = {
  id?: string;
  created_at?: string;
  first_name: string;
  last_name: string;
  country: string;
  province?: string;
  municipality?: string;
  city?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  language: string;
  participant_type: string;
  profession?: string;
  skills?: string;
  experience?: string;
  organization?: string;
  availability?: string;
  equipment_offered?: string;
  support_requested?: string;
  message?: string;
  source_page: string;
  status: ParticipantStatus;
};

export type ProjectLocation = {
  slug: string;
  name: T;
  region: T;
  status: ProjectStatus;
  established?: string;
  isPrimary: boolean;
  summary: T;
};

export type Milestone = {
  id: string;
  year?: string;
  title: T;
  description: T;
  state: "done" | "active" | "future";
};

export type EquipmentNeed = {
  id: string;
  label: T;
  status: SupplyStatus;
};

export type EquipmentCategory = {
  id: string;
  title: T;
  description: T;
  items: EquipmentNeed[];
};

export type Institution = {
  id: string;
  name: string;
  kind: T;
  role: T;
  participate: T;
  supportFromProject: T;
  learnFrom: T;
  status: CollaborationStatus;
  programs: T[];
};

export type JournalPost = {
  slug: string;
  title: T;
  subtitle: T;
  date: string;
  location: T;
  author: string;
  status: "PUBLISHED" | "DRAFT";
  tags: string[];
  relatedProject?: string;
  body: T[];
  video?: string;
  poster?: string;
  gallery?: string[];
  isProjectDocumentation: boolean;
};

export type ProjectVideo = {
  id: string;
  title: T;
  description: T;
  category: string;
  date?: string;
  location: T;
  duration?: string;
  src?: string;
  poster?: string;
  comingSoon?: boolean;
};

export type TransparencyMetric = {
  id: string;
  label: T;
  note: T;
};

export type ProjectReport = {
  id: string;
  title: T;
  period: string;
  available: boolean;
};
