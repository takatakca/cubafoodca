import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useI18n, type T } from "@/i18n";
import { UI } from "@/content/site";

export function Section({
  children,
  className,
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "dark" | "soil" | "card" | "green";
  id?: string;
}) {
  const tones: Record<string, string> = {
    cream: "bg-background text-foreground",
    card: "bg-card text-card-foreground",
    dark: "bg-charcoal text-cream",
    soil: "bg-soil text-soil-foreground",
    green: "bg-primary text-primary-foreground",
  };
  return (
    <section id={id} className={cn("py-16 md:py-28", tones[tone], className)}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 opacity-70", className)}>
      <span className="inline-block h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

export function Headline({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return <Tag className={cn("headline mt-5 text-balance", className)}>{children}</Tag>;
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed opacity-85 md:text-xl", className)}>{children}</p>;
}

export function StatusTag({ children, tone = "amber" }: { children: ReactNode; tone?: "amber" | "green" | "muted" }) {
  const tones = {
    amber: "border-clay/60 text-clay",
    green: "border-primary/60 text-primary",
    muted: "border-current/30 opacity-70",
  };
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
        tones[tone],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {children}
    </span>
  );
}

export function ActionLink({
  to,
  href,
  children,
  variant = "solid",
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "cream";
  className?: string;
}) {
  const base =
    "eyebrow group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 transition-colors min-h-11";
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-primary/90",
    cream: "bg-cream text-charcoal hover:bg-cream/85",
    outline: "border border-current/35 hover:bg-current/10",
    ghost: "underline underline-offset-8 decoration-current/40 hover:decoration-current px-0",
  };
  const cls = cn(base, variants[variant], className);
  const inner = (
    <>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

export function EmptyState({ title, note }: { title: T | string; note?: T | string }) {
  const { t } = useI18n();
  return (
    <div className="rounded-lg border border-dashed border-current/25 bg-current/[0.03] p-8 text-center">
      <p className="eyebrow opacity-60">{t(title)}</p>
      <p className="mx-auto mt-3 max-w-md text-sm opacity-70">{t(note ?? UI.noData)}</p>
    </div>
  );
}

export function StatGrid({ items }: { items: { label: T | string; value: string }[] }) {
  const { t } = useI18n();
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <div key={i} className="bg-background p-6 text-foreground">
          <dt className="eyebrow opacity-55">{t(item.label)}</dt>
          <dd className="display mt-3 text-3xl md:text-4xl">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  tone = "dark",
  children,
}: {
  eyebrow?: T | string;
  title: T | string;
  lede?: T | string;
  tone?: "dark" | "soil" | "green";
  children?: ReactNode;
}) {
  const { t } = useI18n();
  const tones = {
    dark: "bg-charcoal text-cream",
    soil: "bg-soil text-soil-foreground",
    green: "bg-primary text-primary-foreground",
  };
  return (
    <header className={cn("pt-28 pb-16 md:pt-40 md:pb-24", tones[tone])}>
      <div className="shell">
        {eyebrow ? <Eyebrow>{t(eyebrow)}</Eyebrow> : null}
        <h1 className="poster mt-6 max-w-5xl text-balance">{t(title)}</h1>
        {lede ? <Lede>{t(lede)}</Lede> : null}
        {children ? <div className="mt-10 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
