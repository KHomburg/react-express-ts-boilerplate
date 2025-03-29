//#region Import
import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();
//#endregion

// Get the secret key in .env

const CreateUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const user = {
			id: 1,
			firstName: "Max",
			lastName: "Mustermann",
			email: "test@test.de",
			password: "test1234"
		};

		return res.status(200).json(user);
	} catch (error: unknown) {
		console.log(error);
		return res.status(500);
	}
};

export { CreateUser };
