import { User } from "../../data";

export enum UserStatus{
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}

export class UserService{

    async createUser(userData: any){

        //VerificarQue el usuario exista
      
        const user = new User()
        user.name = userData.name.toLowerCase().trim()
        user.lastname = userData.lastname.toLowerCase().trim()

        try {
            return await user.save()
        } catch (error) {
            console.log(error)
        }
    }


    async findOneUser(id:number){
        const user = await User.findOne({
            
            where:{
              id: id
            }, 
            select:{
                videogames:{
                  name: true
                }            
        },

            relations:['videogames']
        })
            
        if(!user) throw Error('Usuario no encontrado')
        return user
    }

    async findAllUsers(){
        try {
            return await User.find({

                where:{
                    status: UserStatus.ACTIVE
                }
            })
        } catch (error: any) {
            throw new Error('Ups Error algo salió mal 🧨')
        }
    }

    async updateUsers(userData: any, id:number){

        const user = await this.findOneUser(id)

        user.name = userData.name.toLowerCase().trim()
        user.lastname = userData.lastname.toLowerCase().trim()

        try {
            return await user.save()    
        } catch (error) {
            throw new Error('Ups Error algo salió mal 🧨')
        }
    }


}