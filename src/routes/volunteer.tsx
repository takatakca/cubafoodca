import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/volunteer")({
  component: Page,
});

function Page() {
  return null;
}
