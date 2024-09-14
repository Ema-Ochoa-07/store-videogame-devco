import { error } from "console";
import { Videogame } from "../../data";
import { UserService } from "./user.service";


export class VideogameService{

    constructor(
        private readonly userService: UserService
    ){}

    async createVideogame(videogameData: any){

        
        const videogame = new Videogame()        

        videogame.name = videogameData.name.toLowerCase().trim()
        videogame.console = videogameData.console.toLowerCase().trim()
        videogame.quantity = videogameData.quantity   
        videogame.user = videogameData.userId    
        // videogame.user = user         

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
            }
        })

        if(!videogame) throw new Error("Video juego no encontrado")
            return videogame
    }

}           