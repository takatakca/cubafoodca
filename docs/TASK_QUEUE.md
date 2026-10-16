# CUBAFOOD.CA — task queue

Read alongside `PROJECT_STATUS.md` and `AGENT_HANDOFF.md`. Choose the first **unclaimed, executable** item, and document evidence.

| Priority | Status | Acceptance |
|---|---|---|
| P0 | CODE PUSHED — VERIFY | SHA-based public `/healthz` and offline release verifier shipped in `0c6565b95a9b0cfd1a1fd21904f89a72ecf5396b`; require same-SHA green CI, sitemap and verified MochaHost deployment for the *latest* main commit. |
| P0 | BLOCKED — owner/legal | [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): approve FR/EN/ES privacy notice, controller/contact, processing purposes, data retention/deletion/transfers and consent (registration vs marketing). |
| P0 | BLOCKED — owner staging/migration authorization | #14: trusted server-edge validation, anti-bot/rate limiting, safe Supabase grants/RLS migration, staging tests for abuse, no public read, data isolation and legitimate submissions. Never disable live forms without backward-compatible staging proof. |
| P0 | BLOCKED — master service contract | [TAKATAK #161](https://github.com/takatakca/takatak-v1/issues/161): scoped app registration, server-side authentication, verified identity linking, tenant/entitlement enforcement, audit/replay protection and production approval. Do not reuse a 1LV credential. |
| P1 | DONE — production run 38623254684 | Read-only HTTP smoke validates sitemap, robots, HTML titles, 3 actual form pages, volunteer links and HTTP 404 with no synthetic submissions. |
| P1 | DONE — code SHA 398cb40f | Browser storage-denied FR/EN/ES selection guarded and tested with 5 Bun regression cases; [CI](https://github.com/takatakca/cubafoodca/actions/runs/38623971204) and [MochaHost](https://github.com/takatakca/cubafoodca/actions/runs/38623971248) verified. |
| P1 | DONE (read-only subset) | Chrome browser QA verifies language, keyboard focus, mobile overflow, and first-step form validation without submitting [run 38625309171](https://github.com/takatakca/cubafoodca/actions/runs/38625309171). Staging-backed end-to-end submission still requires approved environment. |
| P1 | NEXT EXECUTABLE | Verify public `robots.txt`, `sitemap.xml`, article/404 HTTP status and canonical tags after release; Search Console requires owner credentials. |
| P1 | EXECUTABLE | Review media performance and responsive image/video loading while keeping original field documentation. |
| P2 | OWNER EVIDENCE | Add verified land area, institutional approvals, partner identities, operational reports or crop/aid figures only when documented. |

Do not equate UI checks with server-side abuse controls; #14 remains a gate until the approved migration is independently proven.
