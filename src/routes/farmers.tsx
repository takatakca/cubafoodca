import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farmers")({
  component: Page,
});

function Page() {
  return null;
}
