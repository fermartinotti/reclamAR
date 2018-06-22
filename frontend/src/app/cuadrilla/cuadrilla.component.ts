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

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgModalContentComponent } from "../ng-modal-content/ng-modal-content.component";


@Component({
  selector: 'app-cuadrilla',
  templateUrl: './cuadrilla.component.html',
  styleUrls: ['./cuadrilla.component.css']
})
export class CuadrillaComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };

  fechaActual = new Date();

  minDate: NgbDateStruct = { year: this.fechaActual.getFullYear(), month: this.fechaActual.getMonth() + 1, day: this.fechaActual.getDate() };

  warningMessage: string;
  private _success = new Subject<string>();

  cuadrilla: Cuadrilla;

  todosLosReclamos: Array<Reclamo>

  asignarDTO: AsignarDTO;

  constructor(private cuadrillaService: CuadrillaService, private ruta: ActivatedRoute,
    private router: Router, private spinner: Ng4LoadingSpinnerService,
    private reclamoService: ReclamoService, private modalService: NgbModal) { }

  ngOnInit() {
    this.spinner.show()

    this.ruta.paramMap.switchMap(paramMap => this.cuadrillaService.buscarCuadrilla(+paramMap.get('id')))
      .subscribe(cuadrilla => { this.cuadrilla = cuadrilla })

    this.reclamoService.todosLosReclamos().then(reclamos =>
      this.todosLosReclamos = reclamos.filter(reclamo => reclamo.estado.type === "Abierto"));

    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 2000).subscribe(() => this.warningMessage = null);

    this.spinner.hide()
  }


  async borrarCuadrilla(): Promise<void> {
    try {
      var link = await this.cuadrillaService.borrarCuadrilla(this.cuadrilla.id)
      this.router.navigate(['admin-panel', 'cuadrillas'])
      console.log(link)

      this.open("cuadrilla-borrar", "")
    }
    catch (error) {
      this.open("cuadrilla-error", "")
    }
  }

  open(status: string, link: string) {
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
    modalRef.componentInstance.link = link;
  }

  public asignarReclamo(idReclamo: number): void {
    if (this.model == null) {
      this.mensajeAlertaFechaSinDefinir("Seleccione una fecha para continuar");
    }
    else {
      this.asignarDTO = new AsignarDTO(idReclamo, this.cuadrilla.id, this.model.day + "/" + this.model.month + "/" + this.model.year)
      this.cuadrillaService.asignarCuadrilla(this.asignarDTO)

      this.agregarReclamoALaLista(idReclamo)
    }
  }

  async agregarReclamoALaLista(idReclamo: number): Promise<void> {
    var reclamoAsignado: Reclamo;
    await this.reclamoService.buscarReclamo(idReclamo).then(reclamo =>
      reclamoAsignado = reclamo)

    this.cuadrilla.reclamos = [reclamoAsignado].concat(this.cuadrilla.reclamos)

    const index = this.todosLosReclamos.indexOf(reclamoAsignado);
    this.todosLosReclamos.splice(index, 1);

  }

  async finalizarReclamo(idReclamo: number): Promise<void> {

    await this.reclamoService.finalizarReclamo(new FinalizarReclamoDTO(idReclamo, this.cuadrilla.id))
    this.sacarDeListaAsignado(idReclamo);
  }

  async sacarDeListaAsignado(idReclamo: number) {
    var reclamoAFinalizar: Reclamo
    await this.reclamoService.buscarReclamo(idReclamo).then(reclamo =>
      reclamoAFinalizar = reclamo)

    const index = this.cuadrilla.reclamos.indexOf(reclamoAFinalizar);
    this.cuadrilla.reclamos.splice(index, 1);
  }

  public mensajeAlertaFechaSinDefinir(msj: string) {
    this._success.next(msj);
  }

  volver() {
    this.router.navigate(['admin-panel']);
  }
}
