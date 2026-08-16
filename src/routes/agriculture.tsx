import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agriculture")({
  component: Page,
});

function Page() {
  return null;
}
