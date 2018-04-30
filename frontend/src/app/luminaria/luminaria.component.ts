import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Luminaria} from "../model/luminaria";
import { Router} from "@angular/router";
import {DataSenderService} from "../services/dataSender.service";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  tipoDeReclamo: Luminaria = new Luminaria("Luminaria");

  constructor(public router: Router, private ds: DataSenderService) {
  }

  ngOnInit() {
    this.ds.sendData(this.tipoDeReclamo)
  }

  sendData(){
    this.ds.sendData(this.tipoDeReclamo)
  }
}



