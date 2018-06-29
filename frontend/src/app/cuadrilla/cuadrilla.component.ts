import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { CuadrillaService } from "../services/cuadrilla.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { Cuadrilla } from "../model/cuadrilla";
import { Reclamo } from "../model/reclamo";
import { ReclamoService } from "../services/reclamo.service";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AsignarDTO } from "../model/asignarDTO";
import { FinalizarReclamoDTO } from "../model/finalizarReclamoDTO";

import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { NgModalContentComponent } from "../ng-modal-content/ng-modal-content.component";
import {ModalConfirmacionComponent} from "../modal-confirmacion/modal-confirmacion.component";


@Component({
  selector: 'app-cuadrilla',
  templateUrl: './cuadrilla.component.html',
  styleUrls: ['./cuadrilla.component.css']
})
export class CuadrillaComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  minDate: NgbDateStruct = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };

  warningMessage: string;
  warningMessageEC:string;
  private _success = new Subject<string>();
  private _successEC = new Subject<string>();
  cuadrilla: Cuadrilla;

  todosLosReclamos: Array<Reclamo>

  asignarDTO: AsignarDTO;
  modalOptions: NgbModalOptions;

  constructor(private cuadrillaService: CuadrillaService, private ruta: ActivatedRoute,
    private router: Router, private spinner: Ng4LoadingSpinnerService,
    private reclamoService: ReclamoService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.spinner.show()

    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => { this.cuadrilla = cuadrilla })

    this.reclamoService.todosLosReclamos().then(reclamos =>
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));

    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 2000).subscribe(() => this.warningMessage = null);

    this._successEC.subscribe((message) => this.warningMessageEC = message);
    debounceTime.call(this._successEC, 4000).subscribe(() => this.warningMessageEC = null);

    this.spinner.hide()
  }


  async borrarCuadrilla(): Promise<void> {
    const modalRef = this.modalService.open(ModalConfirmacionComponent,this.modalOptions);
    modalRef.result.then(() => {
      this.cuadrillaService.borrarCuadrilla(this.cuadrilla.id)
      .then(res => { 
        //this.router.navigate(['admin-panel', 'cuadrillas'])
        this.mensajeEliminarCuadrilla("La cuadrilla se ha eliminado del sistema")        
      }, 
        (err)=> {
          console.log(err.error)
          this.mensajeEliminarCuadrilla("No se puede borrar la cuadrilla ya que tiene uno o mas reclamos asignados")
        } 
      )
    })
    .catch(() => {}); 
  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }

  open(status: string, link: string) {
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
    modalRef.componentInstance.link = link;
  }

  async asignarReclamo(idReclamo: number): Promise<void> {
    if (this.model == null) {
      this.mensajeAlertaFechaSinDefinir("Seleccione una fecha para continuar");
    }
    else {
      this.asignarDTO = new AsignarDTO(idReclamo, this.cuadrilla.id, this.model.day + "/" + this.model.month + "/" + this.model.year)
      await this.cuadrillaService.asignarCuadrilla(this.asignarDTO)

      this.actualizarListas(idReclamo)
      this.model = null

    }
  }

  async finalizarReclamo(idReclamo: number): Promise<void> {
    try{
      var link = await this.reclamoService.finalizarReclamo(new FinalizarReclamoDTO(idReclamo, this.cuadrilla.id))
      this.actualizarListas(idReclamo);
      this.open("reclamo-finalizado", "")
    }
    catch(error){
      this.open("cuadrilla-error", "")
    }
  }

  async actualizarListas(idReclamo: number): Promise<void> {
    var reclamoAsignado: Reclamo;
    await this.reclamoService.buscarReclamo(idReclamo).then(reclamo =>
      reclamoAsignado = reclamo)

    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => { this.cuadrilla = cuadrilla })

    this.reclamoService.todosLosReclamos().then(reclamos =>
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));
  }


  public mensajeAlertaFechaSinDefinir(msj: string) {
    this._success.next(msj);
  }

  public mensajeEliminarCuadrilla(msj: string) {
    this._successEC.next(msj);
  }

  volver() {
    this.router.navigate(['admin-panel']);
  }
}
