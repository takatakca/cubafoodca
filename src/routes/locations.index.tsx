import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locations")({
  component: Page,
});

function Page() {
  return null;
}
