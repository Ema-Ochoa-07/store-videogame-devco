import { Request, Response } from "express"
import { UserService } from "../services/user.service"


export class UsersController{

    constructor(
        private readonly userService: UserService
    ){}

    createUsers = (req:Request, res: Response) => {
       
        const {name, lastname} = req.body

        this.userService.createUser({name, lastname})
        .then((user) => {
            return res.status(201).json(user)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    findOneUsers = (req:Request, res: Response) => {
        
        const { id } = req.params;    
        this.userService.findOneUser(+id)
        
          .then(user => res.status(200).json(user))
          .catch(error => res.status(500).json(error))
    }

    findAllUsers = (req:Request, res: Response) => {

     this.userService.findAllUsers()

        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json(error))
    }



    updateUsers = (req:Request, res: Response) => {
        const { id } = req.params
        const {name, lastname} = req.body

        if(isNaN(+id)){
            return res.status(400).json({message:'El id debe ser un número'})
        }
        
        this.userService.updateUsers({name, lastname}, +id)
        .then(user => {
            return res.status(200).json(user)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }


    deleteUsers = (req:Request, res: Response) => {
        
        const {id} = req.params
        if (isNaN(+id)) {
            return res.status(400).json({ message: 'El id debe ser un numero' })
          }
        
        this.userService.deleteUser(+id)
        
        .then(user => {
            return res.status(200).json(user)
        })
        .catch(error => {
            return res.status(500).json(error)
        })


    }

}