import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cuba")({
  component: Page,
});

function Page() {
  return null;
}
