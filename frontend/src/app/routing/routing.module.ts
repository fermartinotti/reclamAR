import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@Angular/router';
import {CrearReclamoComponent} from "../crear-reclamo/crear-reclamo.component";
import {MisReclamosComponent} from "../mis-reclamos/mis-reclamos.component";
import {LuminariaComponent} from "../luminaria/luminaria.component";

const appRoutes: Routes = [
  {path: 'mis-reclamos', component: MisReclamosComponent},
  {path: 'crear-reclamo', component: CrearReclamoComponent},
  {path: 'crear-reclamo/luminaria',component: LuminariaComponent},
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
