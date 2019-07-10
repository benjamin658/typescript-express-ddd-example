# Typescript Express DDD Example

> This repository is still in progress.

Domain Driven Design is an approach to software design. This repository is an example of using Typescript and Express framework
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

In order to generate an unique identity for each entity, we choose the `UUIDv4` as our identity format and `primary key` type, in the PostgreSQL, we need to install the `uuid-ossp` extension. If you launch the server by `npm run dev:up` command, the PostgreSQL container will install the extension automatically, you don't have to do anything.

## License

© Ben Hu (benjamin658), 2019-NOW

Released under the [WTFPL License](https://github.com/benjamin658/typescript-express-ddd-example/blob/master/LICENSE)