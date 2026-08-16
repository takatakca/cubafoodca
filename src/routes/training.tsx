import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/training")({
  component: Page,
});

function Page() {
  return null;
}
