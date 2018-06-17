import { Component, OnInit } from '@angular/core';
import {CuadrillaService} from "../services/cuadrilla.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {Cuadrilla} from "../model/cuadrilla";

@Component({
  selector: 'app-cuadrilla',
  templateUrl: './cuadrilla.component.html',
  styleUrls: ['./cuadrilla.component.css']
})
export class CuadrillaComponent implements OnInit {

  cuadrilla : Cuadrilla;

  constructor(private cuadrillaService: CuadrillaService, private  ruta: ActivatedRoute,
              private router: Router, private spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => {this.cuadrilla = cuadrilla})
    this.spinner.hide()
  }


  async borrarCuadrilla():Promise<void>{
    this.cuadrillaService.borrarCuadrilla(this.cuadrilla.id)
    this.router.navigate(['admin-panel', 'cuadrillas'])
  }

}
