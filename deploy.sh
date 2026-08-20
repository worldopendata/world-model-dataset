#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-18080}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$ROOT/server.pid"
LOG_FILE="$ROOT/server.log"

if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Already running with PID $(cat "$PID_FILE")"
  exit 0
fi

cd "$ROOT"
nohup python3 -m http.server "$PORT" --bind 0.0.0.0 >"$LOG_FILE" 2>&1 &
echo $! >"$PID_FILE"
sleep 1
kill -0 "$(cat "$PID_FILE")"
echo "WorldModel Data Atlas started on port $PORT (PID $(cat "$PID_FILE"))"
