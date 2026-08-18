import { supabase } from "@/integrations/supabase/client";

/**
 * Public submission helpers. Every table accepts anonymous inserts only —
 * nothing is readable from the browser, so no visitor data is ever exposed.
 */

export type ParticipantSubmission = {
  first_name: string;
  last_name?: string | undefined;
  country?: string | undefined;
  province?: string | undefined;
  municipality?: string | undefined;
  city?: string | undefined;
  phone?: string | undefined;
  whatsapp?: string | undefined;
  email?: string | undefined;
  preferred_language?: string | undefined;
  participant_type?: string | undefined;
  profession?: string | undefined;
  skills?: string | undefined;
  agricultural_experience?: string | undefined;
  machinery_experience?: string | undefined;
  driver_license?: string | undefined;
  organization?: string | undefined;
  availability?: string | undefined;
  equipment_offered?: string | undefined;
  support_requested?: string | undefined;
  contribution_types?: string[] | undefined;
  message?: string | undefined;
  source_page: string;
};

export type PartnerSubmission = {
  company: string;
  contact_name: string;
  country?: string | undefined;
  province?: string | undefined;
  city?: string | undefined;
  website?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  whatsapp?: string | undefined;
  industry?: string | undefined;
  contribution_types?: string[] | undefined;
  equipment_description?: string | undefined;
  expertise_description?: string | undefined;
  message?: string | undefined;
  source_page: string;
};

export type FarmerSubmission = {
  name: string;
  phone?: string | undefined;
  whatsapp?: string | undefined;
  email?: string | undefined;
  province?: string | undefined;
  municipality?: string | undefined;
  farm_type?: string | undefined;
  cooperative_name?: string | undefined;
  crops?: string | undefined;
  current_needs?: string | undefined;
  equipment?: string | undefined;
  irrigation?: string | undefined;
  transport?: string | undefined;
  storage?: string | undefined;
  collaboration_interest?: string | undefined;
  message?: string | undefined;
};

export type VolunteerSubmission = {
  first_name: string;
  last_name?: string | undefined;
  country?: string | undefined;
  location?: string | undefined;
  phone?: string | undefined;
  whatsapp?: string | undefined;
  email?: string | undefined;
  languages?: string | undefined;
  professional_background?: string | undefined;
  skills?: string | undefined;
  volunteer_categories?: string[] | undefined;
  availability?: string | undefined;
  message?: string | undefined;
};

export type NewsletterSubmission = {
  name?: string | undefined;
  email: string;
  country?: string | undefined;
  preferred_language?: string | undefined;
  source_page: string;
};

type Defined<T> = { [K in keyof T]: Exclude<T[K], undefined> };

function clean<T extends Record<string, unknown>>(row: T): Defined<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (v === undefined || v === "") continue;
    out[k] = v;
  }
  return out as Defined<T>;
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
