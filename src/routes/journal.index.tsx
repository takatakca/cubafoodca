import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  component: Page,
});

function Page() {
  return null;
}
