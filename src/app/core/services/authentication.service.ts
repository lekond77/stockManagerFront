import { HttpClient } from "@angular/common/http";
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
    login(user:User): Observable<User>{
       // console.log(user);
        return this.http.post<User>(API_URL + "/login", user, {
            withCredentials:true
        });
    }

}