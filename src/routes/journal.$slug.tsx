import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/$slug")({
  component: Page,
});

function Page() {
  return null;
}
