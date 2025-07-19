import { User } from "../entities/User";


export interface IUserRepository{
    createUser(data:User):Promise<Boolean>;
    findUser(id:string):Promise<User>;
    loginUser({email,password}:{email:string,password:string}):Promise<User>;
    deleteUser():Promise<User>;
    updateUser({id,data}:{id:String,data:User}):Promise<User>;
}