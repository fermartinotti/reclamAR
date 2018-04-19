import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {CrearReclamoComponent} from "../crear-reclamo/crear-reclamo.component";
import {MisReclamosComponent} from "../mis-reclamos/mis-reclamos.component";
import {LuminariaComponent} from "../luminaria/luminaria.component";
import {SemaforoComponent} from "../semaforo/semaforo.component";
import {ArboledaComponent} from "../arboleda/arboleda.component";
import {BacheoComponent} from "../bacheo/bacheo.component";
import {TodosLosReclamosComponent} from "../todos-los-reclamos/todos-los-reclamos.component";
import {ReclamoComponent} from "../reclamo/reclamo.component";

const appRoutes: Routes = [
  {path: 'mis-reclamos', component: MisReclamosComponent},
  {path: 'mis-reclamos/:id', component: ReclamoComponent},
  {path: 'crear-reclamo', component: CrearReclamoComponent},
  {path: 'todos-los-reclamos', component: TodosLosReclamosComponent},
  {path: 'crear-reclamo/luminaria',component: LuminariaComponent},
  {path: 'crear-reclamo/semaforo',component: SemaforoComponent},
  {path: 'crear-reclamo/arboleda',component: ArboledaComponent},
  {path: 'crear-reclamo/bacheo',component: BacheoComponent},
  {path: '**', redirectTo: 'crear-reclamo'}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],

  exports:[
    RouterModule,
  ]


})
export class RoutingModule { }
