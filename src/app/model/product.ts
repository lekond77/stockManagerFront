export class Product{

    constructor(private reference:string, private quantity: number, private unitPrice:number){}
  //  reference ! : string;
    // quantity!: number;
    // unitPrice!:number;

    public getReference():string{
        return this.reference;
    }

    public getQuantity(): number{
        return this.quantity;
    }

    public getUnitPrice(): number{
        return this.unitPrice;
    }

    public amount(): number{
        return this.quantity * this.unitPrice;
    }
}       