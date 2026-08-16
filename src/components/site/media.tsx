import { useRef, useState } from "react";
import { useI18n, type T } from "@/i18n";
import { cn } from "@/lib/utils";

/** Autoplaying, muted background footage. Real project documentation only. */
export function BackgroundVideo({
  src,
  poster,
  className,
  label,
}: {
  src: string;
  poster: string;
  className?: string;
  label: string;
}) {
  return (
    <video
      className={cn("h-full w-full object-cover", className)}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}

export function VideoPlayer({
  src,
  poster,
  title,
  className,
}: {
  src: string;
  poster: string;
  title: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-charcoal", className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        className="aspect-video h-full w-full bg-charcoal object-cover"
        title={title}
      />
      {!started ? (
        <button
          type="button"
          onClick={() => {
            setStarted(true);
            void ref.current?.play();
          }}
          className="absolute inset-0 flex items-center justify-center bg-charcoal/25 transition-colors hover:bg-charcoal/10"
          aria-label={`Play: ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-charcoal">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}

/** Before / after documentation slot. Renders honest empty states until real images exist. */
export function BeforeAfter({
  title,
  before,
  after,
  note,
}: {
  title: T | string;
  before?: string;
  after?: string;
  note?: T | string;
}) {
  const { t } = useI18n();
  const cell = (label: string, src?: string) => (
    <figure className="relative overflow-hidden rounded-lg border border-border bg-muted">
      <div className="aspect-4/3 w-full">
        {src ? (
          <img src={src} alt={`${t(title)} — ${label}`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <p className="text-xs opacity-55">
              {t({
                en: "Documentation will be published when this stage begins.",
                es: "La documentación se publicará cuando comience esta etapa.",
                fr: "La documentation sera publiée au début de cette étape.",
              })}
            </p>
          </div>
        )}
      </div>
      <figcaption className="eyebrow absolute left-3 top-3 rounded-full bg-charcoal/85 px-3 py-1.5 text-cream">
        {label}
      </figcaption>
    </figure>
  );

  return (
    <div>
      <h3 className="display text-xl">{t(title)}</h3>
      {note ? <p className="mt-2 text-sm opacity-70">{t(note)}</p> : null}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {cell("Before", before)}
        {cell("After", after)}
      </div>
    </div>
  );
}
