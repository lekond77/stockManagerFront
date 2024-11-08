import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../config/api.url.config";
import { User } from "../model/user";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{

    private token = 'token';
    constructor(private http: HttpClient){}
    
    getToken(): string{
        return this.token;
    }
    login(username:string, password:string): Observable<any>{

        const credentials = btoa(username + ':' + password);
        const headers = new HttpHeaders().set('Authorization', `Basic ${credentials}`)
                                         .set('responseType',  'text');

        return this.http.post<any>(API_URL + "/login", {}, { headers });    
    }

}