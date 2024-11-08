import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authenService : AuthenticationService, private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
        
      if(req.url.endsWith('/login') || !token){
        return next.handle(req);
      }
      
      const headers = new HttpHeaders()
        .append('Authorization', `Bearer ${ token }`);
        
        const modifiedReq = req.clone({ headers });

        return next.handle(modifiedReq); 
    }
}