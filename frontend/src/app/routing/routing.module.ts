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
import {InicioComponent} from "../inicio/inicio.component";
import {NuevoReclamoComponent} from "../nuevo-reclamo/nuevo-reclamo.component";

const appRoutes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'mis-reclamos', component: MisReclamosComponent},
  {path: 'mis-reclamos/:id', component: ReclamoComponent},
  {path: 'crear-reclamo', component: CrearReclamoComponent},
  {path: 'todos-los-reclamos', component: TodosLosReclamosComponent},
  {path: 'nuevo-reclamo', component: NuevoReclamoComponent, children:[
    {path: 'luminaria', component: LuminariaComponent},
    {path: 'semaforo', component: SemaforoComponent},
    {path: 'bacheo', component: BacheoComponent},
    {path: 'arboleda', component: ArboledaComponent}
  ]},
  {path: '**', redirectTo: 'inicio'}
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
