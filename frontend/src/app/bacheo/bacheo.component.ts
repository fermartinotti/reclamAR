import { Component, OnInit, NgZone } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Bacheo} from "../model/bacheo";
import {Localizacion} from "../model/localizacion"
import { Router} from "@angular/router";
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {DataSenderService} from "../services/dataSender.service";

@Component({
  selector: 'app-bacheo',
  templateUrl: './bacheo.component.html',
  styleUrls: ['./bacheo.component.css']
})
export class BacheoComponent implements OnInit {
  tipoDeReclamo: Bacheo;

  constructor(public router: Router, private ds: DataSenderService) {
  }


  ngOnInit() {
    this.tipoDeReclamo = new Bacheo("Bacheo")
    this.ds.sendData(this.tipoDeReclamo)
  }

  sendData(){
    this.ds.sendData(this.tipoDeReclamo)
  }
}
