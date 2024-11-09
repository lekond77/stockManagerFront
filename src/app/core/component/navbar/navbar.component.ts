import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  user: string | null = null;
  isLoggedIn!:boolean;

  constructor(private authenService: AuthenticationService, private router:Router, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    this.authenService.isUserLoggedIn$.subscribe(value => {
      this.isLoggedIn = value;
      this.setUserName();
    });
    this.setUserName();
  }

  setUserName():void{
    this.user =  localStorage.getItem('user');
  }

  deconnexion(){
    localStorage.clear();
    this.authenService.isUserLoggedIn$.next(false);
    this.router.navigate(['']);
  }

}
