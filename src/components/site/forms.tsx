import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useI18n, type T } from "@/i18n";
import { cn } from "@/lib/utils";
import type { ParticipantRecord } from "@/content/types";
import { WhatsAppButton } from "./whatsapp";
import type { WhatsAppContext } from "@/lib/contact";
import {
  submitParticipant,
  submitFarmerRegistration,
  submitPartnerInquiry,
  submitVolunteerInterest,
  subscribeToNewsletter,
} from "@/lib/submissions";

/* ------------------------------- primitives ------------------------------ */

export function Field({
  label,
  children,
  hint,
  required,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow opacity-65">
        {label}
        {required ? <span aria-hidden className="text-cuba-red"> *</span> : null}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <span className="mt-1.5 block text-xs opacity-55">{hint}</span> : null}
    </label>
  );
}

const inputCls =
  "w-full min-h-11 rounded-md border border-input bg-card px-4 py-3 text-base text-foreground placeholder:opacity-40 focus:border-ring";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputCls, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={4} {...props} className={cn(inputCls, props.className)} />;
}

export function Select({
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[] }) {
  return (
    <select {...props} className={cn(inputCls, props.className)}>
      <option value="">—</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: { id: string; label: string }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = selected.includes(o.id);
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onToggle(o.id)}
            className={cn(
              "min-h-11 rounded-full border px-4 py-2.5 text-sm transition-colors",
              on ? "border-primary bg-primary text-primary-foreground" : "border-input hover:bg-muted",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------ shared shell ----------------------------- */

export function SuccessPanel({
  title,
  body,
  whatsappContext = "general",
  whatsappLabel,
}: {
  title: T;
  body: T;
  whatsappContext?: WhatsAppContext;
  whatsappLabel?: string;
}) {
  const { t } = useI18n();
  return (
    <div role="status" className="rounded-lg border border-primary/30 bg-primary/5 p-8">
      <p className="display text-2xl">{t(title)}</p>
      <p className="mt-3 max-w-prose text-sm leading-relaxed opacity-75">{t(body)}</p>
      <div className="mt-6">
        <WhatsAppButton context={whatsappContext} label={whatsappLabel} />
      </div>
    </div>
  );
}

function ErrorNote({ message }: { message: string | null }) {
  const { t } = useI18n();
  if (!message) return null;
  return (
    <p role="alert" className="mt-4 rounded-md border border-cuba-red/40 bg-cuba-red/5 px-4 py-3 text-sm">
      {t({
        en: "We could not save your information. Your answers are still here — please try again.",
        es: "No pudimos guardar tu información. Tus respuestas siguen aquí — inténtalo de nuevo.",
        fr: "Nous n'avons pas pu enregistrer vos informations. Vos réponses sont conservées — réessayez.",
      })}
    </p>
  );
}

function SubmitButton({ pending, label }: { pending: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="eyebrow min-h-11 rounded-full bg-primary px-6 py-3 text-primary-foreground disabled:opacity-60"
    >
      {label}
    </button>
  );
}

function useSubmitter<TRow>(save: (row: TRow) => Promise<void>) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const run = async (row: TRow) => {
    setPending(true);
    setError(null);
    try {
      await save(row);
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setPending(false);
    }
  };

  return { pending, error, done, run };
}

const FORM_CARD = "rounded-lg border border-border bg-card p-6 text-card-foreground md:p-8";

/* --------------------------- participation form -------------------------- */

export type StepDef = {
  id: string;
  title: T;
  render: (
    value: Partial<ParticipantRecord> & { selections: string[] },
    set: (patch: Partial<ParticipantRecord>) => void,
    toggle: (id: string) => void,
  ) => ReactNode;
};

export function MultiStepForm({
  steps,
  sourcePage,
  country,
  participantTypeFallback,
  whatsappContext = "general",
  submitLabel,
  success,
}: {
  steps: StepDef[];
  sourcePage: string;
  country: string;
  participantTypeFallback: string;
  whatsappContext?: WhatsAppContext;
  submitLabel: T;
  success?: { title: T; body: T };
}) {
  const { t, lang } = useI18n();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [data, setData] = useState<Partial<ParticipantRecord>>({});
  const { pending, error, done, run } = useSubmitter(submitParticipant);

  const set = (patch: Partial<ParticipantRecord>) => setData((d) => ({ ...d, ...patch }));
  const toggle = (id: string) =>
    setSelections((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const record = useMemo(
    () => ({
      first_name: data.first_name ?? "",
      last_name: data.last_name ?? "",
      country,
      province: data.province,
      municipality: data.municipality,
      city: data.city,
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      preferred_language: lang,
      participant_type: selections[0] ?? data.participant_type ?? participantTypeFallback,
      profession: data.profession,
      skills: selections.join(", "),
      agricultural_experience: data.experience,
      organization: data.organization,
      availability: data.availability,
      equipment_offered: data.equipment_offered,
      support_requested: data.support_requested,
      contribution_types: selections,
      message: data.message,
      source_page: sourcePage,
    }),
    [data, selections, country, lang, participantTypeFallback, sourcePage],
  );

  if (done) {
    return (
      <SuccessPanel
        whatsappContext={whatsappContext}
        title={
          success?.title ?? {
            en: "Thank you for wanting to take part.",
            es: "Gracias por querer participar.",
            fr: "Merci de vouloir participer.",
          }
        }
        body={
          success?.body ?? {
            en: "Your information has been received and can be reviewed as participation, partnership and equipment opportunities develop.",
            es: "Hemos recibido tu información. El equipo podrá utilizar estos datos para identificar personas, capacidades y posibles oportunidades relacionadas con el desarrollo del proyecto.",
            fr: "Vos informations ont été reçues et pourront être examinées à mesure que les occasions de participation se développent.",
          }
        }
      />
    );
  }

  const current = steps[step]!;
  const last = step === steps.length - 1;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void run(record);
  };

  return (
    <form onSubmit={onSubmit} className={FORM_CARD}>
      <div className="flex items-center gap-2" aria-hidden>
        {steps.map((s, i) => (
          <span
            key={s.id}
            className={cn("h-1 flex-1 rounded-full", i <= step ? "bg-primary" : "bg-border")}
          />
        ))}
      </div>
      <p className="eyebrow mt-4 opacity-55">
        {step + 1} / {steps.length}
      </p>
      <h3 className="display mt-2 text-2xl">{t(current.title)}</h3>

      <div className="mt-6 space-y-5">{current.render({ ...data, selections }, set, toggle)}</div>

      <ErrorNote message={error} />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="eyebrow min-h-11 rounded-full border border-input px-5 py-3"
          >
            {t({ en: "Back", es: "Atrás", fr: "Retour" })}
          </button>
        ) : null}
        {!last ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="eyebrow min-h-11 rounded-full bg-primary px-6 py-3 text-primary-foreground"
          >
            {t({ en: "Continue", es: "Continuar", fr: "Continuer" })}
          </button>
        ) : (
          <SubmitButton pending={pending} label={t(submitLabel)} />
        )}
        <WhatsAppButton context={whatsappContext} variant="outline" />
      </div>
    </form>
  );
}

