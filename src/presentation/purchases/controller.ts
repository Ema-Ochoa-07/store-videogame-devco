import { Request, Response } from "express"
import { VideogameService } from "../services/videogame.service"
import { UserService } from "../services/user.service"
import { PurchaseService } from "../services/purchase.service"
import { BuyVideogameDTO } from "../../domain/dtos/videogame/buyVideogame.dto"

export class PurchasesController{


   constructor(
      private readonly purchaseService: PurchaseService
   ){}

  
   purchaseVideogame = (req:Request, res: Response) => {
       const [error, createPurchase] = BuyVideogameDTO.buy(req.body)
       if(error) return res.status(422).json({message:error}) 

        this.purchaseService.purchaseVideogame(createPurchase!)
        .then((purchase) => {
            res.status(201).json(purchase)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
  } 
   
}