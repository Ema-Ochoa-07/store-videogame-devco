import { Request, Response, Router } from "express";
import { VidegamesRoutes } from "./videogames/router";
import { UsersRoutes } from "./users/router";
import { PurchasesRoutes } from "./purchases/router";

export class AppRoutes{
    static get routes(): Router{
        const router = Router()

        router.post('/test', (req: Request, res:Response) => {
            return res.status(200).json({ ok:true})
        })
        router.use('/api/v1/users', UsersRoutes.routes)
        router.use('/api/v1/videogames', VidegamesRoutes.routes)
        router.use('/api/v1/purchases', PurchasesRoutes.routes)
    

        return router
    }
}