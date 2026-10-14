# CUBAFOOD.CA — current deployment instructions

**Domain:** https://cubafood.ca · **Repo:** `takatakca/cubafoodca` · **Branch:** `main` · **Runtime:** Node.js/Passenger (Nitro) on MochaHost cPanel.

## Automated production path

GitHub push to `main` triggers `CUBAFOOD CI`, `CUBAFOOD Sitemap Integrity` and `Deploy CUBAFOOD to MochaHost`. The GitHub runner installs pinned dependencies, seeds real public media, builds Nitro, runs TS and lint, transfers a release archive using host-verified SSH, activates an immutable directory and restarts Passenger. **Never perform a heavy build on MochaHost.**

Required protected production settings are named in `.github/workflows/deploy-mochahost.yml`. Never commit a private SSH key, host fingerprints, Supabase secrets, privileged TAKATAK credentials or customer data. Only a public/publishable Supabase key may be supplied as a Vite variable.

## Verifying the exact live build

- GitHub injects the nonsecret `VITE_CUBAFOOD_RELEASE_SHA` from the triggered commit during build, including the manual recovery archive.
- `/healthz` returns `{"ok":true,"service":"cubafood-web","release_sha":"<40 hex SHA>"}` with no-store headers. A local/unversioned build may return null.
- Deployment first checks the active server release's embedded SHA using SSH, then requests the **public** `/healthz` and passes its response to `node scripts/verify-release-health.mjs RESPONSE_FILE EXPECTED_SHA`.
- A merely successful HTTP 200 or wrong/stale SHA **fails** the new check and enters the existing automatic rollback path. The workflow also checks 29 critical public routes and project media.
- Same-SHA green CI, sitemap and deployment runs constitute technical production evidence. Browser/mobile manual review is separate.

## Recover or roll back

The normal workflow atomically updates `current` and preserves `previous`, triggering Passenger via `tmp/restart.txt`. Failed post-activation checks invoke automated rollback. If GitHub-hosted SSH fails, follow `docs/MOCHAHOST_MANUAL_RECOVERY.md` for a checksum-verified cPanel operator-assisted release — it never claims to deploy by itself. Do not modify live data while fixing release routing.

After each deployment verify `/healthz`, `/`, `/journal/site-documentation-matanzas`, `/robots.txt`, `/sitemap.xml`, `/media/cubafood/field-1-poster.jpg` and staging-only participation flows.

**Verified baseline prior to SHA change:** [run 38610125772](https://github.com/takatakca/cubafoodca/actions/runs/38610125772) on `300997823d3fcd169543fee52244036f792f93f6`. Newer commits must be checked again.
