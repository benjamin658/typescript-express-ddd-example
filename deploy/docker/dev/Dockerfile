FROM node:10.16.0

RUN npm install pm2 -g
RUN pm2 update

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app
RUN npm install

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ADD . /app

ENTRYPOINT [ "./deploy/docker/dev/entry.sh" ]

EXPOSE 8080