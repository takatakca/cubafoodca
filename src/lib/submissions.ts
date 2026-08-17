import { supabase } from "@/integrations/supabase/client";

/**
 * Public submission helpers. Every table accepts anonymous inserts only —
 * nothing is readable from the browser, so no visitor data is ever exposed.
 */

export type ParticipantSubmission = {
  first_name: string;
  last_name?: string;
  country?: string;
  province?: string;
  municipality?: string;
  city?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  preferred_language?: string;
  participant_type?: string;
  profession?: string;
  skills?: string;
  agricultural_experience?: string;
  machinery_experience?: string;
  driver_license?: string;
  organization?: string;
  availability?: string;
  equipment_offered?: string;
  support_requested?: string;
  contribution_types?: string[];
  message?: string;
  source_page: string;
};

export type PartnerSubmission = {
  company: string;
  contact_name: string;
  country?: string;
  province?: string;
  city?: string;
  website?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  industry?: string;
  contribution_types?: string[];
  equipment_description?: string;
  expertise_description?: string;
  message?: string;
  source_page: string;
};

export type FarmerSubmission = {
  name: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  province?: string;
  municipality?: string;
  farm_type?: string;
  cooperative_name?: string;
  crops?: string;
  current_needs?: string;
  equipment?: string;
  irrigation?: string;
  transport?: string;
  storage?: string;
  collaboration_interest?: string;
  message?: string;
};

export type VolunteerSubmission = {
  first_name: string;
  last_name?: string;
  country?: string;
  location?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  languages?: string;
  professional_background?: string;
  skills?: string;
  volunteer_categories?: string[];
  availability?: string;
  message?: string;
};

export type NewsletterSubmission = {
  name?: string;
  email: string;
  country?: string;
  preferred_language?: string;
  source_page: string;
};

function clean<T extends Record<string, unknown>>(row: T): T {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (v === undefined || v === "") continue;
    out[k] = v;
  }
  return out as T;
}

export async function submitParticipant(row: ParticipantSubmission) {
  const { error } = await supabase.from("participants").insert(clean(row));
  if (error) throw new Error(error.message);
}

export async function submitPartnerInquiry(row: PartnerSubmission) {
  const { error } = await supabase.from("partner_inquiries").insert(clean(row));
  if (error) throw new Error(error.message);
}

export async function submitFarmerRegistration(row: FarmerSubmission) {
  const { error } = await supabase.from("farmer_registrations").insert(clean(row));
  if (error) throw new Error(error.message);
}

export async function submitVolunteerInterest(row: VolunteerSubmission) {
  const { error } = await supabase.from("volunteer_interest").insert(clean(row));
  if (error) throw new Error(error.message);
}

/** Duplicate emails are rejected by a unique index — treated as success. */
export async function subscribeToNewsletter(row: NewsletterSubmission) {
  const { error } = await supabase.from("newsletter_subscribers").insert(clean(row));
  if (error && !error.message.toLowerCase().includes("duplicate")) throw new Error(error.message);
}
