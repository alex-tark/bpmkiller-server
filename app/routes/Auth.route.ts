import * as express from "express";
import { AuthController } from "../controllers/Auth.controller";

export const AuthRoute: express.Router = express.Router()
    .get("/", AuthController.Check)
    .post("/", AuthController.Index);
