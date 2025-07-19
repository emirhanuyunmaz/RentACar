import { injectable } from "inversify";
import { IToken } from "../interfaces/IToken";
import jwt from "jsonwebtoken"
import { config } from "../utils/config";

@injectable()
export class Token implements IToken {
    
    createToken({ id, admin }: { id: String; admin: Number; }): String {
        console.log("ADMIN::",admin);
        const isAdmin = admin==0 ? false: true
        const token = jwt.sign(
            {id:id,admin: isAdmin},
            config.TOKEN_SECRET_KEY as string,
            {expiresIn:"30d"}
        )
        return token
    }

    verifyToken(token: string): { id: String; admin: Boolean; } {
        const decoded = jwt.verify(token, config.TOKEN_SECRET_KEY as string)
        return decoded as { id: String; admin: Boolean };
    }

}