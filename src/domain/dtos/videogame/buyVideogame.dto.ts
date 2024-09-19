

export class BuyVideogameDTO{
    private constructor(
        public readonly amount: number,
        public readonly quantity: number,
        public readonly userId: number,
        public readonly videogameId: number,

    ){}

    static buy( object: { [key : string] : any } ): [string?, BuyVideogameDTO?] {

        const { amount, quantity, userId, videogameId } = object;
    
        if(!amount) return ['Amount is required']
        if(!quantity) return ['Quantity is required']
        if(!userId) return ['PurchaseUser is required']
        if(!videogameId) return ['SaleVideogame is required']
    
        return [undefined, new BuyVideogameDTO(amount, quantity, userId, videogameId)]
      }
}