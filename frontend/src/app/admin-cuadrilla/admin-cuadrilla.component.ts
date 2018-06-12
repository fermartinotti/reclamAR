import { Component, OnInit } from '@angular/core';
import {Cuadrilla} from "../model/cuadrilla";
import {CuadrillaService} from "../services/cuadrilla.service";

@Component({
  selector: 'app-admin-cuadrilla',
  templateUrl: './admin-cuadrilla.component.html',
  styleUrls: ['./admin-cuadrilla.component.css']
})

export class AdminCuadrillaComponent implements OnInit {

  cuadrilla:Cuadrilla = new Cuadrilla(null,null, null);

  cuadrillas:Array<Cuadrilla>;

  cuadrillaABorrar: Cuadrilla = null;

  constructor(private cuadrillaService: CuadrillaService) {
    this.cuadrillaService.todasLasCuadrillas().then(cuadrillas => this.cuadrillas= cuadrillas.reverse());
  }

  ngOnInit() {
  }

  async crearCuadrilla():Promise<void>{
    try{
        var nuevoReclamo = await this.cuadrillaService.crearCuadrilla(this.cuadrilla)
        .then(cuadrilla => Cuadrilla.crearDesdeJson(cuadrilla))
      this.cuadrillas = [nuevoReclamo].concat(this.cuadrillas)
    }catch(error){}
  }

  public puedeBorrar(): boolean{
    return this.cuadrillaABorrar!= null;
  }

  async borrarCuadrilla():Promise<void>{

  }
}
