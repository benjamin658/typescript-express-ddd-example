FROM node:10.16.0

RUN npm install pm2 -g
RUN pm2 update

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app
RUN npm install

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ADD . /app
RUN npm run build

ENTRYPOINT [ "./scripts/entry.sh" ]

EXPOSE 8080