import {Component} from '@angular/core';
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReclamoService} from "../services/reclamo.service";
import {Input} from "@angular/core";
import {PuntuacionReclamoDTO} from "../model/puntuacionReclamoDTO";

@Component({
  selector: 'ngbd-rating-events',
  templateUrl: './rating.html'
})

export class NgbdRatingEvents {
  @Input() selected;
  hovered = 0;
  readonly = true;
  @Input() idReclamo;

  constructor(config: NgbRatingConfig, private reclamoService : ReclamoService){
    config.max=5;
  }

  public calificar():void{

    if(this.readonly){
      this.readonly = false;
    }else{
      this.readonly = true;
      this.reclamoService.puntuarReclamo(new PuntuacionReclamoDTO(this.idReclamo, this.selected))
    }
  }
}
