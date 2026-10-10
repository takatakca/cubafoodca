# Work log

- 2026-10-10 | codex | codex/seed-media-before-nitro-build → pending PR | active | Seed the existing CUBAFOOD production media into public/media before the Nitro build so Nitro's production asset manifest serves the migrated files | validate CI, open PR, merge if green, re-run production deployment

- 2026-10-10 | codex | codex/simplify-media-migration-shell → pending PR | active | Simplify the media migration shell block to avoid GitHub Actions YAML/heredoc parsing failures | validate CI, open PR, merge if green, re-run production deployment

- 2026-10-10 | codex | codex/fix-deploy-workflow-yaml → pending PR | active | Fix GitHub Actions YAML parsing after media heredoc lines were emitted without the required workflow indentation | validate CI, open PR, merge if green, re-run production deployment

- 2026-10-10 | codex | codex/fix-media-migration → pending PR | active | Correct legacy media migration mapping after deployment reached activation but the first draft assumed one asset directory for all files | validate CI, open PR, merge if green, re-run deployment

- 2026-10-10 | codex | codex/mochahost-ssh-ipv4 → pending PR | active | Force IPv4 for MochaHost SSH/SCP after production deployment retries failed with Broken pipe before any remote change | validate CI, open PR, merge if green, re-run deployment

- 2026-10-10 | codex | codex/github-direct-takatak-ecosystem → PR #1 | tested | Removed Lovable coupling, restored direct GitHub/TanStack/Nitro deployment, documented TAKATAK boundary and passed typecheck/build/lint in GitHub CI | merge PR #1, then verify MochaHost production deployment

- 2026-10-09 | Lovable | managed branch → no PR | done | 16 CUBAFOOD visual proposals delivered as 4 inspected boards; no app code changes | review PDF; application unchanged; PR lookup unavailable (gh missing); Git handled by platform

Newest first, one line per piece of work. Rule: `AGENTS.md` › Work log rule.
Format: `YYYY-MM-DD | agent | branch → PR | status | what | next step`

- 2026-10-08 | claude (owner setup) | default branch | done | Added the work log rule, this log and the stop reminder | every agent follows AGENTS.md › Work log rule
