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
import { NgModalContentComponent } from './ng-modal-content/ng-modal-content.component';
import {ReclamoMsjComponent} from "./ng-modal-content/ng-modalMsj";
import { MapComponent } from './map/map.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ReclamoComponent } from './reclamo/reclamo.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ArboledaComponent } from './arboleda/arboleda.component';
import { BacheoComponent } from './bacheo/bacheo.component';
import {reverseCheckboxComponent} from "./reclamo/reverse-checkbox";
import { InicioComponent } from './inicio/inicio.component';
import { NuevoReclamoComponent } from './nuevo-reclamo/nuevo-reclamo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearReclamoComponent,
    MisReclamosComponent,
    LuminariaComponent,
    TodosLosReclamosComponent,
    NgModalContentComponent,
    ReclamoMsjComponent,
    reverseCheckboxComponent,
    MapComponent,
    ReclamoComponent,
    SemaforoComponent,
    ArboledaComponent,
    BacheoComponent,
    InicioComponent,
    NuevoReclamoComponent
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
    }),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ReclamoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgModalContentComponent],
})
export class AppModule { }
