import { useI18n, type T } from "@/i18n";
import { FIELD_MEDIA } from "@/content/media";
import { cn } from "@/lib/utils";

type Layout = "triptych" | "cinema" | "stack" | "band";

const ALL = [FIELD_MEDIA.clip1, FIELD_MEDIA.clip2, FIELD_MEDIA.clip3, FIELD_MEDIA.clip4, FIELD_MEDIA.clip5];

/** Editorial composition of real field documentation posters. */
export function FieldMosaic({
  layout = "triptych",
  offset = 0,
  caption,
}: {
  layout?: Layout;
  offset?: number;
  caption?: T;
}) {
  const { t } = useI18n();
  const pick = (i: number) => ALL[(i + offset) % ALL.length]!.poster;
  const label = t({ en: "Field documentation — Matanzas", es: "Documentación de campo — Matanzas", fr: "Documentation de terrain — Matanzas" });

  const Img = ({ i, className }: { i: number; className?: string }) => (
    <div className={cn("group relative overflow-hidden rounded-sm bg-charcoal", className)}>
      <img
        src={pick(i)}
        alt={label}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
      />
      <div className="field-fade pointer-events-none absolute inset-0 opacity-60" />
      <span className="eyebrow absolute bottom-3 left-3 text-cream/90">{String(i + offset + 1).padStart(2, "0")}</span>
    </div>
  );

  const grids: Record<Layout, React.ReactNode> = {
    triptych: (
      <div className="grid gap-3 md:grid-cols-12 md:grid-rows-2 md:h-[34rem]">
        <Img i={0} className="aspect-4/3 md:col-span-7 md:row-span-2 md:aspect-auto" />
        <Img i={1} className="aspect-4/3 md:col-span-5 md:aspect-auto" />
        <Img i={2} className="aspect-4/3 md:col-span-5 md:aspect-auto" />
      </div>
    ),
    cinema: (
      <div className="grid gap-3">
        <Img i={0} className="aspect-video md:aspect-[21/9]" />
        <div className="grid grid-cols-3 gap-3">
          <Img i={1} className="aspect-4/3" />
          <Img i={2} className="aspect-4/3" />
          <Img i={3} className="aspect-4/3" />
        </div>
      </div>
    ),
    stack: (
      <div className="grid gap-3 md:grid-cols-3">
        <Img i={0} className="aspect-3/4" />
        <Img i={1} className="aspect-3/4 md:translate-y-12" />
        <Img i={2} className="aspect-3/4" />
      </div>
    ),
    band: (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Img key={i} i={i} className={cn("aspect-3/4", i === 4 && "hidden md:block")} />
        ))}
      </div>
    ),
  };

  return (
    <section className="bg-background py-14 md:py-20">
      <div className="shell">
        <div className="mb-6 flex items-end justify-between gap-6 border-b border-border pb-4">
          <p className="eyebrow text-primary">{label}</p>
          {caption ? <p className="max-w-md text-right text-sm text-muted-foreground">{t(caption)}</p> : null}
        </div>
        {grids[layout]}
      </div>
    </section>
  );
}
