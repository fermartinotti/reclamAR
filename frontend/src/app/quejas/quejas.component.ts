import { Component, OnInit } from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css']
})
export class QuejasComponent implements OnInit {

  reclamos:Array<Reclamo>;
  reclamoId:number = null;
  motivo: string = null
  detalle:string;

  constructor(private reclamoService: ReclamoService) {
    this.reclamoService.misReclamos().then(reclamos=> this.reclamos = reclamos);
  }

  ngOnInit() {
  }

  generarTicket(){

  }
}
