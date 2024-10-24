import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'produits', component: ProductComponent}
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