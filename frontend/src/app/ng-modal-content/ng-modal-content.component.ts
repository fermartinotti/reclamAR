import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{tittle}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div [ngSwitch]="status">
        <reclamo-success    *ngSwitchCase="'success'"    [link]="link"></reclamo-success>
        <reclamo-error      *ngSwitchCase="'error'"    ></reclamo-error>
        <error-buscando-reclamo *ngSwitchCase="'errorBuscando'"> </error-buscando-reclamo>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})
export class NgModalContentComponent{
  @Input() link;
  @Input() status;
  @Input() tittle = "Reclamo";

  constructor(public activeModal: NgbActiveModal) { }

}
