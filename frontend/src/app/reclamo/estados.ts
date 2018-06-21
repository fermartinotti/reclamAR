import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {Estado} from "../model/estado";

@Component({
  selector: 'estado-abierto',
  template: `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong class="d-block text-gray-dark">Reclamo {{estado?.type}}</strong>
              Su estado paso a {{estado?.type}}.
              <i>{{estado?.fechaIninio}}</i>
            </p>`

})

export class EstadoAbiertoComponent{
  @Input() estado: Estado;

}

@Component({
  selector: 'estado-reparacion',
  template: `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong class="d-block text-gray-dark">Reclamo en {{estado?.type}}</strong>
              Su estado paso a {{estado?.type}}.
              Fecha aproximada de resolución: <i>{{estado?.fechaDeReparacion}}</i>
            </p>`

})

export class EstadoReparacionComponent{
  @Input() estado: Estado;

}

@Component({
  selector: 'estado-finalizado',
  template: `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong class="d-block text-gray-dark">Reclamo  {{estado?.type}}</strong>
              Su estado paso a {{estado?.type}}.
              Su reclamo se soluciono el dia: <i>{{estado?.fechaFinalizacion}}</i>
            </p>`

})

export class EstadoFinalizadoComponent{
  @Input() estado: Estado;

}








export const estadosViewComponent = [ EstadoAbiertoComponent, EstadoReparacionComponent, EstadoFinalizadoComponent];
