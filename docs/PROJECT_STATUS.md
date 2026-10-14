# CUBAFOOD.CA — project status

**Snapshot:** 2026-10-14. Repository: `takatakca/cubafoodca`; published branch: `main`.

## Last independently confirmed production baseline

- Full SHA `300997823d3fcd169543fee52244036f792f93f6`: [CI success](https://github.com/takatakca/cubafoodca/actions/runs/38610125815), [sitemap success](https://github.com/takatakca/cubafoodca/actions/runs/38610125840), [MochaHost production success](https://github.com/takatakca/cubafoodca/actions/runs/38610125772).
- That deployment checked SSH active release, HTTP health, 29 public routes and authentic project media.
- At session start, **0 open PRs**, **1 open local issue** (#14), former SSH issue #11 closed.
- A newer application commit `0c6565b95a9b0cfd1a1fd21904f89a72ecf5396b` adds exact SHA verification at `/healthz`; its CI and deployment must be evaluated separately.

## What exists

- Existing TanStack Start / React / Nitro / Vite editorial site for the Cuba–Canada agricultural collaboration, authentic field documentation and 29 public URLs.
- FR / EN / ES user interface; Cuba, Canada, farmers, partner and volunteer participation routes; documentary, journal, status and transparency pages.
- Supabase is CUBAFOOD-scoped operational submission storage, with anonymous browser INSERTs currently permitted; a lack of public SELECT does **not** prevent spam.
- GitHub Actions builds and deploys onto existing MochaHost Passenger/Node infrastructure. Site does not require Lovable runtime.
- Scope and facts: 24+ km denotes described corridor length **not area**; project coordination is not final government approval. Do not invent farm or approval metrics.

## What remains incomplete

- [#14](https://github.com/takatakca/cubafoodca/issues/14): approved privacy disclosure/consent, anti-abuse trusted edge, RLS/GRANT migration and staged tests.
- [TAKATAK master #161](https://github.com/takatakca/takatak-v1/issues/161): no live supported `cubafood` identity/entitlement/service event contract, so sign-in remains unavailable rather than fake.
- Browser/mobile/a11y and full end-to-end form tests still need verified staging coverage; Search Console account verification is external.

**Not 100% complete.** See `TASK_QUEUE.md` and `AGENT_HANDOFF.md`.
