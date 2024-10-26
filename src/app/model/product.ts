export class Product{

    constructor(public id:number = 0, public reference:string = '', public quantity: number = 0, public unitPrice:number = 0){}

    
    public amount(): number{
        return this.quantity * this.unitPrice;
    }
}       