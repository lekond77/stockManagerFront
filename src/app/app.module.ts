import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import ProductMockService from './product/product.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [ProductMockService],
  bootstrap: [AppComponent]

})

export class AppModule{}
