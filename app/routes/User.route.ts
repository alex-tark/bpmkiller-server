import * as express from "express";
import { UserController } from "../controllers/User.controller";
import * as UserMiddleware from "../middlewares/User.middleware";

export const UserRoute: express.Router = express.Router()
    .get("/", UserController.All)
    .get("/:id", UserController.Find)
    .post("/", [UserMiddleware.CheckCreate], UserController.Create)
    .put("/", [UserMiddleware.CheckUpdate], UserController.Update)
    .delete("/", [UserMiddleware.CheckDelete], UserController.Delete);
