import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: 'reclamo-success',
  template: '' +
  '<p>Su reclamo se ha creado exitosamente!<br>\n' +
  'Puede visualizar el estado de sus reclamos haciendo click <a href="/mis-reclamos/{{link}}" id="link" class="alert-link">aqui</a></p>'
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

export const ReclamoMsjComponent =
  [ ReclamoSucessComponent, ReclamoErrorComponent];
