module.exports = {
  port: {
    __name: 'PORT',
    __format: 'json',
  },

  postgres: {
    host: 'POSTGRES_HOST',
    port: {
      __name: 'POSTGRES_PORT',
      __format: 'json',
    },
    username: 'POSTGRES_USER',
    password: 'POSTGRES_PASSWORD',
    database: 'POSTGRES_DB',
    schema: 'POSTGRES_SCHEMA',
  },

  jwtSecret: 'JWT_SECRET',
};
