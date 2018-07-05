import { Component, OnInit } from '@angular/core';
import {Cuadrilla} from "../model/cuadrilla";
import {CuadrillaService} from "../services/cuadrilla.service";
import {ActivatedRoute} from "@angular/router";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { NgModalContentComponent } from "../ng-modal-content/ng-modal-content.component";

@Component({
  selector: 'app-admin-cuadrilla',
  templateUrl: './admin-cuadrilla.component.html',
  styleUrls: ['./admin-cuadrilla.component.css']
})

export class AdminCuadrillaComponent implements OnInit {

  cuadrilla:Cuadrilla = new Cuadrilla(null,null, null,[]);

  cuadrillas:Array<Cuadrilla>;

  constructor(private cuadrillaService: CuadrillaService, private  ruta: ActivatedRoute, private modalService: NgbModal) {
    this.cuadrillaService.todasLasCuadrillas().then(cuadrillas => this.cuadrillas= cuadrillas.reverse());

    ruta.params.subscribe(val => {
      this.cuadrillaService.todasLasCuadrillas().then(cuadrillas => this.cuadrillas= cuadrillas.reverse());

    });
  }

  async ngOnInit() {
    await this.cuadrillaService.todasLasCuadrillas().then(cuadrillas => this.cuadrillas= cuadrillas.reverse());
  }

  async crearCuadrilla():Promise<void>{
    try{
      await this.cuadrillaService.crearCuadrilla(this.cuadrilla)
      this.cuadrillaService.todasLasCuadrillas().then(cuadrillas => this.cuadrillas= cuadrillas.reverse());
    }catch(error){
      console.log(error.error);
      this.openDlgError("crear-cuadrilla-error");
    }
    this.cuadrilla.nombre = null
    this.cuadrilla.cantIntegrantes= null;

  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }

}
