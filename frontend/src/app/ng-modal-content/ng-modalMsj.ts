import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: 'reclamo-sucess',
  template: '' +
  '<p>Su reclamo se ha creado exitosamente!<br>\n' +
  'Puede visualizar el estado de sus reclamos haciendo click <a href="/mis-reclamos" id="link" class="alert-link">aqui</a></p>'
})

export class ReclamoSucessComponent{
}

@Component({
  selector: 'reclamo-errro',
  template: 'error'
})

export class ReclamoErrorComponent{

}

export const ReclamoMsjComponent =
  [ ReclamoSucessComponent, ReclamoErrorComponent];
