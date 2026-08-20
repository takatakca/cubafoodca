import { useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useI18n, type T } from "@/i18n";
import type { SourceRef, CropEntry } from "@/content/research";
import { SOIL_LAYERS } from "@/content/research";

/* ------------------------------------------------------------------ */
/* Status labels                                                       */
/* ------------------------------------------------------------------ */

export type StatusKind =
  | "REGIONAL_CONTEXT"
  | "PROJECT_FACT"
  | "CURRENT"
  | "PLANNED"
  | "PROPOSED"
  | "UNDER_EVALUATION"
  | "AWAITING_APPROVAL"
  | "FUTURE_DEVELOPMENT"
  | "NOT_YET_ACTIVE";

export const STATUS_LABEL: Record<StatusKind, T> = {
  REGIONAL_CONTEXT: { en: "Regional context", es: "Contexto regional", fr: "Contexte régional" },
  PROJECT_FACT: { en: "Project fact", es: "Dato del proyecto", fr: "Fait du projet" },
  CURRENT: { en: "Current", es: "Actual", fr: "Actuel" },
  PLANNED: { en: "Planned", es: "Planificado", fr: "Planifié" },
  PROPOSED: { en: "Proposed", es: "Propuesto", fr: "Proposé" },
  UNDER_EVALUATION: { en: "Under evaluation", es: "En evaluación", fr: "En évaluation" },
  AWAITING_APPROVAL: { en: "Awaiting approval", es: "En espera de aprobación", fr: "En attente d'approbation" },
  FUTURE_DEVELOPMENT: { en: "Future development", es: "Desarrollo futuro", fr: "Développement futur" },
  NOT_YET_ACTIVE: { en: "Not yet active", es: "Aún no activo", fr: "Pas encore actif" },
};

const STATUS_TONE: Record<StatusKind, string> = {
  REGIONAL_CONTEXT: "border-current/30 opacity-70",
  PROJECT_FACT: "border-primary/60 text-primary",
  CURRENT: "border-clay/70 text-clay",
  PLANNED: "border-current/35 opacity-80",
  PROPOSED: "border-current/35 opacity-80",
  UNDER_EVALUATION: "border-clay/60 text-clay",
  AWAITING_APPROVAL: "border-clay/60 text-clay",
  FUTURE_DEVELOPMENT: "border-current/25 opacity-60",
  NOT_YET_ACTIVE: "border-current/25 opacity-60",
};