/* ------------------------------ farmer form ------------------------------ */

export function FarmerForm({ provinces }: { provinces: string[] }) {
  const { t } = useI18n();
  const [f, setF] = useState<Record<string, string>>({});
  const { pending, error, done, run } = useSubmitter(submitFarmerRegistration);
  const on = (k: string) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));

  if (done)
    return (
      <SuccessPanel
        whatsappContext="farmer"
        title={{ en: "Registration received.", es: "Registro recibido.", fr: "Inscription reçue." }}
        body={{
          en: "Your farm or cooperative details have been recorded. The project team can review them as collaboration, inputs and equipment become available.",
          es: "Hemos registrado los datos de tu finca o cooperativa. El equipo podrá revisarlos a medida que avancen las posibilidades de colaboración, insumos y equipos.",
          fr: "Les informations de votre ferme ou coopérative ont été enregistrées.",
        }}
      />
    );

  return (
    <form
      className={FORM_CARD}
      onSubmit={(e) => {
        e.preventDefault();
        void run({
          name: f["name"] ?? "",
          phone: f["phone"],
          whatsapp: f["whatsapp"],
          email: f["email"],
          province: f["province"],
          municipality: f["municipality"],
          farm_type: f["farm_type"],
          cooperative_name: f["cooperative_name"],
          crops: f["crops"],
          current_needs: f["current_needs"],
          equipment: f["equipment"],
          irrigation: f["irrigation"],
          transport: f["transport"],
          storage: f["storage"],
          collaboration_interest: f["collaboration_interest"],
          message: f["message"],
        });
      }}
    >
      <h3 className="display text-2xl">
        {t({ en: "Register your farm or cooperative", es: "Registra tu finca o cooperativa", fr: "Inscrivez votre ferme" })}
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label={t({ en: "Name", es: "Nombre", fr: "Nom" })} required>
          <TextInput required value={f["name"] ?? ""} onChange={on("name")} autoComplete="name" />
        </Field>
        <Field label={t({ en: "Farm type", es: "Tipo de finca", fr: "Type d'exploitation" })}>
          <Select
            value={f["farm_type"] ?? ""}
            onChange={on("farm_type")}
            options={[
              t({ en: "Independent farm", es: "Finca independiente", fr: "Ferme indépendante" }),
              t({ en: "Cooperative (CPA / CCS / UBPC)", es: "Cooperativa (CPA / CCS / UBPC)", fr: "Coopérative" }),
              t({ en: "State enterprise", es: "Empresa estatal", fr: "Entreprise d'État" }),
              t({ en: "Family plot", es: "Parcela familiar", fr: "Parcelle familiale" }),
            ]}
          />
        </Field>
        <Field label={t({ en: "Cooperative name", es: "Nombre de la cooperativa", fr: "Nom de la coopérative" })}>
          <TextInput value={f["cooperative_name"] ?? ""} onChange={on("cooperative_name")} />
        </Field>
        <Field label={t({ en: "Province", es: "Provincia", fr: "Province" })}>
          <Select value={f["province"] ?? ""} onChange={on("province")} options={provinces} />
        </Field>
        <Field label={t({ en: "Municipality", es: "Municipio", fr: "Municipalité" })}>
          <TextInput value={f["municipality"] ?? ""} onChange={on("municipality")} />
        </Field>
        <Field label={t({ en: "Phone", es: "Teléfono", fr: "Téléphone" })}>
          <TextInput type="tel" value={f["phone"] ?? ""} onChange={on("phone")} autoComplete="tel" />
        </Field>
        <Field label="WhatsApp">
          <TextInput type="tel" value={f["whatsapp"] ?? ""} onChange={on("whatsapp")} />
        </Field>
        <Field label={t({ en: "Email", es: "Correo", fr: "Courriel" })}>
          <TextInput type="email" value={f["email"] ?? ""} onChange={on("email")} autoComplete="email" />
        </Field>
        <Field label={t({ en: "What do you grow?", es: "¿Qué cultivas?", fr: "Que cultivez-vous ?" })}>
          <TextInput value={f["crops"] ?? ""} onChange={on("crops")} />
        </Field>
        <Field label={t({ en: "Irrigation you have", es: "Riego que tienes", fr: "Irrigation disponible" })}>
          <TextInput value={f["irrigation"] ?? ""} onChange={on("irrigation")} />
        </Field>
        <Field label={t({ en: "Equipment you have", es: "Equipos que tienes", fr: "Équipement disponible" })}>
          <TextInput value={f["equipment"] ?? ""} onChange={on("equipment")} />
        </Field>
        <Field label={t({ en: "Transport", es: "Transporte", fr: "Transport" })}>
          <TextInput value={f["transport"] ?? ""} onChange={on("transport")} />
        </Field>
        <Field label={t({ en: "Storage", es: "Almacenamiento", fr: "Entreposage" })}>
          <TextInput value={f["storage"] ?? ""} onChange={on("storage")} />
        </Field>
        <Field label={t({ en: "Collaboration interest", es: "Interés de colaboración", fr: "Intérêt de collaboration" })}>
          <TextInput value={f["collaboration_interest"] ?? ""} onChange={on("collaboration_interest")} />
        </Field>
      </div>
      <div className="mt-5 grid gap-5">
        <Field label={t({ en: "What do you need most?", es: "¿Qué necesitas más?", fr: "De quoi avez-vous le plus besoin ?" })}>
          <TextArea value={f["current_needs"] ?? ""} onChange={on("current_needs")} />
        </Field>
        <Field label={t({ en: "Message", es: "Mensaje", fr: "Message" })}>
          <TextArea value={f["message"] ?? ""} onChange={on("message")} />
        </Field>
      </div>
      <ErrorNote message={error} />
      <div className="mt-7 flex flex-wrap gap-3">
        <SubmitButton pending={pending} label={t({ en: "Register as a farmer", es: "Registrarme como agricultor", fr: "M'inscrire" })} />
        <WhatsAppButton context="farmer" variant="outline" />
      </div>
    </form>
  );
}

