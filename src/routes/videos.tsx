import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/videos")({
  component: Page,
});

function Page() {
  return null;
}
