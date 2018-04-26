import { Component, OnInit } from '@angular/core';
import {ReclamoService} from "../services/reclamo.service";
import {Reclamo} from "../model/reclamo";

@Component({
  selector: 'app-mis-reclamos',
  templateUrl: './mis-reclamos.component.html',
  styleUrls: ['./mis-reclamos.component.css']
})
export class MisReclamosComponent implements OnInit {

  reclamos:Array<Reclamo>;

  constructor(private reclamoService: ReclamoService) {
    this.reclamoService.misReclamos().then(reclamos=> this.reclamos = reclamos);
  }

  ngOnInit() {
  }

}
