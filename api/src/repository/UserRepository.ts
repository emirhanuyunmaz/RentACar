import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import db from "../../dbConnection"
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository{
    
    async createUser({name , surname , email , password , gender }:User): Promise<Boolean> {
        try{
            await db("users").insert({name , surname , email , password , gender })        
            return true
        }catch(Err){
            return false
        }
    }
    
    async findUser(id:string): Promise<User> {
        const data = await db("users").where("id",id).first()
        return data
    }
    
    async loginUser({ email, password }: { email: string; password: string; }): Promise<User> {
        const data = await db("users").where("email",email).where("password",password).first()
        console.log(data);
        return data
    }

    async updateUser({id,data}:{id:String,data:User}): Promise<User> {
        const user = await db("users").where("id",id).first()
        if(user){
            await db("user").where("id",id).update(data)
            return data
        }
        throw new Error("User Not Found")
    }

    deleteUser(): Promise<User> {
        throw new Error("Method not implemented.");
    }

}