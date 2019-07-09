#!/bin/bash

migration() {
  echo " -> Compiling migration scripts..."
  echo ""
  npx tsc -t es2017 -esModuleInterop -module CommonJS -outDir ./migration-dist ./sequelize/config.ts
  npx tsc -t es2017 -esModuleInterop -module CommonJS -outDir ./migration-dist/migrations ./sequelize/migrations/*.ts
  echo " -> Compilation completed."
  echo ""
  echo " -> Starting migration..."
  echo ""
  npx sequelize db:migrate
  echo " -> Migration completed."
  echo ""
}

if ls ./sequelize/migrations/*.ts &> /dev/null; then
  migration
else
  echo "Not migration to run."
fi

