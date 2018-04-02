import { Component, OnInit } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  reclamo: Reclamo;

  constructor(public reclamoService: ReclamoService) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
  }

  public generarReclamo():void{
    this.reclamoService.generarReclamo(this.reclamo).subscribe();
  }

}
