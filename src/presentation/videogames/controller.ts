import { Request, Response } from "express"
import { VideogameService } from "../services/videogame.service"
import { error } from "console"

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

    this.videogameService.findAllVideogames()
    
        .then(videogames => res.status(200).json(videogames))
        .catch(error => res.status(500).json(error))
   }


   findOneVideogames = (req: Request, res: Response) => {
    
    const { id } = req.params
    
    this.videogameService.findOneVideogame(+id)
        .then(videogame => res.status(200).json(videogame))
        .catch(error => res.status(500).json(error))
   }


   updateVideogames = (req: Request, res: Response) => {
    const {id} = req.params
    const {name, console, quantity} = req.body

    if(isNaN(+id)){
        return res.status(400).json({message:'El id debe ser un número'})
    }

    this.videogameService.updateVideogames({name, console, quantity}, +id)
    .then(videogame => {
        return res.status(200).json(videogame)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
   }


   deleteVideogames = (req: Request, res: Response) => {

        const {id} = req.params
        if(isNaN(+id)){
            throw new Error("El id debe ser un número")
        }

        this.videogameService.deleteVideogame(+id)

        .then(videogame => {
            return res.status(200).json(videogame)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
   }

   
}