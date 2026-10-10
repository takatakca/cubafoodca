# CUBAFOOD.CA — Public search discovery

**Status:** Code only until the branch is merged, deployed, and the public URLs are verified.

## Source of truth

Public pages are derived from `src/routes/*.tsx`. Published journal
articles come from `JOURNAL_POSTS` with `status === "PUBLISHED"`.
Draft/unknown dynamic article slugs and server-only routes are intentionally
excluded. No invented publication or update timestamps are added.

The FR/EN/ES interface uses the **same URL** for each document with an
in-page language switcher. Consequently we do **not** invent /fr/, /en/, /es/
URLs or hreflang variations which do not actually exist.

## Maintenance

After adding, renaming, or deleting a route:

1. Run `bun run sitemap:generate`.
2. Commit the new `public/sitemap.xml` together with the route change.
3. Run `bun run sitemap:check` or let the **CUBAFOOD Sitemap Integrity**
   GitHub Action check the change.
4. Build/verify with the existing CUBAFOOD CI.
5. Merge through reviewed PR, then verify the published XML and robots path.

Public endpoints (after successful deployment):
- https://cubafood.ca/robots.txt
- https://cubafood.ca/sitemap.xml

The source sitemap contains actual route URLs only. A listing does not
attest to land rights, permissions, crop output, employment, partners,
operational readiness, or the completion of a specific project activity.

## Error states

The multilingual 404 and error-recovery screens are designed not to expose
stack traces or project contact details. They do not create TAKATAK
sessions. The fallback UI reads the locally stored language preference safely
because root errors may occur before the normal language provider mounts.

## Verification still required

- Inspect FR/EN/ES 404/error rendering at mobile and desktop sizes.
- Verify crawlable sitemap and robots.txt on production after deployment.
- Confirm published articles have working links and that unknown slugs do not
  get included in the sitemap.
- Search Console submission requires an authorized site-owner account and is
  **not** implied by adding the sitemap.
- MochaHost GitHub-hosted SSH issue #11 remains a separate deployment blocker.
