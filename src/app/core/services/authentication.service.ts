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
        return this.http.post<User>(API_URL + "/api/auth/login", user, {
            withCredentials:true
        });
    }

}