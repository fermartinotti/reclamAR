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
  fechaActual = new Date();
  minDate: NgbDateStruct = { year: this.fechaActual.getFullYear(),month: this.fechaActual.getMonth() + 1, day: this.fechaActual.getDate() };
  warningMessage: string;
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
    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id'))).subscribe(cuadrilla => 
      { this.cuadrilla = cuadrilla })
    this.reclamoService.todosLosReclamos().then(reclamos => 
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));
    this.spinner.hide()
  }


  async borrarCuadrilla(): Promise<void> {
    const modalRef = this.modalService.open(ModalConfirmacionComponent,this.modalOptions);
    modalRef.componentInstance.status = "cuadrilla-borrado"
    modalRef.result.then(() => {
      this.spinner.show()
      this.cuadrillaService.borrarCuadrilla(this.cuadrilla.id)
      .then(res => {
        setTimeout(() => {
          this.spinner.hide()
          this.router.navigate(['admin-panel']);
           this.openDlgError("cuadrilla-borrado-exitoso");
        }, 3000);
      }, 
        (err)=> {
          setTimeout(() => {
            this.spinner.hide();
            
            if(this.cuadrilla.reclamosAsignados.length > 0){
              console.log(err.error);
              this.openDlgError("cuadrilla-borrar-error");
            }else{
              console.log(err.error);
              this.openDlgError("cuadrilla-borrar-error-generico");
            }
          }, 3000)
        })
    })
    .catch(() => {});
  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }

  async asignarReclamo(idReclamo: number): Promise<void> {
    if (this.model == null) {
      this.mensajeAlertaFechaSinDefinir("Seleccione una fecha para continuar");
    }
    else {
      try {
        this.asignarDTO = new AsignarDTO(idReclamo, this.cuadrilla.id, this.model.day + "/" + this.model.month + "/" + this.model.year)
        await this.cuadrillaService.asignarCuadrilla(this.asignarDTO)
        this.actualizarListas(idReclamo)
        this.model = null
      }
      catch(error) {
        console.log(error.error);
        this.openDlgError("asignar-reclamo-error")
      }
    }
  }

  async finalizarReclamo(idReclamo: number): Promise<void> {
    this.spinner.show();
    try{
      await this.reclamoService.finalizarReclamo(new FinalizarReclamoDTO(idReclamo, this.cuadrilla.id))
      setTimeout(() => {
        this.spinner.hide();
        this.actualizarListas(idReclamo);
        this.openDlgError("reclamo-finalizado")
      }, 3000);
    }
    catch(error){
      setTimeout(() => {
        this.spinner.hide();
        console.log(error.error);
        this.openDlgError("reclamo-finalizado-error")
      }, 3000);
    }
  }

  async actualizarListas(idReclamo: number): Promise<void> {
    var reclamoAsignado: Reclamo;
    await this.reclamoService.buscarReclamo(idReclamo).then(reclamo => reclamoAsignado = reclamo)

    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => { this.cuadrilla = cuadrilla })

    this.reclamoService.todosLosReclamos().then(reclamos =>
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));
  }

public mensajeAlertaFechaSinDefinir(msj: string) {
    const _success = new Subject<string>();
    _success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(_success, 2000).subscribe(() => this.warningMessage = null);
    _success.next(msj);
  }
  
  volver() {
    this.router.navigate(['admin-panel']);
  }

}
