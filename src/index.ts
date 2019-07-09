import 'reflect-metadata';

import { initServer } from '@/app/interface/http/server';
import { logger } from '@/app/infra/logging/logger';
import { PORT } from './env';

async function main() {
  initServer().listen(PORT, () => {
    logger.info(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
  });
}

main();