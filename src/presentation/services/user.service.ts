import { User } from "../../data";



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
}