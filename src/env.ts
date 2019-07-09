import config from 'config';

export const PORT = config.get('port') as number;

/* Postgres */
export const POSTGRES_HOST = config.get('postgres.host') as string;
export const POSTGRES_PORT = config.get('postgres.port') as number;
export const POSTGRES_USER = config.get('postgres.username') as string;
export const POSTGRES_PASSWORD = config.get('postgres.password') as string;
export const POSTGRES_DB = config.get('postgres.database') as string;
export const POSTGRES_SCHEMA = config.get('postgres.schema') as string;

/* JWT */
export const JWT_SECRET = config.get('jwtSecret') as string;
