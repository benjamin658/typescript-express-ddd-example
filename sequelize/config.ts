const { env } = process;

const envTmpl = {
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  schema: env.POSTGRES_SCHEMA,
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...envTmpl,
  },
  test: {
    ...envTmpl,
  },
  production: {
    ...envTmpl,
  },
};
