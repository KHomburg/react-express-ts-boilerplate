//#region Import
import { sequelize } from "./shared/config/sequelize.config";
import App from "./shared/config/express.config";
import { config } from "./shared/config/env.config";
//#endregion

//#region Config

const port = config.PORT;

// Connect to DB
(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
})();

// Start Express App
App.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//#endregion
