#!/usr/bin/env bash
# Replaces the LOCAL database `best_family_tree` with a backup file.
#   npm run db:restore-local -- <file.dump> --yes
# Use it to refresh local data from production (make a file with db:backup-prod).
# Never the other way round: production is the source of truth.
set -euo pipefail

file="${1:-}"
[ -n "$file" ] && [ -r "$file" ] || { echo "Usage: db:restore-local -- <file.dump> --yes" >&2; exit 1; }
[ "${2:-}" = "--yes" ] || { echo "This REPLACES the local best_family_tree database. Add --yes to confirm." >&2; exit 1; }
docker exec best-family-tree-db pg_isready -U postgres > /dev/null \
  || { echo "The local Postgres container best-family-tree-db is not running (docker compose up -d postgres)." >&2; exit 1; }

docker exec -i best-family-tree-db pg_restore -U postgres -d best_family_tree \
  --clean --if-exists --no-owner < "$file"
echo "Local best_family_tree restored from $file"
