import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit{

  loginForm!:FormGroup;
  isPasswordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private authenService: AuthenticationService , private router: Router){}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onTogglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmitLoginForm():void{
    const data = this.loginForm.value
    this.authenService.login(data.username, data.password).pipe(
     tap((token) =>{
      localStorage.setItem('token', token);
      localStorage.setItem('user', data.username);

      this.authenService.isUserLoggedIn$.next(true);
      
      this.router.navigate(['/produits']);
     }),
     catchError((error) =>{
      return error;
    })
    ).subscribe();
  }

}
