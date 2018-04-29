import { Component, OnInit, NgZone } from '@angular/core';
import {Luminaria} from "../model/luminaria";
import { Router} from "@angular/router";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  luminaria: Luminaria;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.luminaria = new Luminaria("Luminaria")
  }


}



