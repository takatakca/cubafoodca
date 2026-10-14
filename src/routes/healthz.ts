import { createFileRoute } from "@tanstack/react-router";

// Non-secret release identity is injected by GitHub Actions during the build.
// Local builds without it report null and cannot pass production verification.
const builtSha = import.meta.env["VITE_CUBAFOOD_RELEASE_SHA"] as string | undefined;
const releaseSha = builtSha && /^[a-f0-9]{40}$/.test(builtSha) ? builtSha : null;

export const Route = createFileRoute("/healthz")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { ok: true, service: "cubafood-web", release_sha: releaseSha },
          { headers: { "Cache-Control": "no-store, max-age=0", "X-Content-Type-Options": "nosniff" } },
        ),
    },
  },
});
