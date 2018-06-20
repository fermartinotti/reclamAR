import { Component, OnInit } from '@angular/core';
import {CuadrillaService} from "../services/cuadrilla.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {Cuadrilla} from "../model/cuadrilla";
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AsignarDTO} from "../model/asignarDTO";
import {FinalizarReclamoDTO} from "../model/finalizarReclamoDTO";

@Component({
  selector: 'app-cuadrilla',
  templateUrl: './cuadrilla.component.html',
  styleUrls: ['./cuadrilla.component.css']
})
export class CuadrillaComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  cuadrilla : Cuadrilla;

  todosLosReclamos : Array<Reclamo>

  asignarDTO: AsignarDTO;

  constructor(private cuadrillaService: CuadrillaService, private  ruta: ActivatedRoute,
              private router: Router, private spinner: Ng4LoadingSpinnerService,
              private reclamoService: ReclamoService) { }

  ngOnInit() {
    this.spinner.show()

    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => {this.cuadrilla = cuadrilla})

    this.reclamoService.todosLosReclamos().then(reclamos=>
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));

    this.spinner.hide()
  }


  async borrarCuadrilla():Promise<void>{
    await this.cuadrillaService.borrarCuadrilla(this.cuadrilla.id)
    this.router.navigate(['admin-panel', 'cuadrillas'])
  }

  public asignarReclamo(idReclamo: number) : void{
     this.asignarDTO=
       new AsignarDTO(idReclamo, this.cuadrilla.id,
         this.model.day+"/"+this.model.month+"/"+this.model.year)
    this.cuadrillaService.asignarCuadrilla(this.asignarDTO)

    this.agregarReclamoALaLista(idReclamo)

  }
    async agregarReclamoALaLista(idReclamo : number):Promise<void>{
    var reclamoAsignado: Reclamo ;
    await this.reclamoService.buscarReclamo(idReclamo).then(reclamo =>
    reclamoAsignado = reclamo)

    this.cuadrilla.reclamos = [reclamoAsignado].concat(this.cuadrilla.reclamos)

      const index = this.todosLosReclamos.indexOf(reclamoAsignado);
      this.todosLosReclamos.splice(index, 1);

    }

    async finalizarReclamo(idReclamo: number): Promise<void>{

      await this.reclamoService.finalizarReclamo(new FinalizarReclamoDTO(idReclamo, this.cuadrilla.id))
      this.sacarDeListaAsignado(idReclamo);
    }

    async sacarDeListaAsignado(idReclamo: number){
      var reclamoAFinalizar: Reclamo
      await this.reclamoService.buscarReclamo(idReclamo).then(reclamo =>
        reclamoAFinalizar = reclamo)

      const index = this.cuadrilla.reclamos.indexOf(reclamoAFinalizar);
      this.cuadrilla.reclamos.splice(index, 1);
    }
}
