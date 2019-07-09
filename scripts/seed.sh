#!/bin/bash

seed() {
  echo " -> Compiling seeder scripts..."
  echo ""
  npx tsc -t es2017 --experimentalDecorators --emitDecoratorMetadata -esModuleInterop -module CommonJS -outDir ./migration-dist ./sequelize/config.ts
  npx tsc -t es2017 --experimentalDecorators --emitDecoratorMetadata -esModuleInterop -module CommonJS -outDir ./migration-dist/seeders ./sequelize/seeders/*.ts
  echo " -> Compilation completed."
  echo ""
  echo " -> Starting seeder..."
  echo ""
  npx sequelize db:seed:all
  echo " -> Seeder completed."
  echo ""
}

if ls ./sequelize/seeders/*.ts &> /dev/null; then
  seed
else
  echo "Not seed to run."
fi


