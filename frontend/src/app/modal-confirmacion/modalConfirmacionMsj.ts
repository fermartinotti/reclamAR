import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: 'cuadrilla-borrado',
  template: '¿Está seguro de que desea borrar esta cuadrilla?'
})

export class CuadrillaBorradoComponent{}

@Component({
  selector: 'reabrir-reclamo',
  template: '¿Está seguro de que desea reabrir este reclamo?'
})

export class ReabrirReclamoComponent{}

export const ConfirmacionMsjComponent =
  [CuadrillaBorradoComponent, ReabrirReclamoComponent];