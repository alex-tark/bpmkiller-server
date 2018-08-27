import { env } from "process";

export const DIALECT = "postgres";

const LOCAL_CONFIGURATION = {
	DB: "db_bpmkiller",
	PASSWORD: "",
	PORT_DB: 5432,
	SERVER: "localhost",
	USER_DB: "postgres",
};

const PRODUCTION_CONFIGURATION = {
	DB: env.DB || "prod",
	PASSWORD: env.PASSWORD || "",
	PORT_DB: Number(env.PORT_DB) || 3306,
	SERVER: env.SERVER || "localhost",
	USER_DB: env.USER_DB || "root",
};

export const config = {
	DATABASE: env.NODE_ENV === "PRODUCTION" ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION,
	PORT_APP: 1344,
	SECRET: "HltH3R3",
};
