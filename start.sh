#!/usr/bin/env bash
set -e

echo "=== GEF_system starting ==="
# Run database migrations before opening network port
echo "Applying database migrations..."
python3 app.py migrate

# Seed demo data if database is empty and not disabled
if [ "${GEF_NO_DEMO:-0}" != "1" ]; then
    python3 -c "import app; app.seed_demo()" || true
fi

# Auto-create admin if credentials provided in environment
if [ -n "$GEF_ADMIN_USER" ] && [ -n "$GEF_ADMIN_PASSWORD" ]; then
    echo "Configuring administrator account..."
    python3 app.py createadmin || true
fi

PORT="${PORT:-8011}"
WORKERS="${WEB_CONCURRENCY:-2}"
THREADS="${WEB_THREADS:-4}"

echo "Starting Gunicorn on 0.0.0.0:${PORT} with ${WORKERS} workers..."
exec gunicorn app:application \
    --bind "0.0.0.0:${PORT}" \
    --workers "${WORKERS}" \
    --threads "${THREADS}" \
    --timeout 120 \
    --access-logfile - \
    --error-logfile -
