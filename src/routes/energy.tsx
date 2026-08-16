import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/energy")({
  component: Page,
});

function Page() {
  return null;
}