/* ------------------------------ partner form ----------------------------- */

export function PartnerForm({
  sourcePage,
  contributionOptions,
}: {
  sourcePage: string;
  contributionOptions: { id: string; label: string }[];
}) {
  const { t } = useI18n();
  const [f, setF] = useState<Record<string, string>>({});
  const [types, setTypes] = useState<string[]>([]);
  const { pending, error, done, run } = useSubmitter(submitPartnerInquiry);
  const on = (k: string) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));

  if (done)
    return (
      <SuccessPanel
        whatsappContext="business"
        title={{
          en: "Thank you for helping build something long-term.",
          es: "Gracias por ayudar a construir algo a largo plazo.",
          fr: "Merci d'aider à bâtir quelque chose de durable.",
        }}
        body={{
          en: "Your information has been received and can be reviewed as partnership, equipment, technical and participation opportunities develop.",
          es: "Hemos recibido su información y será revisada a medida que se desarrollen oportunidades de asociación, equipos, apoyo técnico y participación.",
          fr: "Vos informations ont été reçues et seront examinées à mesure que les occasions se développent.",
        }}
      />
    );

  return (
    <form
      className={FORM_CARD}
      onSubmit={(e) => {
        e.preventDefault();
        void run({
          company: f["company"] ?? "",
          contact_name: f["contact_name"] ?? "",
          country: f["country"],
          province: f["province"],
          city: f["city"],
          website: f["website"],
          email: f["email"],
          phone: f["phone"],
          whatsapp: f["whatsapp"],
          industry: f["industry"],
          contribution_types: types,
          equipment_description: f["equipment_description"],
          expertise_description: f["expertise_description"],
          message: f["message"],
          source_page: sourcePage,
        });
      }}
    >
      <h3 className="display text-2xl">
        {t({ en: "Company / organization inquiry", es: "Consulta de empresa u organización", fr: "Demande d'entreprise" })}
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label={t({ en: "Company or organization", es: "Empresa u organización", fr: "Entreprise ou organisation" })} required>
          <TextInput required value={f["company"] ?? ""} onChange={on("company")} />
        </Field>
        <Field label={t({ en: "Contact name", es: "Persona de contacto", fr: "Personne-ressource" })} required>
          <TextInput required value={f["contact_name"] ?? ""} onChange={on("contact_name")} autoComplete="name" />
        </Field>
        <Field label={t({ en: "Country", es: "País", fr: "Pays" })}>
          <TextInput value={f["country"] ?? ""} onChange={on("country")} autoComplete="country-name" />
        </Field>
        <Field label={t({ en: "Province / state", es: "Provincia / estado", fr: "Province / état" })}>
          <TextInput value={f["province"] ?? ""} onChange={on("province")} />
        </Field>
        <Field label={t({ en: "City", es: "Ciudad", fr: "Ville" })}>
          <TextInput value={f["city"] ?? ""} onChange={on("city")} />
        </Field>
        <Field label={t({ en: "Industry", es: "Industria", fr: "Secteur" })}>
          <TextInput value={f["industry"] ?? ""} onChange={on("industry")} />
        </Field>
        <Field label={t({ en: "Website", es: "Sitio web", fr: "Site web" })}>
          <TextInput type="url" value={f["website"] ?? ""} onChange={on("website")} placeholder="https://" />
        </Field>
        <Field label={t({ en: "Email", es: "Correo", fr: "Courriel" })}>
          <TextInput type="email" value={f["email"] ?? ""} onChange={on("email")} autoComplete="email" />
        </Field>
        <Field label={t({ en: "Phone", es: "Teléfono", fr: "Téléphone" })}>
          <TextInput type="tel" value={f["phone"] ?? ""} onChange={on("phone")} />
        </Field>
        <Field label="WhatsApp">
          <TextInput type="tel" value={f["whatsapp"] ?? ""} onChange={on("whatsapp")} />
        </Field>
      </div>
      <div className="mt-6 space-y-5">
        <Field label={t({ en: "How could you contribute?", es: "¿Cómo podría contribuir?", fr: "Comment pouvez-vous contribuer ?" })}>
          <ChipGroup
            options={contributionOptions}
            selected={types}
            onToggle={(id) => setTypes((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))}
          />
        </Field>
        <Field label={t({ en: "Equipment description", es: "Descripción de equipos", fr: "Description de l'équipement" })}>
          <TextArea value={f["equipment_description"] ?? ""} onChange={on("equipment_description")} />
        </Field>
        <Field label={t({ en: "Expertise description", es: "Descripción de experiencia", fr: "Description de l'expertise" })}>
          <TextArea value={f["expertise_description"] ?? ""} onChange={on("expertise_description")} />
        </Field>
        <Field label={t({ en: "Message", es: "Mensaje", fr: "Message" })}>
          <TextArea value={f["message"] ?? ""} onChange={on("message")} />
        </Field>
      </div>
      <ErrorNote message={error} />
      <div className="mt-7 flex flex-wrap gap-3">
        <SubmitButton pending={pending} label={t({ en: "Send inquiry", es: "Enviar consulta", fr: "Envoyer" })} />
        <WhatsAppButton context="business" variant="outline" />
      </div>
    </form>
  );
}

