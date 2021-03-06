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
import {AuthGuardService as AuthGuard} from "../auth/auth-guard.service";
import {AuthGuardAdminService as AuthGuardAdmin} from "../auth/auth-guard-admin.service";
import {CallbackComponent} from "../callback/callback.component";
import {AdminPanelComponent} from "../admin-panel/admin-panel.component";
import {AdminCuadrillaComponent} from "../admin-cuadrilla/admin-cuadrilla.component";
import {AdminReclamosComponent} from "../admin-reclamos/admin-reclamos.component";
import {CuadrillaComponent} from "../cuadrilla/cuadrilla.component";
import {QuejasComponent} from "../quejas/quejas.component";
import {TicketsAdminComponent} from "../tickets-admin/tickets-admin.component";

const appRoutes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'mis-reclamos', component: MisReclamosComponent, canActivate: [AuthGuard]},
  {path: 'mis-reclamos/:id', component: ReclamoComponent},
  {path: 'crear-reclamo', component: CrearReclamoComponent, canActivate: [AuthGuard]},
  {path: 'todos-los-reclamos', component: TodosLosReclamosComponent},
  {path: 'nuevo-reclamo', component: NuevoReclamoComponent, children:[
    {path: 'luminaria', component: LuminariaComponent, canActivate: [AuthGuard]},
    {path: 'semaforo', component: SemaforoComponent, canActivate: [AuthGuard]},
    {path: 'bacheo', component: BacheoComponent, canActivate: [AuthGuard]},
    {path: 'arboleda', component: ArboledaComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'admin-panel', component: AdminCuadrillaComponent, canActivate: [AuthGuard] },
  {path: 'tickets', component: TicketsAdminComponent, canActivate: [AuthGuard] },
  {path: 'cuadrillas/:id', component: CuadrillaComponent, canActivate: [AuthGuard] },
  {path: 'tengo-un-problema', component: QuejasComponent, canActivate:[AuthGuard]},

  {path: 'callback', component: CallbackComponent},
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
