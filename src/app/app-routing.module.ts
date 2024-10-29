import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";
import { SecurityComponent } from "./security/security.component";

const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'produits', component: ProductComponent},
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