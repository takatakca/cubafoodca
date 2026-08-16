import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project")({
  component: Page,
});

function Page() {
  return null;
}
