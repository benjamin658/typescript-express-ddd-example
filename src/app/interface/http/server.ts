import http, { Server } from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';


export function initServer(): Server {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('combined', {
    skip(req, res) { return res.statusCode < 400; },
  }));

  return httpServer;
}
