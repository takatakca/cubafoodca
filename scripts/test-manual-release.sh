#!/usr/bin/env bash
# No real server or credentials: exercise atomic recovery with a disposable HOME.
set -euo pipefail
FAKE_HOME="$(mktemp -d)"
trap 'rm -rf -- "$FAKE_HOME"' EXIT
ROOT="$FAKE_HOME/cubafood_node"
SHA="0123456789abcdef0123456789abcdef01234567"
mkdir -p "$ROOT/incoming" "$ROOT/releases/old/server" "$ROOT/tmp"
printf 'old Nitro app\n' > "$ROOT/releases/old/server/index.mjs"
ln -s "$ROOT/releases/old" "$ROOT/current"

mkdir -p "$FAKE_HOME/fixture/server" "$FAKE_HOME/fixture/public/media/cubafood"
printf 'test Nitro app\n' > "$FAKE_HOME/fixture/server/index.mjs"
printf 'poster test\n' > "$FAKE_HOME/fixture/public/media/cubafood/field-1-poster.jpg"
printf '%s\n' "$SHA" > "$FAKE_HOME/fixture/RELEASE_SHA"
ARCHIVE="$ROOT/incoming/cubafood-$SHA.tar.gz"
tar -czf "$ARCHIVE" -C "$FAKE_HOME/fixture" server public RELEASE_SHA
(cd "$ROOT/incoming" && sha256sum "cubafood-$SHA.tar.gz" > "cubafood-$SHA.tar.gz.sha256")

if HOME="$FAKE_HOME" bash deploy/mochahost/manual-activate.sh invalid >/dev/null 2>&1; then
  echo "Invalid SHA was accepted" >&2
  exit 1
fi

HOME="$FAKE_HOME" bash deploy/mochahost/manual-activate.sh "$SHA"
test "$(readlink -f "$ROOT/current")" = "$ROOT/releases/$SHA"
test "$(readlink -f "$ROOT/previous")" = "$ROOT/releases/old"
test -f "$ROOT/tmp/restart.txt"

# Re-running the same archive must not lose the existing prior release.
HOME="$FAKE_HOME" bash deploy/mochahost/manual-activate.sh "$SHA"
test "$(readlink -f "$ROOT/previous")" = "$ROOT/releases/old"

HOME="$FAKE_HOME" bash deploy/mochahost/manual-rollback.sh
test "$(readlink -f "$ROOT/current")" = "$ROOT/releases/old"
test "$(readlink -f "$ROOT/previous")" = "$ROOT/releases/$SHA"
test -d "$ROOT/releases/$SHA"
echo "PASS: CUBAFOOD manual activation, idempotence and rollback verified locally."
