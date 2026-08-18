import { useI18n, type T } from "@/i18n";
import { cn } from "@/lib/utils";

export type StatusStage = { id: string; label: T };

export const PROJECT_STAGES: StatusStage[] = [
  { id: "2024", label: { en: "2024", es: "2024", fr: "2024" } },
  { id: "development", label: { en: "Development", es: "Desarrollo", fr: "Développement" } },
  { id: "coordination", label: { en: "Coordination", es: "Coordinación", fr: "Coordination" } },
  { id: "approval", label: { en: "Approval", es: "Aprobación", fr: "Approbation" } },
  { id: "land-prep", label: { en: "Land preparation", es: "Preparación de tierras", fr: "Préparation des terres" } },
];

/**
 * Reusable horizontal project-stage strip. Highlights the current stage.
 * `current` defaults to "approval" — the honest, real project status.
 */
export function ProjectStatusStrip({
  current = "approval",
  className,
}: {
  current?: string;
  className?: string;
}) {
  const { t } = useI18n();
  const currentIndex = PROJECT_STAGES.findIndex((s) => s.id === current);

  return (
    <div className={cn("w-full", className)}>
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0 sm:overflow-x-auto">
        {PROJECT_STAGES.map((stage, i) => {
          const isCurrent = stage.id === current;
          const isDone = currentIndex >= 0 && i < currentIndex;
          return (
            <li
              key={stage.id}
              className={cn(
                "relative flex min-w-[9rem] flex-1 items-center gap-3 border-current/15 px-4 py-3.5 sm:border-t-2 sm:px-5 sm:py-4",
                isCurrent
                  ? "border-clay bg-clay/10"
                  : isDone
                    ? "border-secondary/70 opacity-80"
                    : "border-current/20 opacity-50",
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full",
                  isCurrent ? "bg-clay" : isDone ? "bg-secondary" : "bg-current/40",
                )}
                aria-hidden
              />
              <span className={cn("eyebrow", isCurrent && "text-clay")}>{t(stage.label)}</span>
              {isCurrent ? (
                <span className="eyebrow ml-auto hidden shrink-0 rounded-full border border-clay/60 px-2 py-0.5 text-[10px] text-clay sm:inline-block">
                  {t({ en: "Current", es: "Actual", fr: "Actuel" })}
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      {currentIndex >= 0 ? (
        <p className="eyebrow mt-4 text-clay">
          {t({ en: "Current: approval process", es: "Actual: proceso de aprobación", fr: "Actuel : processus d'approbation" })}
        </p>
      ) : null}
    </div>
  );
}
