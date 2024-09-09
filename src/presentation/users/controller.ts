import { Request, Response } from "express"


export class UsersController{

    constructor(){

    }

    createUsers = (req:Request, res: Response) => {
        
    }

    findAllUsers = (req:Request, res: Response) => {
        res.status(200).json({message: 'ok'})
    }

    findOneUsers = (req:Request, res: Response) => {
        
    }


    updateUsers = (req:Request, res: Response) => {
        
    }


    deleteUsers = (req:Request, res: Response) => {
        
    }

}