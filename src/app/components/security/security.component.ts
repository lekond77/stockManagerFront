import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit{

  loginForm!:FormGroup;
  isPasswordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private authenService: AuthenticationService){}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  onTogglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmitLoginForm():void{
    this.authenService.login(this.loginForm.value).pipe(
      tap( (r) => {
        console.log(r );
      })
    ).subscribe();
  }

}
