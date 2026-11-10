#!/usr/bin/env bash
# Container entrypoint: migrate, then run Express and Next side by side.
# If either process dies the container exits, so the host restarts it instead
# of leaving it half-working.
set -u

# Express and Next both read $PORT, so each gets its own value explicitly.
NEXT_PORT="${PORT:-3000}"

cd /srv/api
echo "Applying database migrations..."
./node_modules/.bin/prisma migrate deploy || exit 1

# Per-process heap caps so both fit a 512 MB instance; tune with `docker stats`.
PORT=3001 HOST=127.0.0.1 node --max-old-space-size="${API_HEAP_MB:-160}" dist/src/index.js &
api_pid=$!
cd /app
PORT="$NEXT_PORT" HOSTNAME=0.0.0.0 node --max-old-space-size="${NEXT_HEAP_MB:-200}" server.js &
next_pid=$!

# Forward docker stop / host shutdown to both children.
trap 'kill "$api_pid" "$next_pid" 2>/dev/null' TERM INT

wait -n
code=$?
kill "$api_pid" "$next_pid" 2>/dev/null
wait
exit "$code"
