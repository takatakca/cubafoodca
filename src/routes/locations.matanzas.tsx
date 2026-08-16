import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/matanzas")({
  component: Page,
});

function Page() {
  return null;
}
