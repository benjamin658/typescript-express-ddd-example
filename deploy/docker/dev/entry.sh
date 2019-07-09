#!/bin/bash

./scripts/wait.sh $POSTGRES_HOST:$POSTGRES_PORT -t 0

./scripts/migration.sh
./scripts/seed.sh

pm2-runtime start --raw process.dev.yml