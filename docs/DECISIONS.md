# CUBAFOOD.CA — decisions register

**Recorded:** 2026-10-14. Future unapproved plans are not claimed as implemented.

| ID | Decision | Safety rationale |
|---|---|---|
| D01 | GitHub `main` is the source of truth; GitHub Actions builds TanStack Start/React/Nitro off-server and deploys to MochaHost. | Never reintroduce Lovable runtime or build on limited cPanel host. |
| D02 | CUBAFOOD retains independent brand/site, media, editorial content and local operational Supabase data. | TAKATAK is the master identity authority only under explicitly verified tenant-scoped contract. |
| D03 | TAKATAK Auth, entitlements and event sync remain unavailable until master issue `takatak-v1#161` is implemented, staged and authorized. | Never reuse `1lv` service identity, invent routes or trust client privileges. |
| D04 | Do not change production Supabase RLS/grants or claim privacy compliance without sign-off. | CUBAFOOD #14 needs legal notice and consent, approved server-edge migration, staging security evidence. |
| D05 | Publish only authentic project documentation and verified facts. | 24+ km is described corridor *length*, not surveyed area; do not invent approved partners, harvests or reports. |
| D06 | FR/EN/ES are translated on the same real public URLs; sitemap is generated from published routes. | Never invent locale URLs or publication timestamps. |
| D07 | Production success requires exact SHA match from public build and active release, not only HTTP 200. | Build-time non-secret SHA, no-store `/healthz`, automated mismatch failure and rollback. |
| D08 | Missing contact configuration must not imply a working email/WhatsApp transport. | Continue showing truthful contact routes until authorized owner contact details are configured. |

Amend these decisions with repo evidence before changing integration, data, release or factual publication policies.
