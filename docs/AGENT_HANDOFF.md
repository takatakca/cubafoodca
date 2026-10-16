# CUBAFOOD.CA — Agent handoff

**Updated:** 2026-10-16 · Repository: `takatakca/cubafoodca` · Branch: `main`.

## Last verified production release

- Code SHA before this change: `e3f766012d1184b7945539001d750acebe741ccb`.
- Same-SHA **success**: [CI 38625132202](https://github.com/takatakca/cubafoodca/actions/runs/38625132202), [sitemap 38625132229](https://github.com/takatakca/cubafoodca/actions/runs/38625132229), [MochaHost deployment 38625132193](https://github.com/takatakca/cubafoodca/actions/runs/38625132193), [Chrome Browser QA rerun 38625309171](https://github.com/takatakca/cubafoodca/actions/runs/38625309171).
- Browser QA first run 38625158556 failed; rerun succeeded without a code change. Inspect logs before declaring any future intermittent run stable.
- Production QA tests language FR/EN/ES, navigation, mobile overflow, keyboard focus, unavailable localStorage and first form-step validation, without submitting personal data.

## Task completed this session

- Verified current HEAD and the exact workflow evidence. Improved `scripts/browser-qa.mjs` to **fail**, not silently succeed, if `/healthz` identifies a different SHA than the triggered workflow.
- Updated `docs/PROJECT_STATUS.md`, `docs/TASK_QUEUE.md`, `docs/AGENT_HANDOFF.md` and `WORKLOG.md`. This commit's own SHA must be resolved after push; no future deployment is claimed in advance.

## Current task, commands and verification

- Observe same-SHA runs on the **new commit**: CI, sitemap, production and triggered Browser QA.
- Runner commands include `bun install --frozen-lockfile`, `bun run build`, `bun run typecheck`, `bun run lint`, `bun run sitemap:check`, `node --test scripts/smoke-public-site.test.mjs`, `node --test scripts/verify-release-health.test.mjs`, `bun test scripts/i18n-preferences.test.mjs`, and `node scripts/browser-qa.mjs https://cubafood.ca`. Only mark commands actually run by Actions as completed.
- Browser QA never sends a recruitment POST. Browser interaction tests are not staging end-to-end database verification.

## Known blockers and access required

- [CUBAFOOD #14](https://github.com/takatakca/cubafoodca/issues/14): approve FR/EN/ES privacy disclosures, separate marketing consent, controller/contact/retention; authorize staging trusted-edge anti-bot and Supabase INSERT/RLS migration with production-safe rollback.
- [TAKATAK master #161](https://github.com/takatakca/takatak-v1/issues/161): approved CUBAFOOD-scoped identity, service credential, tenant/entitlement APIs and verified test coverage. Do not invent integrations.
- Need authorized nonproduction form test environment and owner Google Search Console access for optional later checks; all production credentials remain in GitHub Actions protected environment, not in docs.

## Next exact action

1. Read newest `main` SHA and all workflows sharing that SHA. Diagnose failures via per-job logs, keep release rollback/health gates.
2. If all green, continue safe P1 SEO/canonical checks and responsive-media review. No synthetic participant insertion on production.
3. Keep this handoff up-to-date before another session ends and do not claim 100% completion until #14 and #161 are resolved.