/* ----------------------------- volunteer form ---------------------------- */

export function VolunteerForm({ categories }: { categories: { id: string; label: string }[] }) {
  const { t } = useI18n();
  const [f, setF] = useState<Record<string, string>>({});
  const [cats, setCats] = useState<string[]>([]);
  const { pending, error, done, run } = useSubmitter(submitVolunteerInterest);
  const on = (k: string) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));

  if (done)
    return (
      <SuccessPanel
        title={{ en: "Volunteer interest received.", es: "Interés de voluntariado recibido.", fr: "Intérêt reçu." }}
        body={{
          en: "This registers volunteer interest only. It is not a confirmed volunteer assignment — the team will follow up as project stages and on-site needs are defined.",
          es: "Esto registra únicamente tu interés como voluntario. No es una asignación confirmada — el equipo dará seguimiento a medida que se definan las etapas del proyecto.",
          fr: "Ceci enregistre uniquement votre intérêt. Il ne s'agit pas d'une affectation confirmée.",
        }}
      />
    );

  return (
    <form
      className={FORM_CARD}
      onSubmit={(e) => {
        e.preventDefault();
        void run({
          first_name: f["first_name"] ?? "",
          last_name: f["last_name"],
          country: f["country"],
          location: f["location"],
          phone: f["phone"],
          whatsapp: f["whatsapp"],
          email: f["email"],
          languages: f["languages"],
          professional_background: f["professional_background"],
          skills: f["skills"],
          volunteer_categories: cats,
          availability: f["availability"],
          message: f["message"],
        });
      }}
    >
      <h3 className="display text-2xl">
        {t({ en: "Register volunteer interest", es: "Registrar interés de voluntariado", fr: "Inscrire un intérêt bénévole" })}
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label={t({ en: "First name", es: "Nombre", fr: "Prénom" })} required>
          <TextInput required value={f["first_name"] ?? ""} onChange={on("first_name")} autoComplete="given-name" />
        </Field>
        <Field label={t({ en: "Last name", es: "Apellidos", fr: "Nom" })}>
          <TextInput value={f["last_name"] ?? ""} onChange={on("last_name")} autoComplete="family-name" />
        </Field>
        <Field label={t({ en: "Country", es: "País", fr: "Pays" })}>
          <TextInput value={f["country"] ?? ""} onChange={on("country")} autoComplete="country-name" />
        </Field>
        <Field label={t({ en: "City / region", es: "Ciudad / región", fr: "Ville / région" })}>
          <TextInput value={f["location"] ?? ""} onChange={on("location")} />
        </Field>
        <Field label={t({ en: "Email", es: "Correo", fr: "Courriel" })}>
          <TextInput type="email" value={f["email"] ?? ""} onChange={on("email")} autoComplete="email" />
        </Field>
        <Field label="WhatsApp">
          <TextInput type="tel" value={f["whatsapp"] ?? ""} onChange={on("whatsapp")} />
        </Field>
        <Field label={t({ en: "Languages", es: "Idiomas", fr: "Langues" })}>
          <TextInput value={f["languages"] ?? ""} onChange={on("languages")} />
        </Field>
        <Field label={t({ en: "Availability", es: "Disponibilidad", fr: "Disponibilité" })}>
          <TextInput value={f["availability"] ?? ""} onChange={on("availability")} />
        </Field>
      </div>
      <div className="mt-6 space-y-5">
        <Field label={t({ en: "Where could you help?", es: "¿Dónde podrías ayudar?", fr: "Où pourriez-vous aider ?" })}>
          <ChipGroup
            options={categories}
            selected={cats}
            onToggle={(id) => setCats((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))}
          />
        </Field>
        <Field label={t({ en: "Professional background", es: "Experiencia profesional", fr: "Parcours professionnel" })}>
          <TextArea value={f["professional_background"] ?? ""} onChange={on("professional_background")} />
        </Field>
        <Field label={t({ en: "Skills", es: "Habilidades", fr: "Compétences" })}>
          <TextArea value={f["skills"] ?? ""} onChange={on("skills")} />
        </Field>
        <Field label={t({ en: "Message", es: "Mensaje", fr: "Message" })}>
          <TextArea value={f["message"] ?? ""} onChange={on("message")} />
        </Field>
      </div>
      <ErrorNote message={error} />
      <div className="mt-7 flex flex-wrap gap-3">
        <SubmitButton pending={pending} label={t({ en: "I can volunteer", es: "Puedo ser voluntario", fr: "Je peux aider" })} />
        <WhatsAppButton variant="outline" />
      </div>
    </form>
  );
}

