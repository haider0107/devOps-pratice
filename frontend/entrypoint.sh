#!/bin/sh

# Wait for Server
wait-for-it.sh fullstack-backend:8080 -- echo "Server is up"

# Now run the actual command (passed from CMD)
exec "$@"