export function StatusBadge({ status, className }: { status: StatusKind; className?: string }) {
  const { t } = useI18n();
  return (
    <span
      className={cn(
        "eyebrow inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[10px]",
        STATUS_TONE[status],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {t(STATUS_LABEL[status])}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  body,
  statuses = [],
  media,
  metrics,
  children,
  tone = "dark",
}: {
  eyebrow?: T | string;
  title: T | string;
  subtitle?: T | string;
  body?: T | string;
  statuses?: StatusKind[];
  media?: { video?: string; poster?: string; image?: string; alt?: string };
  metrics?: { label: T | string; value: string }[];
  children?: ReactNode;
  tone?: "dark" | "green" | "soil";
}) {
  const { t } = useI18n();
  const tones = {
    dark: "bg-charcoal text-cream",
    green: "bg-primary text-primary-foreground",
    soil: "bg-soil text-soil-foreground",
  };
  return (
    <header className={cn("relative isolate overflow-hidden", tones[tone])}>
      {media?.video ? (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          src={media.video}
          poster={media.poster ?? ""}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      ) : media?.image ? (
        <img
          src={media.image}
          alt={media.alt ?? ""}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          loading="eager"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/85" aria-hidden />
      <div className="shell pt-32 pb-16 md:pt-44 md:pb-24">
        {eyebrow ? <p className="eyebrow opacity-75">{t(eyebrow)}</p> : null}
        <h1 className="poster mt-6 max-w-5xl text-balance">{t(title)}</h1>
        {subtitle ? (
          <p className="display mt-4 max-w-4xl text-xl text-secondary md:text-3xl">{t(subtitle)}</p>
        ) : null}
        {body ? <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-85 md:text-lg">{t(body)}</p> : null}
        {statuses.length ? (
          <div className="mt-8 flex flex-wrap gap-2.5">
            {statuses.map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
        ) : null}
        {children ? <div className="mt-10 flex flex-wrap gap-3">{children}</div> : null}
        {metrics?.length ? (
          <dl className="mt-14 grid gap-px overflow-hidden rounded-lg bg-current/20 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div key={i} className={cn("p-6", tones[tone])}>
                <dt className="eyebrow opacity-60">{t(m.label)}</dt>
                <dd className="display mt-3 text-2xl md:text-3xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Chapter                                                             */
/* ------------------------------------------------------------------ */

export function SectionIntro({
  eyebrow,
  title,
  lede,
  status,
  className,
}: {
  eyebrow?: T | string;
  title: T | string;
  lede?: T | string;
  status?: StatusKind;
  className?: string;
}) {
  const { t } = useI18n();
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="eyebrow opacity-60">{t(eyebrow)}</p> : null}
      <h2 className="headline mt-4 text-balance">{t(title)}</h2>
      {lede ? <p className="mt-5 text-base leading-relaxed opacity-80 md:text-lg">{t(lede)}</p> : null}
      {status ? (
        <div className="mt-6">
          <StatusBadge status={status} />
        </div>
      ) : null}
    </div>
  );
}

export function EditorialChapter({
  number,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imagePosition = "right",
  quote,
  stat,
  status,
  tone = "cream",
  children,
  id,
}: {
  number?: string;
  eyebrow?: T | string;
  title: T | string;
  body?: (T | string)[] | T | string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "full";
  quote?: T | string;
  stat?: { value: string; label: T | string };
  status?: StatusKind;
  tone?: "cream" | "dark" | "soil" | "card";
  children?: ReactNode;
  id?: string;
}) {
  const { t } = useI18n();
  const tones = {
    cream: "bg-background text-foreground",
    card: "bg-card text-card-foreground",
    dark: "bg-charcoal text-cream",
    soil: "bg-soil text-soil-foreground",
  };
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

  const text = (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        {number ? <span className="display text-4xl text-clay md:text-5xl">{number}</span> : null}
        {eyebrow ? <p className="eyebrow opacity-60">{t(eyebrow)}</p> : null}
      </div>
      <h2 className="headline mt-4 text-balance">{t(title)}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-5 text-base leading-relaxed opacity-80 md:text-lg">
          {t(p)}
        </p>
      ))}
      {quote ? (
        <blockquote className="mt-8 border-l-2 border-clay pl-6">
          <p className="display text-xl leading-snug md:text-2xl">{t(quote)}</p>
        </blockquote>
      ) : null}
      {stat ? (
        <div className="mt-8">
          <p className="display text-4xl md:text-5xl">{stat.value}</p>
          <p className="eyebrow mt-2 opacity-60">{t(stat.label)}</p>
        </div>
      ) : null}
      {status ? (
        <div className="mt-8">
          <StatusBadge status={status} />
        </div>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );

  const figure = image ? (
    <figure className="overflow-hidden rounded-lg bg-current/5">
      <img src={image} alt={imageAlt ?? t(title)} loading="lazy" className="h-full w-full object-cover" />
    </figure>
  ) : null;

  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone])}>
      <div className="shell">
        {imagePosition === "full" || !figure ? (
          <div className="grid gap-10">
            {text}
            {figure}
          </div>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {imagePosition === "left" ? (
              <>
                <div className="order-2 lg:order-1">{figure}</div>
                <div className="order-1 lg:order-2">{text}</div>
              </>
            ) : (
              <>
                {text}
                {figure}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

export function SourceNotes({ sources }: { sources: SourceRef[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  if (!sources?.length) return null;
  return (
    <div className="mt-12 rounded-lg border border-current/15">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="eyebrow flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        {t({ en: "Sources & further reading", es: "Fuentes y lecturas", fr: "Sources et lectures" })}
        <span aria-hidden className={cn("transition-transform", open && "rotate-45")}>
          +
        </span>
      </button>
      {open ? (
        <ul className="space-y-3 border-t border-current/15 px-5 py-5">
          {sources.map((s) => (
            <li key={s.url} className="text-sm">
              <a href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70">
                {s.label}
              </a>
              <span className="opacity-55"> — {s.publisher}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Crops                                                               */
/* ------------------------------------------------------------------ */

export function CropCard({ crop }: { crop: CropEntry }) {
  const { t } = useI18n();
  const row = (label: T, value: T) => (
    <div className="border-t border-current/10 py-2.5">
      <dt className="eyebrow text-[10px] opacity-50">{t(label)}</dt>
      <dd className="mt-1 text-sm opacity-85">{t(value)}</dd>
    </div>
  );
  return (
    <article className="flex h-full flex-col rounded-lg border border-current/15 bg-card p-6 text-card-foreground">
      <p className="eyebrow opacity-55">{t(crop.family)}</p>
      <h3 className="display mt-2 text-2xl">{t(crop.name)}</h3>
      <p className="mt-3 text-sm leading-relaxed opacity-80">{t(crop.why)}</p>
      <dl className="mt-4">
        {row({ en: "Common use", es: "Uso común", fr: "Usage courant" }, crop.use)}
        {row({ en: "Water", es: "Agua", fr: "Eau" }, crop.water)}
        {row({ en: "Soil", es: "Suelo", fr: "Sol" }, crop.soil)}
        {row({ en: "Growing cycle", es: "Ciclo de cultivo", fr: "Cycle de culture" }, crop.cycle)}
        {row({ en: "Storage", es: "Almacenamiento", fr: "Stockage" }, crop.storage)}
      </dl>
      <div className="mt-auto pt-5">
        <StatusBadge status="UNDER_EVALUATION" />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Soil                                                                */
/* ------------------------------------------------------------------ */

const LAYER_FILL = ["bg-[#6b4a2f]", "bg-[#7a5535]", "bg-[#8a6440]", "bg-[#9c7a55]", "bg-[#b0906d]"];

export function SoilProfile() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden rounded-lg border border-current/15">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="relative min-h-[22rem] bg-[#4d7c3f]/20">
          <div className="absolute inset-x-0 top-0 h-10 bg-[#4d7c3f]/70" aria-hidden />
          <div className="flex h-full flex-col pt-10">
            {SOIL_LAYERS.map((layer, i) => (
              <div
                key={layer.id}
                className={cn("relative flex flex-1 items-center px-6", LAYER_FILL[i] ?? LAYER_FILL[4])}
              >
                <span className="eyebrow text-[10px] text-cream/90">
                  {String(i + 1).padStart(2, "0")} · {t(layer.label)}
                </span>
                <span className="eyebrow ml-auto text-[10px] text-cream/60">{layer.depth}</span>
              </div>
            ))}
          </div>
        </div>
        <ol className="divide-y divide-current/10 bg-card text-card-foreground">
          {SOIL_LAYERS.map((layer, i) => (
            <li key={layer.id} className="flex gap-5 p-6">
              <span className="display text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="display text-lg">{t(layer.label)}</h3>
                <p className="mt-1.5 text-sm opacity-75">{t(layer.note)}</p>
                <p className="eyebrow mt-2 text-[10px] opacity-45">{layer.depth}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process flow                                                        */
/* ------------------------------------------------------------------ */

export function ProcessFlow({
  steps,
  orientation = "horizontal",
  activeId,
}: {
  steps: { id: string; label: T | string; note?: T | string }[];
  orientation?: "horizontal" | "vertical";
  activeId?: string;
}) {
  const { t } = useI18n();
  if (orientation === "vertical") {
    return (
      <ol className="relative border-l border-current/20 pl-8">
        {steps.map((s, i) => (
          <li key={s.id} className="relative pb-9 last:pb-0">
            <span
              className={cn(
                "absolute -left-[2.15rem] mt-1.5 h-3 w-3 rounded-full border-2 border-current",
                s.id === activeId ? "bg-clay text-clay" : "bg-background",
              )}
              aria-hidden
            />
            <p className="eyebrow text-[10px] opacity-45">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="display mt-1 text-lg">{t(s.label)}</h3>
            {s.note ? <p className="mt-1.5 max-w-xl text-sm opacity-75">{t(s.note)}</p> : null}
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li
          key={s.id}
          className={cn(
            "relative rounded-lg border p-5",
            s.id === activeId ? "border-clay bg-clay/10" : "border-current/15 bg-current/[0.03]",
          )}
        >
          <p className="eyebrow text-[10px] opacity-45">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="display mt-1.5 text-lg">{t(s.label)}</h3>
          {s.note ? <p className="mt-1.5 text-sm opacity-75">{t(s.note)}</p> : null}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Media stage                                                         */
/* ------------------------------------------------------------------ */

export function MediaStage({
  src,
  poster,
  youtubeId,
  title,
  caption,
  className,
}: {
  src?: string;
  poster?: string;
  youtubeId?: string;
  title: string;
  caption?: T | string;
  className?: string;
}) {
  const { t } = useI18n();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    // Pause any other playing video on the page — only one active video.
    document.querySelectorAll("video").forEach((v) => {
      if (v !== el) v.pause();
    });
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  if (youtubeId) {
    return (
      <figure className={cn("overflow-hidden rounded-lg bg-charcoal", className)}>
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        {caption ? <figcaption className="p-4 text-sm opacity-70">{t(caption)}</figcaption> : null}
      </figure>
    );
  }

  if (!src) {
    return (
      <figure className={cn("overflow-hidden rounded-lg border border-current/15 bg-charcoal text-cream", className)}>
        <div
          className="flex aspect-video w-full items-center justify-center bg-cover bg-center p-6"
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        >
          <p className="eyebrow rounded-full border border-cream/40 px-4 py-2 text-center">
            {t({
              en: "Field documentary — coming soon",
              es: "Documental de campo — próximamente",
              fr: "Documentaire de terrain — bientôt",
            })}
          </p>
        </div>
        {caption ? <figcaption className="p-4 text-sm opacity-70">{t(caption)}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure className={cn("overflow-hidden rounded-lg bg-charcoal text-cream", className)}>
      <div className="relative">
        <video
          ref={ref}
          src={src}
          poster={poster ?? ""}
          playsInline
          muted={muted}
          preload="metadata"
          controls={playing}
          title={title}
          className="aspect-video w-full bg-charcoal object-cover"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />
        {!playing ? (
          <button
            type="button"
            onClick={toggle}
            aria-label={`Play: ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition-colors hover:bg-charcoal/15"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-charcoal">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setMuted((m) => !m);
            if (ref.current) ref.current.muted = !muted;
          }}
          className="eyebrow absolute bottom-3 right-3 min-h-9 rounded-full border border-cream/40 bg-charcoal/70 px-3 py-1.5 text-[10px] text-cream"
        >
          {muted ? t({ en: "Unmute", es: "Activar sonido", fr: "Activer le son" }) : t({ en: "Mute", es: "Silenciar", fr: "Couper" })}
        </button>
      </div>
      <figcaption className="flex flex-wrap items-center gap-3 p-4 text-sm opacity-75">
        <span className="display text-base">{title}</span>
        {caption ? <span className="opacity-70">{t(caption)}</span> : null}
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

export function RouteCard({
  to,
  title,
  note,
  kicker,
}: {
  to: string;
  title: T | string;
  note?: T | string;
  kicker?: T | string;
}) {
  const { t } = useI18n();
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-lg border border-current/15 bg-current/[0.03] p-6 transition-colors hover:border-clay/60 hover:bg-clay/5"
    >
      {kicker ? <p className="eyebrow text-[10px] opacity-50">{t(kicker)}</p> : null}
      <h3 className="display mt-2 text-xl">{t(title)}</h3>
      {note ? <p className="mt-2 text-sm opacity-75">{t(note)}</p> : null}
      <span aria-hidden className="eyebrow mt-5 inline-flex items-center gap-2 text-clay">
        →
      </span>
    </Link>
  );
}
