import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal-content',
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="modal-header">
      <h4 class="modal-title"><i class="fa fa-info-circle"></i> {{tittle}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div [ngSwitch]="status">
        <reclamo-success    *ngSwitchCase="'success'"    [link]="link"></reclamo-success>
        <reclamo-error      *ngSwitchCase="'error'"    ></reclamo-error>
        <reclamo-finalizado      *ngSwitchCase="'reclamo-finalizado'"    ></reclamo-finalizado>
        <reclamo-finalizado-error      *ngSwitchCase="'reclamo-finalizado-error'"    ></reclamo-finalizado-error>
        <reclamo-reabierto      *ngSwitchCase="'reclamo-reabierto'"    ></reclamo-reabierto>
        <cuadrilla-borrar-error      *ngSwitchCase="'cuadrilla-borrar-error'"    ></cuadrilla-borrar-error>
        <cuadrilla-borrado-exitoso      *ngSwitchCase="'cuadrilla-borrado-exitoso'"    ></cuadrilla-borrado-exitoso>
        <cuadrilla-borrar-error-generico      *ngSwitchCase="'cuadrilla-borrar-error-generico'"    ></cuadrilla-borrar-error-generico>
        <error-buscando-reclamo *ngSwitchCase="'errorBuscando'"> </error-buscando-reclamo>
        <reabrir-reclamo-error *ngSwitchCase="'reabrir-reclamo-error'"> </reabrir-reclamo-error>
        <crear-cuadrilla-error *ngSwitchCase="'crear-cuadrilla-error'"> </crear-cuadrilla-error>
        <asignar-reclamo-error *ngSwitchCase="'asignar-reclamo-error'"> </asignar-reclamo-error>
        <puntuar-reclamo-error *ngSwitchCase="'puntuar-reclamo-error'"> </puntuar-reclamo-error>
        <respuesta-ticket   *ngSwitchCase="'respuesta-ticket'"    [link]="link"></respuesta-ticket>
        
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-info" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})
export class NgModalContentComponent{
  @Input() link;
  @Input() status;
  @Input() tittle = "Información";

  constructor(public activeModal: NgbActiveModal) { }

}
