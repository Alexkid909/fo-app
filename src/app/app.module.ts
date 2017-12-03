import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoVersionComponent } from './fo-version/fo-version.component';
import {FoService} from "./services/fo.service";


@NgModule({
  declarations: [
    AppComponent,
    FoVersionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
