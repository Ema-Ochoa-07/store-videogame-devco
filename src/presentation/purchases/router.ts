import { Router } from "express";
import { PurchasesController } from "./controller";
import { VideogameService } from "../services/videogame.service";
import { PurchaseService } from "../services/purchase.service";
import { UserService } from "../services/user.service";

export class PurchasesRoutes{
    static get routes(): Router{
        const router = Router()

        const userService = new UserService()
        const videogameService = new VideogameService(userService)
        const purchaseService = new PurchaseService(userService, videogameService)
        const purchaseController = new PurchasesController(purchaseService)


        router.post('/', purchaseController.purchaseVideogame)

        return router
    }
}