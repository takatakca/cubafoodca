import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  component: Page,
});

function Page() {
  return null;
}
