import { Router } from "express";
import { UsersController } from "./controller";

export class UsersRoutes{
    static get routes(): Router{
        const router = Router()

        const constroller = new UsersController

        router.get('/', constroller.findAllUsers)
        router.post('/', constroller.createUsers)
        router.get('/:id', constroller.findOneUsers)
        router.patch('/:id', constroller.updateUsers)
        router.delete('/:id', constroller.deleteUsers)

        return router
    }
}