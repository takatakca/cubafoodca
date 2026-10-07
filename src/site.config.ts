/**
 * SEO + consent kit: the ONE settings file per site.
 *
 * Rules:
 * - Only facts already present in this repo. Never invent an address, hours, phone, rating or review.
 * - Unknown values stay `undefined` with a `TODO(owner)` comment; the JSON-LD builder skips them.
 * - `url` is the real production domain (see foodhubca/private/hosting/MOCHAHOST_DOMAINS.md), never *.lovable.app.
 */
import { SITE as BRAND } from "@/content/site";
import { PROJECT_EMAIL } from "@/lib/contact";

export type SchemaType =
  "Organization" | "LocalBusiness" | "Restaurant" | "NGO" | "SportsOrganization" | "Event";

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
};

// `| undefined` on optional fields: this repo compiles with exactOptionalPropertyTypes.
export type SiteConfig = {
  /** Public business name. */
  name: string;
  /** Legal name if different (TODO(owner) when unknown). */
  legalName?: string | undefined;
  /** Real production origin, no trailing slash. */
  url: string;
  /** <html lang>. French first (Québec). */
  lang: "fr-CA";
  /** Open Graph locale. */
  locale: "fr_CA";
  defaultTitle: string;
  defaultDescription: string;
  /** Default share image: path under /public or absolute URL. undefined = no og:image. */
  ogImage?: string | undefined;
  /** Logo: path under /public or absolute URL. */
  logo?: string | undefined;
  schemaType: SchemaType;
  email?: string | undefined;
  /** E.164, e.g. "+15145550000". */
  phone?: string | undefined;
  address?: PostalAddress | undefined;
  /** Real social profile URLs only (no "#", no generic facebook.com). */
  sameAs: string[];
  /** Privacy policy route, used by the cookie banner. undefined = no page yet (TODO(owner)). */
  privacyPath?: string | undefined;
  /** Law 25 privacy officer. */
  privacyOfficer: { name?: string | undefined; email?: string | undefined };
};

export const SITE: SiteConfig = {
  name: BRAND.name,
  // TODO(owner): legal name of the organisation behind CUBAFOOD.CA, if different.
  legalName: undefined,
  url: "https://cubafood.ca",
  lang: "fr-CA",
  locale: "fr_CA",
  // French texts already on the site (footer subline, home hero, location line).
  defaultTitle: "CUBAFOOD.CA — Cultiver plus que de la nourriture",
  defaultDescription:
    "Nous ne cherchons pas seulement à envoyer de la nourriture à Cuba. Nous voulons aider Cuba à en produire davantage. Matanzas, Cuba — secteur de l'aéroport de Varadero.",
  // TODO(owner): add a real share image (1200x630) to public/ and set it here.
  ogImage: undefined,
  // TODO(owner): add the real CUBAFOOD.CA logo to public/ and set it here.
  logo: undefined,
  // Project, not a registered charity (see the contribution policy in src/content/research.ts).
  schemaType: "Organization",
  email: PROJECT_EMAIL,
  phone: undefined,
  // Project land is in Matanzas, Cuba; no street address is published.
  address: undefined,
  // TODO(owner): real social profile URLs, if any.
  sameAs: [],
  privacyPath: "/politique-de-confidentialite",
  // TODO(owner): name + email of the person responsible for personal information (Law 25).
  privacyOfficer: { name: undefined, email: undefined },
};
