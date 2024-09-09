import { Router } from "express";
import { VideogamesController } from "./controller";

export class VidegamesRoutes{
    static get routes(): Router{
        const router = Router()


        const controller = new VideogamesController

        router.get('/', controller.findAllVideogames)
        router.post('/', controller.createVideogames)
        router.get('/:id', controller.findOneVideogames)
        router.patch('/:id', controller.updateVideogames)
        router.delete('/:id', controller.updateVideogames)



        return router
    }
}