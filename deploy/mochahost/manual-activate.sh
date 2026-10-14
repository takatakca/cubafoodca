#!/usr/bin/env bash
# Controlled emergency activation for a GitHub-verified CUBAFOOD release.
# Execute as the MochaHost cPanel account owner, not as root.
set -euo pipefail
umask 077

if [ "$#" -ne 1 ] || [[ ! "$1" =~ ^[a-f0-9]{40}$ ]]; then
  echo "Usage: bash manual-activate.sh FULL_40_CHARACTER_GITHUB_COMMIT_SHA" >&2
  exit 2
fi

SHA="$1"
ROOT="$HOME/cubafood_node"
ARCHIVE="$ROOT/incoming/cubafood-$SHA.tar.gz"
CHECKSUM="$ARCHIVE.sha256"
DEST="$ROOT/releases/$SHA"
STAGING="$ROOT/releases/.staging-$SHA"
LOCK="$ROOT/.manual-release.lock"

test -d "$ROOT" || { echo "Missing application root: $ROOT" >&2; exit 1; }
test -s "$ARCHIVE" || { echo "Missing release archive: $ARCHIVE" >&2; exit 1; }
test -s "$CHECKSUM" || { echo "Missing release SHA-256 file: $CHECKSUM" >&2; exit 1; }
mkdir -p "$ROOT/releases" "$ROOT/tmp" "$ROOT/incoming"
mkdir "$LOCK" || { echo "Another deployment is running or a stale lock needs review: $LOCK" >&2; exit 1; }
trap 'rmdir "$LOCK"' EXIT

echo "Verifying release archive integrity..."
(cd "$ROOT/incoming" && sha256sum -c "cubafood-$SHA.tar.gz.sha256")

if [ -e "$ROOT/current" ] && [ ! -L "$ROOT/current" ]; then
  echo "Refusing to replace a non-symlink current directory" >&2
  exit 1
fi

if [ ! -d "$DEST" ]; then
  if [ -e "$STAGING" ]; then
    echo "Removing only interrupted staging for this release: $STAGING"
    rm -rf -- "$STAGING"
  fi
  mkdir "$STAGING"
  echo "Extracting release into isolated staging directory..."
  tar -xzf "$ARCHIVE" -C "$STAGING"
  test -s "$STAGING/server/index.mjs" || { echo "Nitro server missing" >&2; exit 1; }
  test -d "$STAGING/public" || { echo "Public assets missing" >&2; exit 1; }
  test -s "$STAGING/public/media/cubafood/field-1-poster.jpg" || { echo "Project media missing" >&2; exit 1; }
  test -f "$STAGING/RELEASE_SHA" || { echo "RELEASE_SHA missing" >&2; exit 1; }
  test "$(cat "$STAGING/RELEASE_SHA")" = "$SHA" || { echo "Release SHA mismatch" >&2; exit 1; }
  mv -- "$STAGING" "$DEST"
else
  echo "Release already exists. Rechecking before activation..."
  test -s "$DEST/server/index.mjs"
  test -d "$DEST/public"
  test "$(cat "$DEST/RELEASE_SHA")" = "$SHA"
fi

if [ -L "$ROOT/current" ]; then
  OLD="$(readlink -f "$ROOT/current")"
  case "$OLD" in
    "$ROOT/releases/"*) test -d "$OLD" ;;
    *) echo "Refusing unsafe current symlink target: $OLD" >&2; exit 1 ;;
  esac
  if [ "$OLD" != "$DEST" ]; then
    ln -sfn "$OLD" "$ROOT/previous"
    echo "Previous release saved: $OLD"
  fi
fi

# Atomic switch; data, uploads and original bootstrap remain outside releases.
rm -f -- "$ROOT/current.manual-next"
ln -s "$DEST" "$ROOT/current.manual-next"
mv -Tf -- "$ROOT/current.manual-next" "$ROOT/current"
test "$(readlink -f "$ROOT/current")" = "$DEST"
touch "$ROOT/tmp/restart.txt"
echo "Activated SHA $SHA; Passenger restart requested."
echo "Now check https://cubafood.ca/healthz, /watch and the project pages."
echo "If checks fail, immediately run: bash $ROOT/manual-rollback.sh"
