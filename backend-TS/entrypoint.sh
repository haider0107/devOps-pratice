#!/bin/sh

# Wait for MongoDB
wait-for-it.sh fullstack-db:27017 -- echo "MongoDB is up"

# Wait for Redis
wait-for-it.sh fullstack-redis:6379 -- echo "Redis is up"

# Now run the actual command (passed from CMD)
exec "$@"