import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { UI } from "@/content/site";
import { whatsappLink, emailLink, type WhatsAppContext } from "@/lib/contact";
import { cn } from "@/lib/utils";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-5 w-5 fill-current", className)}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.52 3.76 1.42 5.32L2 22l4.98-1.58a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.83-4.4 9.83-9.84C21.88 6.4 17.47 2 12.04 2Zm0 17.96h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.05.97.98-2.97-.2-.31a8.06 8.06 0 0 1-1.24-4.3c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.17 8.16Zm4.48-6.11c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.1.16 1.52.1.46-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.3Z" />
    </svg>
  );
}

export function WhatsAppButton({
  context = "general",
  className,
  label,
  variant = "solid",
}: {
  context?: WhatsAppContext;
  className?: string;
  label?: string;
  variant?: "solid" | "outline";
}) {
  const { t } = useI18n();
  const href = whatsappLink(context);
  const text = label ?? t(UI.whatsapp);
  const cls = cn(
    "eyebrow inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 transition-colors",
    variant === "solid"
      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      : "border border-current/35 hover:bg-current/10",
    className,
  );

  if (!href) {
    return (
      <Link to="/contact" className={cls}>
        <WhatsAppGlyph />
        {text}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      <WhatsAppGlyph />
      {text}
    </a>
  );
}

export function EmailButton({ subject, className }: { subject?: string; className?: string }) {
  const { t } = useI18n();
  const href = emailLink(subject);
  const cls = cn(
    "eyebrow inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-current/35 px-6 py-3.5 transition-colors hover:bg-current/10",
    className,
  );
  if (!href) {
    return (
      <Link to="/contact" className={cls}>
        {t(UI.email)}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {t(UI.email)}
    </a>
  );
}

export function WhatsAppFloat() {
  const { t } = useI18n();
  const href = whatsappLink("general");
  const label = t(UI.whatsapp);
  const cls =
    "fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[var(--shadow-plate)] transition-transform hover:scale-105 md:h-14 md:w-14";
  if (!href) {
    return (
      <Link to="/contact" className={cls} aria-label={label} title={label}>
        <WhatsAppGlyph className="h-7 w-7" />
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls} aria-label={label} title={label}>
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
