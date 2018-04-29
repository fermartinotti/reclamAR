import { Component, OnInit, NgZone } from '@angular/core';
import {Semaforo} from "../model/semaforo";
import { Router} from "@angular/router";


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  tipoDeReclamo:Semaforo;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.tipoDeReclamo = new Semaforo("Semaforo")
  }

}
