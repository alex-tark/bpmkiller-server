import * as express from "express";
import { TaskController } from "../controllers/Task.controller";
import * as TaskMiddleware from "../middlewares/Task.middleware";

export const TaskRoute: express.Router = express.Router()
    .get("/", TaskController.All)
    .get("/:id", TaskController.Find)
    .post("/", [TaskMiddleware.CheckCreate], TaskController.Create)
    .put("/", [TaskMiddleware.CheckUpdate], TaskController.Update)
    .delete("/", [TaskMiddleware.CheckDelete], TaskController.Delete);
