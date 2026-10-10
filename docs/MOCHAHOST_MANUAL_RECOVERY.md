# CUBAFOOD.CA — SSH-independent MochaHost release recovery

**Purpose:** unblock deployment when GitHub-hosted runners receive `Broken pipe` / `Connection closed by remote host` from MochaHost. See issue [#11](https://github.com/takatakca/cubafoodca/issues/11). The regular SSH deployment and its rollback workflow remain the preferred automatic route.

**Scope:** this is a production release procedure, **not** an alternate identity platform, not a Lovable integration and not a hosting rebuild. It preserves the existing CUBAFOOD cPanel/Passenger startup file, old release, database and TAKATAK integration boundary.

## Preconditions — do not skip

- You are the authorized CUBAFOOD production owner or release operator.
- PR containing the release was reviewed, tested and merged to `main`, and `CUBAFOOD CI` passed on that exact SHA.
- The production environment permits the GitHub Actions `Prepare CUBAFOOD Manual Recovery Release` workflow to run.
- cPanel File Manager and **Terminal** are available for the existing `bolonca` account. No npm, Bun, build or install is run on MochaHost.
- The existing Passenger Node.js application still uses application root `/home/bolonca/cubafood_node`, startup file `app.js`, and `current/server/index.mjs`. If this structure differs, stop before changing symlinks.
- Confirm enough free disk space for the compressed archive, staging extraction and the existing active release.
- The ZIP / TAR includes built app files and public project videos; it must be treated as release material, not as a place to add passwords.

## A. Build a verified release in GitHub (not MochaHost)

1. Open [GitHub Actions](https://github.com/takatakca/cubafoodca/actions).
2. Select **Prepare CUBAFOOD Manual Recovery Release**.
3. Click **Run workflow**, select the **main** branch, and run it.
4. Wait for a **green** workflow. It runs a locked dependency install, copies authentic existing public media, builds Nitro, checks TypeScript/lint, and packages the release.
5. Copy the exact 40-character commit SHA from the workflow run. It must match the latest release commit you intend to publish.
6. At the bottom of that workflow run, under **Artifacts**, download **cubafood-manual-release-SHA**.
7. In Windows File Explorer, right-click the downloaded `.zip` and select **Extract All**. The extracted folder should contain:
   - `cubafood-SHA.tar.gz` — leave this file compressed;
   - `cubafood-SHA.tar.gz.sha256` — upload unchanged for integrity verification;
   - `manual-activate.sh`;
   - `manual-rollback.sh`.
8. The GitHub artifact expires after 14 days. Keep a private, access-controlled backup copy of the validated release if your retention rules require it.

**Do not proceed if the workflow fails, the artifact is absent, or the SHA is different.** This job does **not** change the production site by itself.

## B. Upload files using cPanel File Manager (no SSH needed)

1. Sign in to your authorized MochaHost cPanel.
2. Open **Files → File Manager** and go to `/home/bolonca/cubafood_node`. Do **not** use `public_html` for Nitro release files.
3. Make sure the `incoming`, `releases` and `tmp` directories exist under `cubafood_node`; create them if missing.
4. Open the `incoming` folder. Upload **both** `cubafood-SHA.tar.gz` and `cubafood-SHA.tar.gz.sha256`, using the same SHA as in GitHub.
5. Return to the parent folder `cubafood_node`. Upload `manual-activate.sh` and `manual-rollback.sh` directly there.
6. Check that the existing `app.js`, `current` and (when present) `previous` are still in place. **Do not delete or rename them.** Do not extract the archive in File Manager.

## C. Activate with cPanel Terminal (no server build)

1. In cPanel, open **Advanced → Terminal**. This uses your existing cPanel account; you do not need an inbound GitHub SSH connection.
2. Run the following command, replacing `FULL_SHA_FROM_GITHUB` with the **complete** 40-character commit SHA:

```bash
cd /home/bolonca/cubafood_node
bash manual-activate.sh FULL_SHA_FROM_GITHUB
```

3. The script checks the SHA format, verifies the SHA-256 checksum, extracts to a separate staging directory, validates `server/index.mjs`, public project media and `RELEASE_SHA`, saves the former release as `previous`, atomically updates `current`, then touches the existing Passenger `tmp/restart.txt` trigger.
4. A successful command prints the exact activated SHA. **This alone is not proof of a healthy public website.**

If cPanel Terminal is unavailable, **stop and contact MochaHost**. Do not attempt to emulate the activation by moving random directories in File Manager.

## D. Verify the actual public site

Wait briefly for Passenger, then use a browser or an authorized local terminal to verify:

- [https://cubafood.ca/healthz](https://cubafood.ca/healthz) returns JSON with `"ok":true`.
- [https://cubafood.ca/](https://cubafood.ca/) loads and navigation/language switching work.
- [https://cubafood.ca/project](https://cubafood.ca/project), [https://cubafood.ca/locations/matanzas](https://cubafood.ca/locations/matanzas), [https://cubafood.ca/cuba](https://cubafood.ca/cuba) and [https://cubafood.ca/canada](https://cubafood.ca/canada) load.
- [https://cubafood.ca/watch](https://cubafood.ca/watch) plays the genuine Matanzas footage.
- [https://cubafood.ca/journal/site-documentation-matanzas](https://cubafood.ca/journal/site-documentation-matanzas) shows the published field documentation.
- [https://cubafood.ca/media/cubafood/field-1-poster.jpg](https://cubafood.ca/media/cubafood/field-1-poster.jpg) serves an image.
- The participation forms load. **Do not send fake personal information into the production database** just for testing.
- Test the public responsive interface at narrow mobile, tablet and desktop widths. Also verify keyboard navigation and visible focus.

Production status is `PRODUCTION VERIFIED` **only after** the active SHA, health, routes, media and critical workflows are verified.

## E. Immediate rollback if activation is unhealthy

The rollback script switches `current` back to `previous` and restarts Passenger. It does not delete releases or user data.

```bash
cd /home/bolonca/cubafood_node
bash manual-rollback.sh
```

Verify `/healthz` and public pages again. If no `previous` release exists or the script refuses to run, stop and ask MochaHost support to inspect the release pointers before taking further action.

## SSH root cause remains an open issue

Manual promotion is an **operator-controlled recovery path**, not a substitute for diagnosing why GitHub-hosted runner SSH connections are closed. Do not weaken host-key checking, turn off the firewall, publish credentials or remove security gates to make SSH appear to work. Investigate account SSH restrictions, server logs, deny lists and support tickets; see #11.

## TAKATAK integration boundary

This deployment does **not** authorize access to TAKATAK's 1LV-only master API. `takatak-v1` issue [#161](https://github.com/takatakca/takatak-v1/issues/161) must be resolved and verified before production CUBAFOOD master identity/entitlement flows are enabled. No changes to TAKATAK.ca are required to use this CUBAFOOD manual recovery path.
