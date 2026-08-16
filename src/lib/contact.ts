/**
 * Contact configuration.
 * Real values come from environment variables — never hardcode a number or address.
 *   VITE_PROJECT_WHATSAPP  e.g. 15145550123 (digits only, country code first)
 *   VITE_PROJECT_EMAIL     e.g. info@cubafood.ca
 */
export const PROJECT_WHATSAPP: string | undefined =
  (import.meta.env["VITE_PROJECT_WHATSAPP"] as string | undefined) || undefined;

export const PROJECT_EMAIL: string | undefined =
  (import.meta.env["VITE_PROJECT_EMAIL"] as string | undefined) || undefined;

export type WhatsAppContext = "cuba" | "canada" | "farmer" | "business" | "general";

export const WHATSAPP_MESSAGES: Record<WhatsAppContext, string> = {
  cuba: "Hola CUBAFOOD. Vivo en Cuba y quisiera participar en el proyecto agrícola.",
  canada: "Hello CUBAFOOD. I am in Canada and would like to know how I can support the agricultural project.",
  farmer: "Hola. Soy productor/agricultor y quisiera conocer las formas de colaboración con CUBAFOOD.",
  business: "Hello. I represent a company and would like to discuss supporting CUBAFOOD.",
  general: "Hola / Hello CUBAFOOD. I would like to know more about the agricultural project.",
};

/** Returns a wa.me link, or null when no number has been configured yet. */
export function whatsappLink(context: WhatsAppContext = "general"): string | null {
  if (!PROJECT_WHATSAPP) return null;
  const digits = PROJECT_WHATSAPP.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGES[context])}`;
}

export function emailLink(subject = "CUBAFOOD.CA"): string | null {
  if (!PROJECT_EMAIL) return null;
  return `mailto:${PROJECT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
