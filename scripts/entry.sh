#!/bin/bash

./scripts/wait.sh $POSTGRES_HOST:$POSTGRES_PORT -t 0

./scripts/migration.sh
./scripts/seed.sh

if [ "$NODE_ENV" = "production" ]; then
  pm2-runtime start --raw process.prod.yml
else
  pm2-runtime start --raw process.dev.yml
fi
