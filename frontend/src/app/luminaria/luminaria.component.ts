import { Component, OnInit, NgZone } from '@angular/core';
import {Luminaria} from "../model/luminaria";
import { Router} from "@angular/router";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  tipoDeReclamo: Luminaria;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.tipoDeReclamo = new Luminaria("Luminaria")
  }


}



