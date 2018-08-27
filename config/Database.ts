import { createConnection } from "typeorm";
import { Sample } from "../app/models/Sample.model";
import { Task } from "../app/models/Task.model";
import { User } from "../app/models/User.model";
import { config, DIALECT } from "../config";

export const Connection = createConnection({
    database: config.DATABASE.DB,
    entities: [
        Sample,
        Task,
        User,
    ],
    host: config.DATABASE.SERVER,
    logging: false,
    password: config.DATABASE.PASSWORD,
    port: config.DATABASE.PORT_DB,
    synchronize: true,
    type: DIALECT,
    username: config.DATABASE.USER_DB,
});
