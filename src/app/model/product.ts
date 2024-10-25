export class Product{

    constructor(public reference:string, public quantity: number, public unitPrice:number){}

    public amount(): number{
        return this.quantity * this.unitPrice;
    }
}       