import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/jaguey-grande")({
  component: Page,
});

function Page() {
  return null;
}
