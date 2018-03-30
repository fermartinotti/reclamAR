import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearReclamoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
