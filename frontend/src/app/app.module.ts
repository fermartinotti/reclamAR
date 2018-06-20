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
import {DataSenderService} from "./services/dataSender.service";
import { HttpModule } from '@angular/http';
import { MapGlobalComponent } from './map-global/map-global.component';
import { CallbackComponent } from './callback/callback.component';
import {AuthService} from './auth/auth.service'
import {AuthGuardService} from "./auth/auth-guard.service";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AuthGuardAdminService} from "./auth/auth-guard-admin.service";
import {UsuarioService} from "./services/usuario.service";
import { AdminCuadrillaComponent } from './admin-cuadrilla/admin-cuadrilla.component';
import { AdminReclamosComponent } from './admin-reclamos/admin-reclamos.component';
import {CuadrillaService} from "./services/cuadrilla.service";
import { CuadrillaComponent } from './cuadrilla/cuadrilla.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    NuevoReclamoComponent,
    MapGlobalComponent,
    CallbackComponent,
    AdminPanelComponent,
    AdminCuadrillaComponent,
    AdminReclamosComponent,
    CuadrillaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
	  CommonModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
	  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCmSSC-ooBccku86fEmRa1coVThfluAU0'
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    ReclamoService,
    UsuarioService,
    CuadrillaService,
    DataSenderService,
    AuthService,
    AuthGuardService,
    AuthGuardAdminService
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgModalContentComponent],
})
export class AppModule { }
