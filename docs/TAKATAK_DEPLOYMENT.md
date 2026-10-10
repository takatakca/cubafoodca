# CUBAFOOD.CA — GitHub-first deployment

## Production flow

`GitHub commit` → `CUBAFOOD CI` → `Build + typecheck + lint` → `MochaHost deployment` → `health/routes/media verification`

Production target:

- Domain: `https://cubafood.ca`
- Host: MochaHost
- Application root: configured through GitHub Actions production secrets
- Runtime: Node.js/Nitro release under the existing MochaHost release/current/previous structure

The application is built in GitHub Actions. The production host does not need to build the application.

## Release safety

Each deployment:

1. checks the exact Git commit,
2. installs the locked dependencies,
3. validates deployment configuration,
4. type-checks,
5. lints,
6. builds a Node.js Nitro release,
7. verifies the release artifact,
8. uploads an immutable archive,
9. verifies the upload,
10. extracts into a staging directory,
11. verifies the release SHA,
12. atomically switches `current`,
13. requests the Passenger restart,
14. verifies the active release,
15. verifies `/healthz` and critical routes,
16. verifies the CUBAFOOD media endpoint,
17. keeps rollback information and performs automatic rollback on activation failure.

## Media migration

The former build downloaded media from a vendor-managed asset path. The GitHub-first build no longer performs that download.

During the migration, the deployment pipeline fetches the existing public CUBAFOOD media from the current production domain into `public/media/cubafood/` **before** the Nitro build. This is required because Nitro records the production public-asset manifest at build time. The release artifact therefore contains and registers the migrated files before activation.

The activation step also has a fail-safe copy from the currently active MochaHost release into `/media/cubafood/` if a future release does not already contain a file.

The application references the CUBAFOOD-owned `/media/cubafood/` paths, so no Lovable host or build service remains in the runtime/deployment chain.

Future media can be moved to an approved object-storage/CDN solution when the asset strategy is finalized.

## Secrets

Never commit:

- SSH private keys
- known_hosts values
- Supabase keys
- TAKATAK service credentials
- passwords
- tokens

GitHub Actions production secrets remain the source for deployment-time credentials.
