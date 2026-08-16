import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/land")({
  component: Page,
});

function Page() {
  return null;
}
