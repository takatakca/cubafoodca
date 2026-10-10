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

For the first GitHub-first deployment, the activation step copies the existing field media from the currently active MochaHost release into:

`/media/cubafood/`

The application now references those CUBAFOOD-owned paths.

This keeps the current production media without keeping a vendor build service in the application pipeline. Future media can be moved to repository-managed Git LFS or an approved object-storage/CDN solution when the asset strategy is finalized.

## Secrets

Never commit:

- SSH private keys
- known_hosts values
- Supabase keys
- TAKATAK service credentials
- passwords
- tokens

GitHub Actions production secrets remain the source for deployment-time credentials.
