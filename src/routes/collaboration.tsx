import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collaboration")({
  component: Page,
});

function Page() {
  return null;
}
