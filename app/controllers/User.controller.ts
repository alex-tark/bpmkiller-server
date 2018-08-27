import * as bcrypt from "bcrypt";
import * as express from "express";
import { User } from "../models/User.model";
import { UserService } from "../services/User.service";

export class UserController {

    public static async All(req: express.Request, res: express.Response) {
        const UsersList = await UserService.Find();
        return res.send(UsersList);
    }

    public static async Find(req: express.Request, res: express.Response) {
        const id: number = req.params.id;
        const user = await UserService.FindOneById(id);
        return user ? res.status(200).send(user) : res.status(404).send({text: "NOT FOUND"});
    }

    public static async Create(req: express.Request, res: express.Response) {
        const data = req.body;
        const user = new User();

        user.username = data.username;
        user.email = data.email;
        user.password = bcrypt.hashSync(data.password, 10);
        user.role = data.role;
        user.vk = data.vk;
        user.fio = data.fio;

        try {
            const Result = await UserService.Save(user);
            return res.status(200).send(Result);
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async Update(req: express.Request, res: express.Response) {
        const data = req.body;
        const user = new User();
        user.username = data.username;
        user.email = data.email;
        user.password = data.password;
        user.role = data.role;
        user.vk = data.vk;
        user.fio = data.fio;

        try {
            const Result = await UserService.Save(user);
            return Result ? res.status(200).send() : res.status(404).send({text: "NOT FOUND"});
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }

    }

    public static async Delete(req: express.Request, res: express.Response) {
        const id: number = req.body.id;

        try {
            await UserService.RemoveById(id);
            return res.status(204).send();
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }
}
