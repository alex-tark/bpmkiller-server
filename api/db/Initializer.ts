import {
    createConnection as createDbConnection,
    getConnection,
    ConnectionOptions,
    Connection
} from "typeorm";

import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as bcrypt from "bcryptjs";

import User from "../models/User";


export type PostgresConnectionOptions = PostgresConnectionOptions;

export default class DbInitializer {
    static async init(connectionOptions: PostgresConnectionOptions, seed: boolean = false) {
        let options: any = Object.assign({}, connectionOptions);

        options.entities = options.entities.map(item => {
            return `${__dirname}/../${item}`;
        });
        options.migrations = options.migrations.map(item => {
            return `${__dirname}/../${item}`;
        });

        try {
            let connection = await createDbConnection(options as ConnectionOptions);
            if (seed) {
                console.log("Seeding the database...");
                await this.seedData();
            }
        } catch (err) {
            console.log(`Error initializing the database: ${err}`);
            throw err;
        }
    }

    private static async seedData() {
        let connection = getConnection();
        let userRepo = connection.getRepository(User);

        // Create test user
        let email = "user@test.com";
        let exists = !!await userRepo.findOne({ email });
        if (!exists) {
            let user1 = new User();
            user1.email = "user@test.com";
            let hashedPassword = await bcrypt.hash("P2ssw0rd!", 3);
            user1.hashedPassword = hashedPassword;
            user1.emailConfirmed = true;
            await userRepo.save(user1);
        }
    }
}
