import { Router } from "express";
import { VidegamesRoutes } from "./videogames/router";
import { UsersRoutes } from "./users/router";
import { PurchasesRoutes } from "./purchases/router";

export class AppRoutes{
    static get routes(): Router{
        const router = Router()


        router.use('/api/v1/users', UsersRoutes.routes)
        router.use('/api/v1/videogames', VidegamesRoutes.routes)
        router.use('/api/v1/purchases', PurchasesRoutes.routes)
        //stores_vgames_db

        return router
    }
}