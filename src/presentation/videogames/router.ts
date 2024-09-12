import { Router } from "express";
import { VideogamesController } from "./controller";
import { VideogameService } from "../services/videogame.service";

export class VidegamesRoutes{
    static get routes(): Router{
        const router = Router()

        const videogameService = new VideogameService
        const videogameController = new VideogamesController(videogameService)

        router.get('/', videogameController.findAllVideogames)
        router.post('/', videogameController.createVideogames)
        router.get('/:id', videogameController.findOneVideogames)
        router.patch('/:id', videogameController.updateVideogames)
        router.delete('/:id', videogameController.updateVideogames)

        return router
    }
}