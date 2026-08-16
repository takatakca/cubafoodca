import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reports")({
  component: Page,
});

function Page() {
  return null;
}
