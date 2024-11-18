import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { API_URL } from "../config/api.url.config";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{


    public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 

    constructor(private http: HttpClient){}

    login(username:string, password:string): Observable<string>{

        const credentials = btoa(username + ':' + password);
        const headers = new HttpHeaders().set('Authorization', `Basic ${credentials}`);
                                    
        return this.http.post<string>(API_URL + "/login", {}, { headers, responseType: 'text' as 'json'}).pipe(
            catchError(() => { 
                return throwError(() => new Error('Invalid credentials'));
            })
        );    
    }

    logout(){
        
        return this.http.post<any>(API_URL + "/logout", {});
    }
    getUserName(token:string){
      
    }
    
}