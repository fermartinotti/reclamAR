import { Component, OnInit, NgZone } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Luminaria} from "../model/luminaria";
import {Localizacion} from "../model/localizacion"
import { Router} from "@angular/router";
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  reclamo: Reclamo;
  luminaria: Luminaria;

  //Variables para el alert
  private _success = new Subject<string>();
  warningMessage: string;
  //

  constructor(public reclamoService: ReclamoService, public router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria = new Luminaria("luminaria")

    // logica cierre alert
    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.warningMessage = null);
  }

  async generarReclamo():Promise<void>{
    if (this.reclamo.lugarDeIncidente == null){
      this.cambiarMensajeDeAlerta("Por favor seleccione la ubicacion de su reclamo")
    }else{
      this.reclamo.setTipoDeReclamo = this.luminaria
      try{
        await this.reclamoService.generarReclamo(this.reclamo)
        this.open("Su reclamo se ha creado exitosamente! \\n Puede visualizar el estado de su reclamo haciendo click")
      }catch(error){
        this.open(("Hubo un error inesperado. Por favor reintente"))
      }
    }
  }

  onClickMap(localizacion: Localizacion){
    this.reclamo.lugarDeIncidente = localizacion;
  }

  open(msj: string) {
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.cuerpoDelModal= msj
    this.router.navigate(['']);
  }


  public cambiarMensajeDeAlerta(msj : string) {
    this._success.next(msj);
  }

}



