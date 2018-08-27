import * as express from "express";

export function CheckCreate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.username && typeof req.body.username === "string" &&
        req.body.password && typeof req.body.password === "string" &&
        req.body.email &&
        req.body.vk &&
        req.body.fio &&
        req.body.role ? next() : res.status(404).send({text: "ERROR"});
}

export function CheckUpdate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.id && typeof req.body.id === "number" &&
        req.body.username && typeof req.body.username === "string" &&
        req.body.password && typeof req.body.password === "string" &&
        req.body.email && typeof req.body.email === "string" &&
        req.body.vk && typeof req.body.vk === "string" &&
        req.body.fio && typeof req.body.fio === "string" &&
        req.body.role && typeof req.body.role === "number" ?
        next() : res.status(404).send({text: "ERROR"});
}

export function CheckDelete(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.id ? next() : res.status(404).send({text: "ERROR"});
}
