#!/usr/bin/env bash
set -eo pipefail

BUDGET=70000
SCRIPTS=$(find dist -type f -name '*.js')

for SCRIPT in $SCRIPTS; do
  STAT=$(stat -f%z "$SCRIPT")

  if [ "$STAT" -gt "$BUDGET" ]; then
    printf 'A script exceeds the performance budget of %d bytes:\n\n' "$BUDGET"
    printf '  %s: %d bytes\n' "$SCRIPT" "$STAT"
    exit 1
  fi
done

printf 'All scripts pass the performance budget of %d bytes\n' "$BUDGET"
