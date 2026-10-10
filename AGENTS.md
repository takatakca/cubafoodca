# CUBAFOOD.CA — GitHub-first engineering rules

This repository is maintained directly from GitHub. Lovable is not a development, preview, authentication or deployment dependency.

## Work log rule (every agent: Claude, Codex, Cursor, people)

Cheap to follow: read only what is listed here.

1. **Before you start:** read the top of the log (`head -40 WORKLOG.md`) and the titles of open pull requests. If a line for the same work is `active` or has an open PR, do not redo it: continue that branch or pick other work.
2. **Claim it:** add one line at the top of the log with status `active`.
3. **Before you stop:** update your line with the status (`done`, `PR #n`, `blocked: reason`) and the next step. Commit and push it with your work. Never stop with unlogged work.
4. One line per piece of work, newest first. Details go in the PR, not the log.

Line format: `YYYY-MM-DD | agent | branch → PR | status | what | next step`

## Architecture rules

- GitHub is the source of truth for application code and deployment configuration.
- CUBAFOOD.CA remains an independently deployable product.
- TAKATAK is the ecosystem identity and integration authority, but CUBAFOOD must only call documented, authorized TAKATAK APIs.
- Never invent TAKATAK endpoints or reuse another product's integration credentials.
- CUBAFOOD operational/project data remains CUBAFOOD-scoped unless an approved integration contract says otherwise.
- Never commit secrets, tokens, passwords or private customer information.
- Production deployment must come from a tested Git commit and the repository's documented deployment workflow.
- Preserve existing routes, content, brand assets and working business workflows unless a change is explicitly justified.

## Brand rule

CUBAFOOD visual work follows the CUBAFOOD brand and existing approved project assets. GROUPE TAKATAK branding is used only where the page or product context calls for it; do not replace CUBAFOOD branding with the TAKATAK master brand.
