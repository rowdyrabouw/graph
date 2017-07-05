import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { AppRoutes, AppComponents } from "./app.routing";

import { AppComponent } from "./app.component";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
NativeScriptModule, TNSFontIconModule.forRoot({
    'fa': 'assets/css/font-awesome-vendor.css'
  }),],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
