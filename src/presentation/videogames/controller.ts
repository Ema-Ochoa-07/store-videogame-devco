import { Request, Response } from "express"
import { VideogameService } from "../services/videogame.service"

export class VideogamesController{


   constructor(
      private readonly videogameService: VideogameService
   ){}

  
   createVideogames = (req:Request, res: Response) => {
       
      const { name, console, quantity, userId } = req.body

      this.videogameService.createVideogame({name, console, quantity, userId})
      .then((videogame) => {
          res.status(201).json(videogame)
      })
      .catch((error) => {
          res.status(500).json(error)
      })
  }

   
   
   findAllVideogames = (req: Request, res: Response) => {
    res.status(200).json({message: 'ok'})
   }


   findOneVideogames = (req: Request, res: Response) => {
    
    const { id } = req.params
    
    this.videogameService.findOneVideogame(+id)
        .then(videogame => res.status(200).json(videogame))
        .catch(error => res.status(500).json(error))
   }


   updateVideogames = (req: Request, res: Response) => {

   }


   deleteVideogames = (req: Request, res: Response) => {

   }

   
}