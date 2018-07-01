import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: 'cuadrilla-borrado',
  template: '¿Está seguro de que desea borrar esta cuadrilla?'
})

export class CuadrillaBorradoComponent{

}

export const ConfirmacionMsjComponent =
  [CuadrillaBorradoComponent];