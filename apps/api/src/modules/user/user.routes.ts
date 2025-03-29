//#region Import
import { Router } from "express";
import { CreateUser } from "./user.controller";
//#endregion

//#region Action
const UserRouter = Router();
UserRouter.post("/", CreateUser);
//#endregion

export { UserRouter };
