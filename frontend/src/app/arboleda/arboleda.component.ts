import { Component, OnInit, NgZone } from '@angular/core';
import {Arboleda} from "../model/arboleda";
import { Router} from "@angular/router";
import {DataSenderService} from "../services/dataSender.service";

@Component({
  selector: 'app-arboleda',
  templateUrl: './arboleda.component.html',
  styleUrls: ['./arboleda.component.css']
})
export class ArboledaComponent implements OnInit {
  tipoDeReclamo: Arboleda;

  constructor(public router: Router, private ds: DataSenderService) {
  }


  ngOnInit() {
    this.tipoDeReclamo = new Arboleda("Arboleda")
    this.ds.sendData(this.tipoDeReclamo)
  }

  sendData(){
    this.ds.sendData(this.tipoDeReclamo)
  }

}
