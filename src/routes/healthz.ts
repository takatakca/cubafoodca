import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/healthz")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          ok: true,
          service: "cubafood-web",
        });
      },
    },
  },
});