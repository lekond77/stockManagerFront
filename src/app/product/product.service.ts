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
        return this.http.get<Product[]>(API_URL + "products");
    }
}