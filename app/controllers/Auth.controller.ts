import * as bcrypt from "bcrypt";
import * as express from "express";
import { JWTService } from "../services/Jwt.service";
import { UserService } from "../services/User.service";

export class AuthController {

    public static async Index(req: express.Request, res: express.Response) {
        const username = req.body.username;
        const password = req.body.password;

        UserService.FindByUsername(username).then(async (user) => {
            if (bcrypt.compareSync(password, user.password)) {
                const token = await JWTService.signToken({
                    id: user.id,
                    username: user.username,
                    role: user.role,
                }, { expiresIn: 60 * 60 * 60 });

                return res.send({
                    access_token: token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                    },
                });
            } else {
                return res.send({error: "ERROR"});
            }
        }).catch((err) => {
            return res.send({error: "ERROR"});
        });
    }

    public static async Check(req: express.Request, res: express.Response) {
        try {
            const token = await JWTService.extractToken(req);
            const decoded = await JWTService.verifyToken(token.toString(), "");

            res.send(decoded);
        } catch (e) {
            res.send({text: "ERROR"});
        }
    }
}
