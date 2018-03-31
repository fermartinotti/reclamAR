import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReclamoService} from "./services/reclamo.service";


@NgModule({
  declarations: [
    AppComponent,
    CrearReclamoComponent
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
