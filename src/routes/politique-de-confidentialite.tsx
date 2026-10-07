import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { PageIntro, Section } from "@/components/site/primitives";
import { POLICY_PAGES } from "@/content/research";
import { seoHead } from "@/seo/head";

// Renders the privacy text that already lives in src/content/research.ts (POLICY_PAGES.privacy).
const POLICY = POLICY_PAGES.privacy;

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () =>
    seoHead({
      title: "Confidentialité | CUBAFOOD.CA",
      description: "Ce que nous collectons, pourquoi, et ce que nous ne ferons jamais.",
      path: "/politique-de-confidentialite",
    }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <>
      <PageIntro title={POLICY.title} lede={POLICY.lede} />
      <Section>
        <div className="max-w-3xl space-y-10">
          {POLICY.sections.map((section) => (
            <section key={section.h.en}>
              <h2 className="display text-2xl">{t(section.h)}</h2>
              <p className="mt-3 text-lg leading-relaxed opacity-85">{t(section.p)}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
