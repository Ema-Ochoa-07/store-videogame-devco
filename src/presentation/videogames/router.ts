import { Router } from "express";
import { VideogamesController } from "./controller";
import { VideogameService } from "../services/videogame.service";
import { UserService } from "../services/user.service";

export class VidegamesRoutes{
    static get routes(): Router{
        const router = Router()

        const userService = new  UserService()
        const videogameService = new VideogameService(userService)
        const videogameController = new VideogamesController(videogameService)

        router.get('/', videogameController.findAllVideogames)
        router.post('/', videogameController.createVideogames)
        router.get('/:id', videogameController.findOneVideogames)
        router.patch('/:id', videogameController.updateVideogames)
        router.delete('/:id', videogameController.deleteVideogames)

        return router
    }
}