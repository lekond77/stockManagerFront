import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { API_URL } from "../config/api.url.config";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    constructor(private http: HttpClient){

    }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(API_URL + "/produits");
    }

    getProduct(productId: number): Observable<Product> {
        return this.http.get<Product>(API_URL + `/produit/${productId}`);
    }

    addProduct(product : Product): Observable<Product>{
        return this.http.post<Product>(API_URL + "/produit", product);
    }

    updateProduct(product : Product): Observable<Product>{
        console.log(product);
        return this.http.put<Product>(API_URL + `/produit/${product.id}`, product);
    }

    deleteProduct(productId: number): Observable<any>{
        return this.http.delete<Product>(API_URL + `/produit/${productId}`);
    }

}