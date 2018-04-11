import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReclamoService} from "./services/reclamo.service";
import { MisReclamosComponent } from './mis-reclamos/mis-reclamos.component';
import { LuminariaComponent } from './luminaria/luminaria.component';
import { TodosLosReclamosComponent } from './todos-los-reclamos/todos-los-reclamos.component';

import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CrearReclamoComponent,
    MisReclamosComponent,
    LuminariaComponent,
    TodosLosReclamosComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCmSSC-ooBccku86fEmRa1coVThfluAU0'
    })
  ],
  providers: [
    ReclamoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
