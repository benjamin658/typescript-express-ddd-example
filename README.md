# Typescript Express DDD Example

> This repository is still in progress.

Domain Driven Design is an approach to software design and development. This repository is an example of using Typescript and Express framework
to build a RESTful API server in DDD way.

## Prerequisites

* Docker
* Docker Compose

## Quick Start

* Development mode: `npm run dev:up`
* Production mode: `npm run up`

> Then you can access the api via <http://localhost:8080/api>

### Clean Up

* Stop development mode: `npm run dev:down`
* Stop production mode: `npm run down`

## Database

In this example, we use the [PostgreSQL](https://www.postgresql.org/) and [Sequelize ORM](http://docs.sequelizejs.com/).

In order to generate an unique identity for each entity, we choose the `UUIDv4` as our identity format and `primary key` type, in the PostgreSQL, we need to install the `uuid-ossp` extension. In this example, the PostgreSQL container will install the extension automatically, you don't have to do anything.

### Migration

Run `./scripts/migration-generate.sh ${migration_name}`, then the migration file will be created inside the `./sequelize/migrations` folder.

> Container entry point will execute the `./scripts/migration.sh`, you don't have to do it manually.

#### Migration Example

```typescript
import {
  QueryInterface,
  DataTypes,
  Sequelize,
} from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      'accounts',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          allowNull: false,
        },

        username: {
          type: new DataTypes.STRING(255),
          unique: true,
          allowNull: false,
        },

        password: {
          type: new DataTypes.STRING(255),
          allowNull: false,
        },

        lastLoginedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },

        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('accounts');
  },
};
```

### Seeder

Run `./scripts/seed-generate.sh ${seed_name}`, then the seeder file will be created inside the `./sequelize/seeders` folder.

> Container entry point will execute the `./scripts/seed.sh`, you don't have to do it manually.

#### Seeder Example

```typescript
import {
  QueryInterface,
  QueryTypes,
} from 'sequelize';
import bcrypt from 'bcrypt';

const defaultUser = {
  username: 'demousername',
  password: bcrypt.hashSync('mypassword', 1),
  createdAt: new Date(),
  updatedAt: new Date(),
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const userExist = await queryInterface.sequelize.query(
      'SELECT * FROM accounts WHERE username = ?',
      {
        replacements: [defaultUser.username],
        type: QueryTypes.SELECT,
      },
    );

    if (!userExist.length) {
      await queryInterface.bulkInsert('accounts', [defaultUser]);
    }
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
```

## License

© Ben Hu (benjamin658), 2019-NOW

Released under the [WTFPL License](https://github.com/benjamin658/typescript-express-ddd-example/blob/master/LICENSE)
