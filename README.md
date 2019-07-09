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

## PM2

PM2 is an excellent process manager for Node.js application either in development or production envorinment.

### Development Mode

In the development mode, we use the `docker volume` to attached the `src` folder to the container, and use `pm2 watch` feature to watch the src folder changed, so when we modify the code on the local host, the pm2 watch inside the container will restart the app automatically.

### Production Mode

PM2 can run the app in cluster mode, it starts multiple processes and load-balance HTTP/TCP/UDP queries between them. In this example, pm2 will run `max` (depend on number of CPU cores) process inside the container.
