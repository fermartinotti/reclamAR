import { Component, OnInit, NgZone } from '@angular/core';
import {Arboleda} from "../model/arboleda";
import { Router} from "@angular/router";

@Component({
  selector: 'app-arboleda',
  templateUrl: './arboleda.component.html',
  styleUrls: ['./arboleda.component.css']
})
export class ArboledaComponent implements OnInit {
  tipoDeReclamo: Arboleda;

  constructor(public router: Router) {
  }


  ngOnInit() {
    this.tipoDeReclamo = new Arboleda("Arboleda")
  }


}
