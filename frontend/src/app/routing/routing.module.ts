import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@Angular/router';
import {CrearReclamoComponent} from "../crear-reclamo/crear-reclamo.component";

const appRoutes: Routes = [
  {path: 'crear-reclamo', component: CrearReclamoComponent},
  {path: '**', redirectTo: 'crear-reclamo'}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],

  exports:[
    RouterModule
  ]


})
export class RoutingModule { }
