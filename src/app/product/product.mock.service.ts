import { Injectable } from "@angular/core";
import { Product } from "../model/product"

@Injectable()
export default class ProductMockService{

    PRODUCTS: Product[] = [];

    constructor(){
        let p1:Product = new Product("122330", 3, 12);
        let p2:Product = new Product("122367", 2, 34);
        let p3:Product = new Product("345623", 3, 60);
        this.PRODUCTS = [p1, p2, p3];
    }

    public getProducts(): Product[]{
        return this.PRODUCTS;
    }
}