# CUBAFOOD.CA — TAKATAK integration status

**Status date:** 2026-10-10

| Area | Status | Evidence / next step |
|---|---|---|
| GitHub source of truth | PRODUCTION VERIFIED | Main is deployed through GitHub Actions; production run 38039483045 succeeded. |
| Lovable build dependency | CODE COMPLETE | GitHub-first build/deployment no longer requires the Lovable service. Audit any remaining historical references separately. |
| CUBAFOOD local operational storage | CONFIGURED | Existing Supabase submission flows remain scoped to CUBAFOOD operational forms. |
| TAKATAK master identity | BLOCKED | Current master API is explicitly restricted to source application `1lv`. |
| CUBAFOOD master API contract | BLOCKED | TAKATAK V1 issue #161 tracks the required contract. |
| Live TAKATAK authentication | NOT CONFIGURED | Do not invent or bypass the master contract. |
| Tenant/entitlement integration | NOT CONFIGURED | Requires the approved CUBAFOOD contract. |
| Direct production deployment | PRODUCTION VERIFIED | Deployment run 38039483045 built, activated and verified main commit `ac6cc836878fe99157594dbc31b68228c519f408` on MochaHost. |
| Production media migration | PRODUCTION VERIFIED | Deployment run 38039483045 copied/served the migrated media and verified production media after activation. |
| Automated verification | CONFIGURED | TypeScript, production build, lint, release verification, SSH, health, critical routes and media checks are part of the pipeline. |

## Non-negotiable boundary

CUBAFOOD must remain independently usable while TAKATAK integration is unavailable.

No stale/expired authorization may grant privileged access. No client-provided role, tenant ID or master identity ID is trusted without server-side validation once the real integration is implemented.

## TAKATAK contract acceptance gates (issue #161)

CUBAFOOD integration must remain disabled until the TAKATAK master repository implements and tests an explicit `cubafood` source application contract. No existing `1lv` credential or route may be reused.

1. **Registration:** the master registers CUBAFOOD as its own product/application with explicit tenant boundaries.
2. **Service identity:** separate CUBAFOOD-specific credential, server-to-server only, with rotation, scope, expiry and auditability; never expose credentials in Vite client bundles.
3. **Verified user linking:** TAKATAK identity is linked only after verified user authentication; reject arbitrary client-supplied master identity IDs.
4. **Entitlements:** master verifies product and tenant membership server-side on every privileged operation; deny by default if unavailable or expired.
5. **Data ownership:** CUBAFOOD retains its local operational/project data; synchronize only permitted identity references, tenant-scoped relationship IDs and explicitly approved events.
6. **Event safety:** validate schema and tenant, enforce idempotency keys, reject replayed events, redact sensitive payloads and write traceable audit metadata.
7. **Environment separation:** staging credentials, URLs and fixtures must never be interchangeable with production.
8. **Failure behavior:** master downtime must not break public CUBAFOOD pages or local submission flows; privileged integration operations must fail closed, not fall back to mock authorization.
9. **Release evidence:** unit/integration tests for allowed and denied tenants, expired authorization, replay, duplicate events and unauthorized identity linking; staging smoke test; explicit production approval.

**Status:** Contract not implemented or verified. This document is an acceptance checklist, not a claim that any API endpoint exists.

**Dependency:** https://github.com/takatakca/takatak-v1/issues/161
