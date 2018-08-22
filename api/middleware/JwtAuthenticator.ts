import { Action } from "routing-controllers";
import * as jwt from "jsonwebtoken";
import * as config from "config";

export default async function authenticate(action: Action, roles: string[]) {
    let isAuthorized = false;
    let token = action.request.headers["authorization"];

    if (!token) {
        isAuthorized = false;
    } else {
        let decodedToken: any = null;
        token = token.replace("Bearer ", "");

        try {
            decodedToken = jwt.verify(token, config.get("jwt.key"));
            action.context.state.currentUserId = decodedToken.userId;
            isAuthorized = decodedToken.userId;
        } catch (err) {
            isAuthorized = false;
        }
    }

    return isAuthorized;
}
