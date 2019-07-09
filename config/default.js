module.exports = {
  port: 8080,

  postgres: {
    host: 'postgres',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'typescript_express_ddd_example_db',
    schema: 'public',
  },

  jwtSecret: 'supersecuresecret',
};
