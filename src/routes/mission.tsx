import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mission")({
  component: Page,
});

function Page() {
  return null;
}