/* ----------------------------- newsletter form --------------------------- */

export function NewsletterForm({ sourcePage }: { sourcePage: string }) {
  const { t, lang } = useI18n();
  const [f, setF] = useState<Record<string, string>>({});
  const { pending, error, done, run } = useSubmitter(subscribeToNewsletter);
  const on = (k: string) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));

  if (done)
    return (
      <p className="eyebrow rounded-lg border border-primary/30 bg-primary/5 px-5 py-4">
        {t({
          en: "You are on the project update list.",
          es: "Estás en la lista de actualizaciones del proyecto.",
          fr: "Vous êtes inscrit aux mises à jour du projet.",
        })}
      </p>
    );

  return (
    <form
      className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
      onSubmit={(e) => {
        e.preventDefault();
        void run({
          name: f["name"],
          email: f["email"] ?? "",
          country: f["country"],
          preferred_language: lang,
          source_page: sourcePage,
        });
      }}
    >
      <TextInput
        placeholder={t({ en: "Name", es: "Nombre", fr: "Nom" })}
        aria-label={t({ en: "Name", es: "Nombre", fr: "Nom" })}
        value={f["name"] ?? ""}
        onChange={on("name")}
      />
      <TextInput
        type="email"
        required
        placeholder={t({ en: "Email", es: "Correo", fr: "Courriel" })}
        aria-label={t({ en: "Email", es: "Correo", fr: "Courriel" })}
        value={f["email"] ?? ""}
        onChange={on("email")}
      />
      <SubmitButton pending={pending} label={t({ en: "Follow the project", es: "Seguir el proyecto", fr: "Suivre le projet" })} />
      <div className="sm:col-span-3">
        <ErrorNote message={error} />
      </div>
    </form>
  );
}
