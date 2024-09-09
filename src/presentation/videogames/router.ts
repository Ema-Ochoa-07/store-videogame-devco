import { Router } from "express";
import { VideogamesController } from "./controller";
import { VideogameService } from "../services/videogame.service";

export class VidegamesRoutes{
    static get routes(): Router{
        const router = Router()

        const videogameService = new VideogameService
        const controller = new VideogamesController(videogameService)

        router.get('/', controller.findAllVideogames)
        router.post('/', controller.createVideogames)
        router.get('/:id', controller.findOneVideogames)
        router.patch('/:id', controller.updateVideogames)
        router.delete('/:id', controller.updateVideogames)

        return router
    }
}