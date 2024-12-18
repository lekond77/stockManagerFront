import { LOCALE_ID, NgModule } from "@angular/core";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { CommonModule, registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTOR_PROVIDERS } from "./interceptors";

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        
    ],
    exports: [
        NavbarComponent
    ],

    providers:[
        {provide:LOCALE_ID, useValue:"fr-FR"},
        HTTP_INTERCEPTOR_PROVIDERS
    ]
})
export class CoreModule{
    constructor(){
        registerLocaleData(fr.default);
    }
}