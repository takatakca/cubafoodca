import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/seo/head";

export const Route = createFileRoute("/journal/$slug")({
  // Page not written yet (renders nothing): keep it out of search results until it has content.
  head: () => seoHead({ noindex: true }),
  component: Page,
});

function Page() {
  return null;
}
