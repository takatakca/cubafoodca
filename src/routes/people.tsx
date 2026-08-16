import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/people")({
  component: Page,
});

function Page() {
  return null;
}
