import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from "./components/home/home.component";
import { SecurityComponent } from "./components/security/security.component";
import { authGuard } from "./core/guard/auth.guard";

const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'produits', component: ProductComponent, canActivate:[authGuard]},
    {path: 'login', component:SecurityComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}