# CUBAFOOD.CA — TAKATAK ecosystem boundary

## Product identity

- Product: CUBAFOOD.CA
- Repository: `takatakca/cubafoodca`
- Master ecosystem repository: `takatakca/takatak-v1`
- Production domain: `https://cubafood.ca`
- Deployment target: MochaHost
- Source of truth: GitHub

CUBAFOOD remains an independently deployable application and retains its project, agricultural, participant and operational workflows.

TAKATAK is the central ecosystem identity and authorized integration authority. CUBAFOOD must not create a second global TAKATAK identity system.

## Current integration boundary

The inspected `takatak-v1` master API is currently scoped to the `1lv` source application. Its authentication, identity resolution, merchant resolution and event ingestion code reject other source applications.

Therefore CUBAFOOD does **not** call an undocumented TAKATAK endpoint and does not reuse the `1lv` credential.

A dedicated CUBAFOOD contract is tracked in TAKATAK V1 issue #161.

## Data ownership

CUBAFOOD operational/project data stays in the CUBAFOOD context unless an approved integration contract defines a specific synchronization.

The future TAKATAK integration may exchange only the minimum authorized identity, membership, entitlement and event references required by the contract. It must not become an unrestricted shared customer database.

## Authentication

The public CUBAFOOD header currently provides a demo account interface only. It does not create accounts or claim a user is authenticated.

When TAKATAK Auth exposes an authorized CUBAFOOD contract, the real flow should replace the demo behavior without creating a parallel global identity authority.

Supabase remains an operational submission store for public CUBAFOOD forms where already required by the application. Supabase session persistence/auth state is disabled in the browser; it is not the CUBAFOOD master identity.

## Required evidence before live TAKATAK integration

1. Approved CUBAFOOD product/source registration.
2. CUBAFOOD-specific service credential or signing contract.
3. Documented endpoint and payload schema.
4. Tenant/business membership rules.
5. Product entitlement rules.
6. Identity-linking rules.
7. Event/idempotency/replay rules.
8. Staging verification.
9. Production verification.

No endpoint is considered operational merely because code or environment variables exist.
