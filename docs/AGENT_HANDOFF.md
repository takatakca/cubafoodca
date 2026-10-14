# CUBAFOOD.CA — agent handoff

**Updated:** 2026-10-14 · **Repository:** `takatakca/cubafoodca` · **Release branch:** `main`.

## Last confirmed successful deployed code

- **Commit:** `398cb40f04a846aa096409e4b243667f3f8a2c8b`.
- **Same-SHA results:** [CI 38623971204](https://github.com/takatakca/cubafoodca/actions/runs/38623971204), [sitemap 38623971435](https://github.com/takatakca/cubafoodca/actions/runs/38623971435), [MochaHost deployment 38623971248](https://github.com/takatakca/cubafoodca/actions/runs/38623971248) — all **success**.
- Release verified the active SHA via SSH and public /healthz, 29 published URLs, the three existing form shells (/cuba, /canada, /farmers), volunteer navigation, unpublished journal HTTP 404, robots/sitemap and project media.
- No participant test submissions were made to production.

## Last task finished

- Made the FR/EN/ES language switch resilient to denied browser storage in `src/i18n/index.tsx` + `src/i18n/preferences.ts`.
- Added five positive/negative Bun regression cases in `scripts/i18n-preferences.test.mjs`, wired into `.github/workflows/ci.yml` and `.github/workflows/deploy-mochahost.yml`.
- Fixed and tested public read-only route/site acceptance in earlier commits; `scripts/smoke-public-site.mjs` and `scripts/smoke-public-site.test.mjs` remain green.
- This update modifies only `docs/AGENT_HANDOFF.md`, `docs/TASK_QUEUE.md`, `docs/PROJECT_STATUS.md`, `WORKLOG.md`. Its own new commit SHA must be looked up **after push** (cannot self-reference it). A previous green run does not prove a new docs commit deployed.

## Current task

- Confirm same-SHA CI/sitemap/production for the documentation commit, then implement staging-safe headless browser interaction tests for FR/EN/ES switching, tab navigation, viewport and multi-step validation. Use mocked/staging API; never submit test data to production.
- Test commands already run **via GitHub Actions on code SHA above:** `bun install --frozen-lockfile`, `bun run build`, `bun run typecheck`, `bun run lint`, `node --test scripts/smoke-public-site.test.mjs`, `node --test scripts/verify-release-health.test.mjs`, `bun test scripts/i18n-preferences.test.mjs`, manual release-script checks, sitemap verification and the live read-only route smoke.
- No browser screenshot/mobile manual audit has been performed by this session; do not conflate server-rendered route tests with interactive browser testing.

## Known blockers and necessary access (never store secrets here)

- [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): authorized FR/EN/ES privacy terms, data controller, retention/deletion and distinct consent; approved trusted-edge abuse protection, rate limiting and Supabase anonymous INSERT/RLS migration, with a nonproduction environment and staging tests. Existing public forms remain active but vulnerable to anonymous abuse until migrated.
- [TAKATAK master #161](https://github.com/takatakca/takatak-v1/issues/161): no verified CUBAFOOD tenant registration, service identity or entitlement/API contract; do not activate fake auth or reuse other vertical credentials.
- Site-owner Search Console access and verified organizational/partner/project information must come from authorized stakeholders.
- GitHub Actions `production` environment contains deployment credentials. Never expose them or personal records.

## Next exact action

1. Fetch GitHub `main` SHA, list same-SHA CI/sitemap/deploy results and inspect any failing step; never assume the documented code SHA is still HEAD.
2. If the docs release succeeded, proceed with the next unclaimed, **non-mutating** P1 headless browser tests; if failed, fix and push cleanly.
3. Keep handoff, decisions, status and worklog current with evidence; revisit #14 and #161 only after legitimate authorization, without altering customer data.
