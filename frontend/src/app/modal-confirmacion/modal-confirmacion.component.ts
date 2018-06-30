import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Input} from "@angular/core";

@Component({
  selector: 'app-modal-confirmacion',
  template: `
  <div class="modal-header">
  <h4 class="modal-title">Confirmación</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<div [ngSwitch]="status">
<cuadrilla-borrado      *ngSwitchCase="'cuadrilla-borrado'"    ></cuadrilla-borrado>
</div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close()">Aceptar</button>
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.dismiss()">Cancelar</button>
</div>


`
})
export class ModalConfirmacionComponent{
  @Input() link;
  @Input() status;
  @Input() tittle = "Confirmación";

  constructor(public activeModal: NgbActiveModal) { }


}
