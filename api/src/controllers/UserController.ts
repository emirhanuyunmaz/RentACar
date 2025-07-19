import { inject, injectable } from "inversify";
import { IUserInteractor } from "../interfaces/IUserInteractor";
import { INTERFACE_TYPE } from "../utils/appConsts";
import { NextFunction, Request, Response } from "express";

@injectable()
export class UserController{
    private interactor:IUserInteractor

    constructor(
        @inject(INTERFACE_TYPE.UserInteractor) interactor : IUserInteractor
    ) {
        this.interactor = interactor
    }

    async onCreateUser(
        req:Request,
        res:Response,
        next:NextFunction
    ):Promise<any>{
        try{
            const body = req.body
            const data = await this.interactor.createUser(body)
            return res.status(201).json({data})
        }catch(err){
            next(err)
        }
    }


    async onLoginUser(
        req:Request,
        res:Response,
        next:NextFunction
    ):Promise<any>{
        try{
            const body = req.body
            const data = await this.interactor.loginUser(body)
            if(data){
                return res.status(200).json({token:data})
            }
            return res.status(404).json({message:"User Not found try again or register"})
            
        }catch(err){
            next(err)
        }
    }

    async onUserProfile(
        req:Request,
        res:Response,
        next:NextFunction
    ):Promise<any>{
        try{
            const id = req.headers.id
            const data = await this.interactor.findUser(id as string)
            return res.status(200).json(data)
        }catch(err){
            next(err)
        }
    }

    async onUpdateUser(
        req:Request,
        res:Response,
        next:NextFunction
    ):Promise<any>{
        try{
            console.log("On update");
            
            return res.status(200).json({messge:"succes"})
        }catch(err){
            next(err)
        }
    }

}