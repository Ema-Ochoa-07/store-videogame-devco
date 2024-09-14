import { Request, Response } from "express"
import { UserService } from "../services/user.service"
import { error } from "console"


export class UsersController{

    constructor(
        private readonly userService: UserService
    ){}

    createUsers = (req:Request, res: Response) => {
       
        const {name, lastname} = req.body

        this.userService.createUser({name, lastname})
        .then((user) => {
            res.status(201).json(user)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    }

    findAllUsers = (req:Request, res: Response) => {
        res.status(200).json({message: 'ok'})
    }

    findOneUsers = (req:Request, res: Response) => {
        
        const { id } = req.params;    
        this.userService.findOneUser(+id)
        
          .then(user => res.status(200).json(user))
          .catch(error => res.status(500).json(error))
    }


    updateUsers = (req:Request, res: Response) => {
        
    }


    deleteUsers = (req:Request, res: Response) => {
        
    }

}