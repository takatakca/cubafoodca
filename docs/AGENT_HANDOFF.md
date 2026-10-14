# CUBAFOOD.CA — developer agent handoff

**Recorded:** 2026-10-14 · **Repo:** `takatakca/cubafoodca` · **Branch:** `main`.

## Last task completed / files changed

- The previous verified production task finished at `300997823d3fcd169543fee52244036f792f93f6` with [CI](https://github.com/takatakca/cubafoodca/actions/runs/38610125815), [sitemap](https://github.com/takatakca/cubafoodca/actions/runs/38610125840), [deploy](https://github.com/takatakca/cubafoodca/actions/runs/38610125772): all success.
- Latest **application-code commit already pushed**: `0c6565b95a9b0cfd1a1fd21904f89a72ecf5396b`. It modifies `src/routes/healthz.ts`, `.github/workflows/deploy-mochahost.yml`, `.github/workflows/manual-recovery-release.yml`, `.github/workflows/ci.yml` and adds `scripts/verify-release-health.mjs`, `scripts/verify-release-health.test.mjs`.
- Current documentation task changes `AGENTS.md`, `WORKLOG.md`, `docs/PROJECT_STATUS.md`, `docs/TASK_QUEUE.md`, `docs/AGENT_HANDOFF.md`, `docs/DEPLOYMENT.md`, `docs/DECISIONS.md`, `docs/SEARCH_DISCOVERY.md` and `docs/TAKATAK_INTEGRATION_STATUS.md`. This documentation commit's SHA is resolved **after** the commit is created by reading GitHub `main`; it cannot be embedded recursively in itself.

## New incident and exact recovery

- GitHub automatic deployment [38613715778](https://github.com/takatakca/cubafoodca/actions/runs/38613715778) for `0c6565b95a9b0cfd1a1fd21904f89a72ecf5396b` **FAILED before activation** at `Verify existing production media source`, after all five SSH calls ended in `client_loop: send disconnect: Broken pipe`. This is a transport failure, **not proof media were missing**.
- The next commit removes that redundant remote media inspection, validates **all ten** field media files inside the already-built Nitro release, and retains SSH verification for actual remote activation plus exact public SHA and rollback. A new same-SHA deployment is required to verify the correction.

## Current task and actual checks

- Verify the **newest main SHA**, matching GitHub Actions runs (CI, sitemap, deployment), HTTP `/healthz` JSON `release_sha`, production critical routes and field media. No future deployment is claimed here.
- Pre-session runs on previous SHA were green, including an SSH-verified active release. The new application-code and documentation SHA(s) need fresh green run evidence.
- Required reproducible checks: `bun install --frozen-lockfile`; `bun run build`; `node --test scripts/verify-release-health.test.mjs`; `bun run typecheck`; `bun run lint`; `bun run sitemap:check`; `bash scripts/test-manual-release.sh`. These execute in GitHub Actions; only count actual successful results.
- `/healthz` deliberately returns null `release_sha` when no build-time SHA exists. The GitHub deploy refuses health responses from another/older SHA.

## Known blockers and permissions (no credentials here)

- [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): approved privacy and consent terms; authorized staging edge/RLS migration and security tests. Browser anonymous INSERT remains a bypass until server-side controls are implemented.
- [TAKATAK #161](https://github.com/takatakca/takatak-v1/issues/161): no live source app contract/entitlements; no invented authentication.
- Site/media deployment uses protected GitHub Actions production environment and SSH key/host verification. No secrets or participant PII belong in this file.
- Browser/manual mobile accessibility review and production Search Console ownership have not been independently verified.

## Deployment truth and next exact action

1. Read actual `main` HEAD, check CI/sitemap/deploy run `head_sha` equals it; if any failure, inspect failed job logs and repair on non-destructive new commit.
2. Confirm deploy checks **active SSH release SHA = public /healthz SHA = new main SHA**, plus 29 routes and media, before marking release successful.
3. Update this handoff with observed run IDs and verified SHA on the *next* code/doc update, and pursue first unclaimed executable P1 browser/form acceptance tests. Leave #14 and #161 blocked until authorized prerequisites.
