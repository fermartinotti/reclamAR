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
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';

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
  private _sucessDetalle = new Subject<string>();
  warningMessage: string;
  warningMessageDetalle: string;
  //

  constructor(public reclamoService: ReclamoService, public router: Router, private modalService: NgbModal,  private spinner: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo(null,null,null,null,null,null,null)
    this.luminaria = new Luminaria("luminaria")

    // logica cierre alert
    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.warningMessage = null);

    this._sucessDetalle.subscribe((message) => this.warningMessageDetalle = message);
    debounceTime.call(this._sucessDetalle, 5000).subscribe(() => this.warningMessageDetalle = null);
  }

  async generarReclamo():Promise<void>{
    if (this.reclamo.lugarDeIncidente == null || this.reclamo.detalle == null || this.reclamo.detalle =="" ){
      if(this.reclamo.lugarDeIncidente == null && (this.reclamo.detalle == null || this.reclamo.detalle =="")){
        this.cambiarMensajeDeAlerta("Por favor seleccione la ubicacion de su reclamo");
        this.mensajeAlertaDetalle("Por favor completa el detalle");
      }
      else{
      if(this.reclamo.lugarDeIncidente == null){
        this.cambiarMensajeDeAlerta("Por favor seleccione la ubicacion de su reclamo")
      }
      else{this.mensajeAlertaDetalle("Por favor completa el detalle")}
    }
    }else{
      this.spinner.show()
      this.reclamo.setTipoDeReclamo = this.luminaria
      try{
         var link = await this.reclamoService.generarReclamo(this.reclamo).then(resp=> Reclamo.crearDesdeJson(resp).id)
        console.log(link)
        this.open("success", link.toString())
      }catch(error){
        this.open("error", "")
      }
    }
    this.spinner.hide()
  
}

  onClickMap(localizacion: Localizacion){
    this.reclamo.lugarDeIncidente = localizacion;
  }

  open(status: string, link: string) {
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
    modalRef.componentInstance.link = link;
    this.router.navigate(['']);
  }


  public cambiarMensajeDeAlerta(msj : string) {
    this._success.next(msj);
  }

  public mensajeAlertaDetalle(msj:string){
    this._sucessDetalle.next(msj);
  }

}



