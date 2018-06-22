import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: 'reclamo-success',
  template: '' +
  '<p>Su reclamo se ha creado exitosamente!<br>\n' +
  'Reclamo numero #{{link}}<br>\n' +
  'Puede visualizar el estado de su reclamo haciendo click <a href="/mis-reclamos/{{link}}" id="link" class="alert-link">aqui</a></p>'
})

export class ReclamoSucessComponent{
  @Input() link;

}

@Component({
  selector: 'reclamo-error',
  template: 'Ha ocurrido un error al crear su reclamo, por favor, reintente.'
})

export class ReclamoErrorComponent{

}

@Component({
  selector: 'error-buscando-reclamo',
  template: 'No existe ningun reclamo con este numero de seguimiento'
})
export  class ErrorBuscandoReclamoComponent{
  @Input() tittle;
}

@Component({
  selector: 'cuadrilla-error',
  template: 'No se puede borrar la cuadrilla ya que tiene uno o mas reclamos asignados'
})

export class CuadrillaErrorComponent{
}

@Component({
  selector: 'cuadrilla-borrar',
  template: 'La cuadrilla se ha eliminado del sistema'
})

export class CuadrillaBorrarComponent{
}

@Component({
  selector: 'reclamo-finalizado',
  template: 'El reclamo se ha finalizado de forma exitosa'
})

export class ReclamoFinalizadoComponent{
}

export const ReclamoMsjComponent =
  [ ReclamoSucessComponent, ReclamoErrorComponent, ErrorBuscandoReclamoComponent, CuadrillaErrorComponent, CuadrillaBorrarComponent, ReclamoFinalizadoComponent ];
