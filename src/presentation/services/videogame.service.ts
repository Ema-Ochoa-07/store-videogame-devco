import { error } from "console";
import { Videogame } from "../../data";


export class VideogameService{

    async createVideogame(videogameData: any){

        // Validar que exista videogame

        const videogame = new Videogame()
        
        videogame.name = videogameData.name.toLowerCase().trim()
        videogame.console = videogameData.console.toLowerCase().trim()
        videogame.quantity = videogameData.quantity
        videogame.user_id = videogameData.userId        

        try {
            return await videogame.save()
        } catch (error) {
            console.log(error)
        }
    }

    async findOneVideogame(id: number){
        const videogame = await Videogame.findOne({
            where:{
                id: id
            }, relations: ['user'],
            select:{
                id: true,
                name: true
            }
        })
        
        if(!videogame) throw new Error("No existe el video juego")
            return videogame
    }
}