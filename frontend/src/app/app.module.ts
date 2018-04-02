import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReclamoService} from "./services/reclamo.service";
import { MisReclamosComponent } from './mis-reclamos/mis-reclamos.component';
import { LuminariaComponent } from './luminaria/luminaria.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearReclamoComponent,
    MisReclamosComponent,
    LuminariaComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ReclamoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
