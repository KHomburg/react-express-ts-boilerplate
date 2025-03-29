import dotenv from "dotenv";
dotenv.config();

export const config = {
	// Server
	PORT: process.env.PORT || 8080,

	// DB
	DB_DIALECT: process.env.DB_DIALECT || "postgres",
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_PORT: process.env.DB_PORT || 5432,
	DB_USERNAME: process.env.DB_USERNAME || "postgres",
	DB_PASSWORD: process.env.DB_PASSWORD || "password",
	DB_DATABASE: process.env.DB_DATABASE || "melo_app",

	// JWT
	TOKEN_KEY: process.env.TOKEN_KEY || "secret",

	// Mailer
	MAILER_USER: process.env.MAILER_USER,
	MAILER_PASSWORD: process.env.MAILER_PASSWORD
};
