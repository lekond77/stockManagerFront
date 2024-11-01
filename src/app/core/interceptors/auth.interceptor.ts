import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authenService : AuthenticationService, private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders()
        .append('Authorization', `Bearer ${ this.authenService.getToken() }`);

        const modifiedReq = req.clone({ headers });

        return next.handle(modifiedReq);
        
        /* .pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401 || error.status === 403) {
                // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
                this.router.navigateByUrl('/login');
              }
              return throwError(error);
            })
          ); */
    }
}