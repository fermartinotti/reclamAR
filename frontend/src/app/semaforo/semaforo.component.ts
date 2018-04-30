import { Component, OnInit, NgZone } from '@angular/core';
import {Semaforo} from "../model/semaforo";
import { Router} from "@angular/router";
import {DataSenderService} from "../services/dataSender.service";


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  tipoDeReclamo:Semaforo;

  constructor(public router: Router, private ds:DataSenderService) {
  }

  ngOnInit() {
    this.tipoDeReclamo = new Semaforo("Semaforo")
    this.ds.sendData(this.tipoDeReclamo)
  }

  sendData(){
    this.ds.sendData(this.tipoDeReclamo)
  }

}
