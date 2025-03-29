import { Sequelize } from "sequelize";
import { config } from "./env.config";

export const sequelize = new Sequelize({
	dialect: config.DB_DIALECT as any,
	host: config.DB_HOST as string,
	port: Number(config.DB_PORT),
	username: config.DB_USERNAME as string,
	password: config.DB_PASSWORD as string,
	database: config.DB_DATABASE as string,
	logging: console.log
});
