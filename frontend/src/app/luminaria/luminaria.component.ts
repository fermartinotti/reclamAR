import { Component, OnInit } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Luminaria} from "../model/luminaria";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  reclamo: Reclamo;
  luminaria: Luminaria;
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public reclamoService: ReclamoService) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria= new Luminaria("luminaria")
  }

  public generarReclamo():void{
    this.reclamo.setTipoDeReclamo = this.luminaria
    this.reclamoService.generarReclamo(this.reclamo).subscribe()
  }

}
