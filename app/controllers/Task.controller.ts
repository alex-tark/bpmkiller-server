import * as express from "express";
import { Task } from "../models/Task.model";
import { TaskService } from "../services/Task.service";

export class TaskController {

    public static async All(req: express.Request, res: express.Response) {
        const UsersList = await TaskService.Find();
        return res.send(UsersList);
    }

    public static async Find(req: express.Request, res: express.Response) {
        const id: number = req.params.id;
        const user = await TaskService.FindOneById(id);
        return user ? res.status(200).send(user) : res.status(404).send({text: "NOT FOUND"});
    }

    public static async Create(req: express.Request, res: express.Response) {
        const data = req.body;
        const task = new Task();

        try {
            const Result = await TaskService.Save(task);
            return res.status(200).send(Result);
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async Update(req: express.Request, res: express.Response) {
        const data = req.body;
        const task = new Task();

        try {
            const Result = await TaskService.Save(task);
            return Result ? res.status(200).send() : res.status(404).send({text: "NOT FOUND"});
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }

    }

    public static async Delete(req: express.Request, res: express.Response) {
        const id: number = req.body.id;

        try {
            await TaskService.RemoveById(id);
            return res.status(204).send();
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }
}
