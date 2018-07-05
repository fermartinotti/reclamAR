import {Component} from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReclamoService} from "../services/reclamo.service";
import {Input} from "@angular/core";
import {PuntuacionReclamoDTO} from "../model/puntuacionReclamoDTO";
import { NgModalContentComponent } from "../ng-modal-content/ng-modal-content.component";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngbd-rating-events',
  templateUrl: './rating.html'
})

export class NgbdRatingEvents {
  @Input() selected;
  hovered = 0;
  readonly = true;
  @Input() idReclamo;

  constructor(config: NgbRatingConfig, private reclamoService : ReclamoService, private modalService: NgbModal){
    config.max=5;
  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }

  public calificar():void{

    if(this.readonly){
      this.readonly = false;
    }
    else{
      this.readonly = true;
      this.reclamoService.puntuarReclamo(new PuntuacionReclamoDTO(this.idReclamo, this.selected))
      .then(res => {},
      (error)=> {
        console.log(error.error);
        this.openDlgError("puntuar-reclamo-error")
      })
    }
  }
  
}
