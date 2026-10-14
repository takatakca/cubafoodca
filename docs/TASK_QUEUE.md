# CUBAFOOD.CA — task queue

Read alongside `PROJECT_STATUS.md` and `AGENT_HANDOFF.md`. Choose the first **unclaimed, executable** item, and document evidence.

| Priority | Status | Acceptance |
|---|---|---|
| P0 | CODE PUSHED — VERIFY | SHA-based public `/healthz` and offline release verifier shipped in `0c6565b95a9b0cfd1a1fd21904f89a72ecf5396b`; require same-SHA green CI, sitemap and verified MochaHost deployment for the *latest* main commit. |
| P0 | BLOCKED — owner/legal | [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): approve FR/EN/ES privacy notice, controller/contact, processing purposes, data retention/deletion/transfers and consent (registration vs marketing). |
| P0 | BLOCKED — owner staging/migration authorization | #14: trusted server-edge validation, anti-bot/rate limiting, safe Supabase grants/RLS migration, staging tests for abuse, no public read, data isolation and legitimate submissions. Never disable live forms without backward-compatible staging proof. |
| P0 | BLOCKED — master service contract | [TAKATAK #161](https://github.com/takatakca/takatak-v1/issues/161): scoped app registration, server-side authentication, verified identity linking, tenant/entitlement enforcement, audit/replay protection and production approval. Do not reuse a 1LV credential. |
| P1 | IMPLEMENTED, DEPLOY VERIFICATION PENDING | Read-only production HTTP smoke validates published sitemap, robots, HTML titles, public form presence/required fields and true 404; unit tests use response fixtures. It does not send participant submissions. |
| P1 | NEXT EXECUTABLE | Automated browser/headless smoke of FR/EN/ES switch, keyboard navigation, mobile layout and multi-step form with mocked/staging API; do not POST to the live database. |
| P1 | EXECUTABLE | Verify public `robots.txt`, `sitemap.xml`, article/404 HTTP status and canonical tags after release; Search Console requires owner credentials. |
| P1 | EXECUTABLE | Review media performance and responsive image/video loading while keeping original field documentation. |
| P2 | OWNER EVIDENCE | Add verified land area, institutional approvals, partner identities, operational reports or crop/aid figures only when documented. |

Do not equate UI checks with server-side abuse controls; #14 remains a gate until the approved migration is independently proven.
