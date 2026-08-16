import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/needs")({
  component: Page,
});

function Page() {
  return null;
}
