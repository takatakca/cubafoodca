#!/usr/bin/env bash
# Revert ONLY the current symlink to the previously verified release.
set -euo pipefail
umask 077
ROOT="$HOME/cubafood_node"
LOCK="$ROOT/.manual-release.lock"

test -L "$ROOT/previous" || { echo "No previous release symlink exists" >&2; exit 1; }
test -L "$ROOT/current" || { echo "No current release symlink exists" >&2; exit 1; }

PREVIOUS="$(readlink -f "$ROOT/previous")"
CURRENT="$(readlink -f "$ROOT/current")"
case "$PREVIOUS" in
  "$ROOT/releases/"*) test -s "$PREVIOUS/server/index.mjs" ;;
  *) echo "Unsafe previous release target: $PREVIOUS" >&2; exit 1 ;;
esac
case "$CURRENT" in
  "$ROOT/releases/"*) test -d "$CURRENT" ;;
  *) echo "Unsafe current release target: $CURRENT" >&2; exit 1 ;;
esac

mkdir "$LOCK" || { echo "Deployment is in progress; stop and investigate." >&2; exit 1; }
trap 'rmdir "$LOCK"' EXIT

rm -f -- "$ROOT/current.manual-next"
ln -s "$PREVIOUS" "$ROOT/current.manual-next"
mv -Tf -- "$ROOT/current.manual-next" "$ROOT/current"
test "$(readlink -f "$ROOT/current")" = "$PREVIOUS"
ln -sfn "$CURRENT" "$ROOT/previous"
mkdir -p "$ROOT/tmp"
touch "$ROOT/tmp/restart.txt"
echo "Rollback complete. Current release: $PREVIOUS"
echo "Verify https://cubafood.ca/healthz and public routes after Passenger restarts."
