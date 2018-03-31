import { Component, OnInit } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";

@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css']
})
export class CrearReclamoComponent implements OnInit {
    reclamo: Reclamo;


  constructor(public reclamoService: ReclamoService) { }

  ngOnInit() {
     this.reclamo = new Reclamo("")
  }

  public generarReclamo():void{
      this.reclamoService.generarReclamo(this.reclamo).subscribe();
  }
}
