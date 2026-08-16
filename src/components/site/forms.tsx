import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useI18n, type T } from "@/i18n";
import { cn } from "@/lib/utils";
import type { ParticipantRecord } from "@/content/types";
import { WhatsAppButton } from "./whatsapp";
import type { WhatsAppContext } from "@/lib/contact";

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
}: {
  steps: StepDef[];
  sourcePage: string;
  country: string;
  participantTypeFallback: string;
  whatsappContext?: WhatsAppContext;
  submitLabel: T;
}) {
  const { t, lang } = useI18n();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [data, setData] = useState<Partial<ParticipantRecord>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (patch: Partial<ParticipantRecord>) => setData((d) => ({ ...d, ...patch }));
  const toggle = (id: string) =>
    setSelections((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const record: ParticipantRecord = useMemo(
    () => ({
      first_name: data.first_name ?? "",
      last_name: data.last_name ?? "",
      country,
      language: lang,
      participant_type: selections[0] ?? data.participant_type ?? participantTypeFallback,
      skills: selections.join(", "),
      source_page: sourcePage,
      status: "NEW",
      ...data,
    }),
    [data, selections, country, lang, participantTypeFallback, sourcePage],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Backend storage (Lovable Cloud `participants` table) is not connected yet.
    // The record shape is final so it can be persisted without changing this UI.
    console.info("participant record (pending backend)", record);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8">
        <p className="display text-2xl">
          {t({ en: "Thank you.", es: "Gracias.", fr: "Merci." })}
        </p>
        <p className="mt-3 max-w-prose text-sm opacity-75">
          {t({
            en: "Your details have been recorded in this browser. Online submission storage is being connected — to reach the project team immediately, use WhatsApp or email.",
            es: "Tus datos se han registrado en este navegador. El almacenamiento de envíos en línea se está conectando — para contactar al equipo del proyecto de inmediato, usa WhatsApp o correo.",
            fr: "Vos informations ont été enregistrées dans ce navigateur. L'enregistrement en ligne est en cours de connexion — pour joindre l'équipe immédiatement, utilisez WhatsApp ou le courriel.",
          })}
        </p>
        <div className="mt-6">
          <WhatsAppButton context={whatsappContext} />
        </div>
      </div>
    );
  }

  const current = steps[step]!;
  const last = step === steps.length - 1;

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 md:p-8">
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
          <button
            type="submit"
            className="eyebrow min-h-11 rounded-full bg-primary px-6 py-3 text-primary-foreground"
          >
            {t(submitLabel)}
          </button>
        )}
        <WhatsAppButton context={whatsappContext} variant="outline" />
      </div>
    </form>
  );
}
