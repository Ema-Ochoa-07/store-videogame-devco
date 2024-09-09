import { Request, Response } from "express"

export class VideogamesController{


   constructor(){

   }

   createVideogames = (req: Request, res: Response) => {
    
   }

   
   findAllVideogames = (req: Request, res: Response) => {
    res.status(200).json({message: 'ok'})
   }


   findOneVideogames = (req: Request, res: Response) => {

   }


   updateVideogames = (req: Request, res: Response) => {

   }


   deleteVideogames = (req: Request, res: Response) => {

   }

   
}