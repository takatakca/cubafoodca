import { useI18n } from "@/i18n";
import { MILESTONES } from "@/content/timeline";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function ProjectTimeline({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const items = compact ? MILESTONES.slice(0, 6) : MILESTONES;

  return (
    <>
      {/* Vertical — mobile & tablet */}
      <ol className="relative lg:hidden">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-current/20" aria-hidden />
        {items.map((m, i) => (
          <Reveal as="li" key={m.id} delay={i * 60} className="relative pl-9 pb-10 last:pb-0">
            <span
              className={cn(
                "absolute left-0 top-1.5 h-4 w-4 rounded-full border-2",
                m.state === "active"
                  ? "border-clay bg-clay"
                  : m.state === "done"
                    ? "border-secondary bg-secondary"
                    : "border-current/35 bg-transparent",
              )}
              aria-hidden
            />
            {m.year ? <p className="display text-3xl text-secondary">{m.year}</p> : null}
            <h3 className="display mt-1 text-lg">{t(m.title)}</h3>
            {m.state === "active" ? (
              <span className="eyebrow mt-2 inline-block rounded-full border border-clay/60 px-2.5 py-1 text-clay">
                {t({ en: "Current stage", es: "Etapa actual", fr: "Étape actuelle" })}
              </span>
            ) : null}
            <p className="mt-2 max-w-prose text-sm leading-relaxed opacity-70">{t(m.description)}</p>
          </Reveal>
        ))}
      </ol>

      {/* Horizontal — desktop */}
      <div className="hidden lg:block">
        <div className="relative mt-4 overflow-x-auto pb-4">
          <span className="absolute left-0 right-0 top-[9px] h-px bg-current/20" aria-hidden />
          <ol className="flex min-w-full gap-6">
            {items.map((m, i) => (
              <Reveal
                as="li"
                key={m.id}
                delay={i * 70}
                className="relative min-w-[15rem] flex-1 pt-8"
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[19px] w-[19px] rounded-full border-2",
                    m.state === "active"
                      ? "border-clay bg-clay"
                      : m.state === "done"
                        ? "border-secondary bg-secondary"
                        : "border-current/35",
                  )}
                  aria-hidden
                />
                {m.year ? <p className="display text-3xl text-secondary">{m.year}</p> : null}
                <h3 className="display mt-1 text-base">{t(m.title)}</h3>
                {m.state === "active" ? (
                  <span className="eyebrow mt-2 inline-block rounded-full border border-clay/60 px-2.5 py-1 text-clay">
                    {t({ en: "Current stage", es: "Etapa actual", fr: "Étape actuelle" })}
                  </span>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed opacity-70">{t(m.description)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
