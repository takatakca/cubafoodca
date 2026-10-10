# CUBAFOOD.CA — TAKATAK integration status

**Status date:** 2026-10-10

| Area | Status | Evidence / next step |
|---|---|---|
| GitHub source of truth | CODE COMPLETE | CUBAFOOD development is being moved to direct GitHub workflow. |
| Lovable build dependency | CODE COMPLETE | Lovable Vite wrapper, runtime error reporter, preview auth broker, asset materializer and project metadata are being removed. |
| CUBAFOOD local operational storage | CONFIGURED | Existing Supabase submission flows remain scoped to CUBAFOOD operational forms. |
| TAKATAK master identity | BLOCKED | Current master API is explicitly restricted to source application `1lv`. |
| CUBAFOOD master API contract | BLOCKED | TAKATAK V1 issue #161 tracks the required contract. |
| Live TAKATAK authentication | NOT CONFIGURED | Do not invent or bypass the master contract. |
| Tenant/entitlement integration | NOT CONFIGURED | Requires the approved CUBAFOOD contract. |
| Direct production deployment | CONFIGURED | GitHub Actions builds and deploys the tested `main` commit to MochaHost. |
| Production media migration | IN PROGRESS | The first GitHub-first release copies existing media from the current production release into `/media/cubafood/`. |
| Automated verification | CONFIGURED | TypeScript, production build, lint, release verification, SSH, health, critical routes and media checks are part of the pipeline. |

## Non-negotiable boundary

CUBAFOOD must remain independently usable while TAKATAK integration is unavailable.

No stale/expired authorization may grant privileged access. No client-provided role, tenant ID or master identity ID is trusted without server-side validation once the real integration is implemented.
