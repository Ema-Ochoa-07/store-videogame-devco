import { Purchase} from "../../data";
import { BuyVideogameDTO } from "../../domain/dtos/videogame/buyVideogame.dto";
import { UserService } from "./user.service";
import { VideogameService } from "./videogame.service";


export class PurchaseService{

    constructor(
        private readonly userService: UserService,
        private readonly videogameService: VideogameService
    ){}

    

     async purchaseVideogame(buyVideogameDTO: BuyVideogameDTO){    

        const purchaseUserPromise = this.userService.findOneUser(buyVideogameDTO.userId)
        const saleVideogamePromise = this.videogameService.findOneVideogame(buyVideogameDTO.videogameId)
        const [purchaseUser, saleVideogame] = await Promise.all([purchaseUserPromise, saleVideogamePromise])

        //******AMOUNT********
        //Validar que el monto que tiene disponible el usuario no sea menor al que quiere enviar
        if(purchaseUser.amount < buyVideogameDTO.amount)
            throw new Error('Fondos Insuficientes')

        
        //******COST********
        //Validar que stock del videojuego no sea menor al que solicita el usuario
        if (saleVideogame.cost !== buyVideogameDTO.amount)
            throw new Error('OJO!! El costo del video juego es'+ saleVideogame.cost)

 
        //******QUANTITY********
        //Validar que stock del videojuego no sea menor al que solicita el usuario
        if(saleVideogame.quantity < buyVideogameDTO.quantity)
            throw new Error('El video juego '+ saleVideogame.name +' está agotado ' )
        

        // calcular el resultado del envío tanto para el usuario 
        // como para la tienda con ese videojuego
        const resultingAmountUser = purchaseUser.amount - buyVideogameDTO.amount
        const resultAmountVideogame = saleVideogame.amount + buyVideogameDTO.amount

         //Promises updates amount user and videojuego
         const updateUserAmountPromise = this.userService.updateAmount(buyVideogameDTO.userId, resultingAmountUser)
         const updateVideogameAmountPromise = this.videogameService.updateAmount(buyVideogameDTO.videogameId, resultAmountVideogame)
        


        // calcular el resultado del envío de stock tanto para el usuario 
        // como para la tienda con ese videojuego
        const resultingQuantityUser = purchaseUser.quantity + buyVideogameDTO.quantity
        const resultingQuantityVideogame = saleVideogame.quantity - buyVideogameDTO.quantity
        
        //Promises updates quantity user and videojuego        
        const updateUserQuantitPromise = this.userService.updateQuantity(buyVideogameDTO.userId, resultingQuantityUser)   
        const updateVideogameQuantityPromise = this.videogameService.updateQuantity(buyVideogameDTO.videogameId, resultingQuantityVideogame)


        const createInvoicePromise = this.createInvoice(buyVideogameDTO.quantity, buyVideogameDTO.amount, purchaseUser.id, saleVideogame.id)

        try {
            return await Promise.all([updateUserAmountPromise, updateVideogameAmountPromise, updateUserQuantitPromise,
                 updateVideogameQuantityPromise, createInvoicePromise])
        } catch (error) {
            throw new Error('Ups Error algo salió mal 🧨')
        }

     }



     createInvoice = async (quantity:number, amount: number, userId:number, videogameId:number ) =>{

        const purchase = new Purchase()

        purchase.quantity = quantity
        purchase.amount = amount
        purchase.userId = userId
        purchase.videogameId = videogameId

        try {
            return await purchase.save()
            // return{
            //     ok:true
            // }
        } catch (error) {
            throw new Error('Ups Error algo salió mal 🧨')
        }
     }

}           