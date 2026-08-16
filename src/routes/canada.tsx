import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/canada")({
  component: Page,
});

function Page() {
  return null;
}
