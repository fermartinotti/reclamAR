import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {Ticket} from "../model/ticket";

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
  selector: 'cuadrilla-borrar-error',
  template: 'No se puede borrar la cuadrilla ya que tiene uno o mas reclamos asignados'
})

export class CuadrillaErrorComponent{
}

@Component({
  selector: 'cuadrilla-borrado-exitoso',
  template: 'La cuadrilla se ha borrado de forma exitosa '
})

export class CuadrillaBorradoExitosoComponent{
}

@Component({
  selector: 'reclamo-finalizado',
  template: 'El reclamo se ha finalizado de forma exitosa'
})

export class ReclamoFinalizadoComponent{
}

@Component({
  selector: 'reclamo-finalizado-error',
  template: 'No se ha podido finalizar el reclamo, por favor intente mas tarde'
})

export class ReclamoFinalizadoErrorComponent{
}

@Component({
  selector: 'reclamo-reabierto',
  template: 'El reclamo se ha reabierto de forma exitosa'
})

export class ReclamoReabiertoComponent{
}

@Component({
  selector: 'cuadrilla-borrar-error-generico',
  template: 'No se ha podido eliminar esta cuadrilla, por favor intenta mas tarde'
})

export class CuadrillaErrorGenericoComponent{
}

@Component({
  selector: 'reabrir-reclamo-error',
  template: 'No se ha podido reabrir este reclamo, por favor intenta mas tarde'
})

export class ReabrirReclamoErrorComponent{
}

@Component({
  selector: 'crear-cuadrilla-error',
  template: 'No se ha podido crear la cuadrilla, por favor intenta mas tarde'
})

export class CrearCuadrillaErrorComponent{
}

@Component({
  selector: 'asignar-reclamo-error',
  template: 'No se ha podido asignar el reclamo, por favor intenta mas tarde'
})

export class AsignarReclamoErrorComponent{
}

@Component({
  selector: 'puntuar-reclamo-error',
  template: 'No se ha podido registrar su calificación, por favor intenta mas tarde'
})

export class PuntuarReclamoErrorComponent{
}


@Component({
  selector: 'respuesta-ticket',
  template: '' +
  '<p>Ticket: {{ticket.id}} <br>\n' +
  'Generado sobre el reclamo: {{ticket.reclamo.id}}<br>\n'  +
  'creado el: {{ticket.fechaDeCreacion}}<br>\n' +
  'Motivo: {{ticket.motivo}}<br>\n' +
  'Detalle: {{ticket.detalle}} <br>\n' +
  '<div *ngIf="ticket?.respuesta!=null">Respuesta: {{ticket.respuesta}} </div><br>\n '
})

export class RespuestaTicketComponent{
  @Input() ticket:Ticket;

}

export const ReclamoMsjComponent =
  [ ReclamoSucessComponent, ReclamoErrorComponent, ErrorBuscandoReclamoComponent, CuadrillaErrorComponent,
    ReclamoFinalizadoComponent, ReclamoReabiertoComponent, CuadrillaBorradoExitosoComponent, ReclamoFinalizadoErrorComponent,
    CuadrillaErrorGenericoComponent, ReabrirReclamoErrorComponent, CrearCuadrillaErrorComponent, AsignarReclamoErrorComponent,
    PuntuarReclamoErrorComponent,RespuestaTicketComponent];
