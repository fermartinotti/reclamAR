import {Component, OnInit, ViewChild, ViewChildren, QueryList, Injector, Input} from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Localizacion} from "../model/localizacion"
import {Router, RouterOutlet, ActivatedRoute} from "@angular/router";
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";
import {Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {TipoDeReclamo} from "../model/tipoDeReclamo";
import {DataSenderService} from "../services/dataSender.service";
import { Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-nuevo-reclamo',
  templateUrl: './nuevo-reclamo.component.html',
  styleUrls: ['./nuevo-reclamo.component.css']
})

export class NuevoReclamoComponent implements OnInit {
  reclamo: Reclamo;
  @Input() tipoDeReclamo : TipoDeReclamo;
  subscription: Subscription; // Para obtener el dato del child, en este caso cada tipo de reclamo en particular.
  nombreTipoDeReclamo: String
  hayReclamoCreado: boolean

  //Variables para el alert
  private _success = new Subject<string>();
  private _sucessDetalle = new Subject<string>();
  warningMessage: string;
  warningMessageDetalle: string;

  constructor( public reclamoService: ReclamoService, public router: Router,
               private modalService: NgbModal,  private spinner: Ng4LoadingSpinnerService,
               private activatedRoute: ActivatedRoute, private ds: DataSenderService) {

    this.subscription = this.ds.getData().subscribe(x => { this.tipoDeReclamo = x});

    // FIX para poner el nombre del tipo de reclamo
    this.activatedRoute.children.pop().url.subscribe(resp => this.nombreTipoDeReclamo = resp.toString())

    this.reclamoService.misReclamos().then(resp=> this.hayReclamoCreado= resp.length >0)
  }

  ngOnInit() {
    this.reclamo = new Reclamo(null,null,null,null,null,null,null, [])
    // logica cierre alert
    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 2000).subscribe(() => this.warningMessage = null);

    this._sucessDetalle.subscribe((message) => this.warningMessageDetalle = message);
    debounceTime.call(this._sucessDetalle, 2000).subscribe(() => this.warningMessageDetalle = null);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hayProblemaLugarIncidente():boolean{
    return this.reclamo.lugarDeIncidente == null || !this.pertenecePartidoDeQuilmes(this.reclamo.lugarDeIncidente.direccionFisica);
  }

  hayProblemaDetalle():boolean{
    return this.reclamo.detalle == null || this.reclamo.detalle == "";
  }

  manejadorLugarDeIncidente(){
    switch (this.hayProblemaLugarIncidente()) {
      case true:
        this.cambiarMensajeDeAlerta("Por favor seleccione una ubicacion dentro del partido de Quilmes");
    }
  }

  manejadorErrorDetalle(){
    switch(this.hayProblemaDetalle()){
    case true:
          this.mensajeAlertaDetalle("Por favor completa el detalle");
    }
  }

  async generarReclamo():Promise<void>{
    if (this.hayProblemaDetalle() || this.hayProblemaLugarIncidente()){
      this.manejadorErrorDetalle();
      this.manejadorLugarDeIncidente();
    }else{
      this.spinner.show()
      // SE ACTUALIZA SOLO EL TIPO DE RECLAMO GRACIAS A "DATA SENDER SERVICE"
      this.reclamo.setTipoDeReclamo = this.tipoDeReclamo

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

  pertenecePartidoDeQuilmes(partido){
    return partido.includes("Quilmes") ||
    partido.includes("Bernal") ||
    partido.includes("Solano") ||
    partido.includes("Ezpeleta") ||
    partido.includes("Don Bosco") ||
    partido.includes("Villa la Florida");
   }
}
