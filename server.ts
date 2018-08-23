import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import { Application } from 'express';
import { sequelize } from './src/db/db';
import * as nconf from 'nconf';

import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const port: number = nconf.get('http:port');


app.listen(port, 'localhost', function (error: any) {
  if (error) return error;

  console.info(`Server running on : http://localhost:${port}`);
});
