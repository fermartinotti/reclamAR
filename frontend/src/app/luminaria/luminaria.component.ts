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

  constructor(public reclamoService: ReclamoService) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria= new Luminaria()
  }

  public generarReclamo():void{
    this.reclamo.setTipoDeReclamo = this.luminaria
    this.reclamoService.generarReclamo(this.reclamo).subscribe()
  }

}
