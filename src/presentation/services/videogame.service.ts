import { Videogame } from "../../data";


export class VideogameService{

    async createVideogame(videogameData: any){

        // Validar que exista videogame

        const videogame = new Videogame()
        
        videogame.name = videogameData.name.toLowerCase().trim()
        videogame.console = videogameData.console.toLowerCase().trim()
        videogame.quantity = videogameData.quantity.trim()

        try {
            return await videogame.save()
        } catch (error) {
            console.log(error)
        }
    }
}