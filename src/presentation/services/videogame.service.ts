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

    async findAllVideogames(){
        try {
            return await Videogame.find({
                
            })
        } catch (error: any) {
            throw new Error("Ups Error!, algo salió mal 🧨")
        }
    }

    async updateVideogames(videogameData: any, id: number){

        const videogame = await this.findOneVideogame(id)

        videogame.name = videogameData.name.toLowerCase().trim()
        videogame.console = videogameData.console.toLowerCase().trim()
        videogame.quantity = videogameData.quantity

        try {
            return videogame.save()
        } catch (error) {
            throw new Error("Ups Error algo salió mal 🧨")
        }
    }

    async deleteVideogame(id: number){

        const videogame = await this.findOneVideogame(id)
        
        try {
            return videogame.remove()
        } catch (error) {
            throw new Error('Ups Error algo salió mal 🧨')
        }
    }


    async sellVideogame(videogameData: any){    
        
    }

}           