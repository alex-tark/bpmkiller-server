import * as express from "express";

export function CheckCreate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.type && typeof req.body.type === "string" &&
    req.body.description && typeof req.body.description === "string" &&
    req.body.assigned &&
    req.body.status ? next() : res.status(404).send({text: "ERROR"});
}

export function CheckUpdate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.type && typeof req.body.type === "string" &&
    req.body.description && typeof req.body.description === "string" &&
    req.body.assigned &&
    req.body.status ?
        next() : res.status(404).send({text: "ERROR"});
}

export function CheckDelete(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.id ? next() : res.status(404).send({text: "ERROR"});
}
