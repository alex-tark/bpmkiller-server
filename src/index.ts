import * as exmpress from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as fs from 'fs';
import { WriteStream } from 'fs';
import * as path from 'path';

import { AppConfig } from './config/config';
import { unCoughtErrorHandler } from './handlers/errorHandler';

export default class Server {
  constructor(app: Application) {

  }

  public config(app: Application) {
    const accessLogStream: WriteStream = fs.createWriteStream(
      path.join(__dirname, './logs/access.log'),
      { flags: 'a' }
    );

    app.use(morgan('combined', { stream: accessLogStream }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

  }
}
