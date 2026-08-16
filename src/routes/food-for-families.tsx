import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/food-for-families")({
  component: Page,
});

function Page() {
  return null;
}
