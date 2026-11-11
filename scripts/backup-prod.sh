#!/usr/bin/env bash
# Backs up the production (Neon) database to a dated file OUTSIDE the repo.
#   npm run db:backup-prod
# Run it weekly, and before every deploy that contains a migration. Neon's free
# plan only keeps a few hours of history, so this file is your real safety net.
# The connection string is read from a file and never printed or put in an
# argument list; the dump holds personal data, so keep it private.
set -euo pipefail

URL_FILE="${NEON_PROD_URL_FILE:-$HOME/.config/best-tree/neon-prod.url}"
OUT_DIR="${BACKUP_DIR:-$HOME/backups/best-tree}"

[ -r "$URL_FILE" ] || { echo "Missing $URL_FILE (the Neon direct connection string)." >&2; exit 1; }
mkdir -p "$OUT_DIR"
chmod 700 "$OUT_DIR"

file="$OUT_DIR/best-tree-$(date +%Y-%m-%d-%H%M).dump"
umask 077

# Short-lived sign-in tables are skipped: nobody needs them back.
DATABASE_URL="$(cat "$URL_FILE")" docker run --rm -e DATABASE_URL postgres:17-alpine \
  sh -c 'pg_dump -Fc --no-owner --no-acl \
    --exclude-table-data=auth_sessions \
    --exclude-table-data=sign_in_challenges \
    --exclude-table-data=email_sign_in_codes \
    "$DATABASE_URL"' > "$file"

# A dump that cannot be listed cannot be restored either.
docker run --rm -i postgres:17-alpine pg_restore --list < "$file" > /dev/null
echo "Backup written: $file ($(du -h "$file" | cut -f1))"
