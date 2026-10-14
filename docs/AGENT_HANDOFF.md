# CUBAFOOD.CA — agent handoff

**Session:** 2026-10-14 · **Repo:** `takatakca/cubafoodca` · **Branch:** `main`.

## Last independently completed production release

- SHA: `69ea96f85ea8f55a0c84620d9bf9911509b605ae`.
- [CUBAFOOD CI run 38614407296](https://github.com/takatakca/cubafoodca/actions/runs/38614407296): success.
- [Sitemap run 38614407242](https://github.com/takatakca/cubafoodca/actions/runs/38614407242): success.
- [MochaHost deploy run 38614407289](https://github.com/takatakca/cubafoodca/actions/runs/38614407289): success, including active SHA, public /healthz SHA, critical routes and media.

## Current task and changed files

- Current change: add `scripts/smoke-public-site.mjs` and `scripts/smoke-public-site.test.mjs`; include fixture-only tests in `.github/workflows/ci.yml` and a read-only live smoke gate in `.github/workflows/deploy-mochahost.yml`.
- It reads the real published sitemap and robots.txt, verifies every listed HTML route, confirms the four participation forms have required fields, and checks an unpublished journal slug has HTTP 404. No POST, no test participant data, no Supabase mutations.
- Updated `docs/TASK_QUEUE.md`, `docs/PROJECT_STATUS.md`, `WORKLOG.md` and this handoff.
- **Latest pushed SHA for this change:** inspect GitHub main after commit creation (self-reference cannot be included in same Git commit). Its CI and deployment are **not yet confirmed when this document is written**.

## Commands and acceptance

- CI runs `bun install --frozen-lockfile`, `bun run build`, `node --test scripts/verify-release-health.test.mjs`, `node --test scripts/smoke-public-site.test.mjs`, `bun run typecheck`, `bun run lint` and cPanel recovery test.
- Deployment checks immutable artifact and SSH pointer, `node scripts/verify-release-health.mjs RESPONSE_FILE EXPECTED_SHA`, then `node scripts/smoke-public-site.mjs https://cubafood.ca` before declaring success, followed by media check. An error after activation invokes existing rollback.
- Green statuses must match current HEAD; do not infer success from previous SHA or docs alone.

## Open blockers / required access

- [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): approved FR/EN/ES privacy/consent text and authorized staging edge anti-bot/rate limit/RLS migration. Anonymous Supabase direct browser INSERT remains insecure against automation. Do not simulate legal approval or change production grants without a rollout plan.
- [TAKATAK #161](https://github.com/takatakca/takatak-v1/issues/161): independent CUBAFOOD master identity/entitlement contract not available. No reuse of other vertical keys.
- Browser/mobile/a11y interactive tests, real contact information, and Google Search Console owner validation remain separate tasks. Authenticated staging/test credentials may be needed; never place secrets in GitHub commits or this document.

## Exact next action

1. Read newest `main` SHA, examine its CI / sitemap / MochaHost deploy runs. If public smoke fails, inspect failure and correct code or site without disabling the gate; rerun with a new commit.
2. Update handoff with exact successful SHA and run IDs on the next commit.
3. Build next isolated headless browser tests for FR/EN/ES and forms with intercepted submission endpoints; never send synthetic registrations to production.
