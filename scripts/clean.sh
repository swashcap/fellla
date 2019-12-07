#!/usr/bin/env bash
set -eo pipefail

rm -rf .parcel-cache dist &
find src -type f \( -name '*.js' -o -name '*.js.map' -o -name '*.d.ts' \) \
  -exec rm {} \+ &

wait
