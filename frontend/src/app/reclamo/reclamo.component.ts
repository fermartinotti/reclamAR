import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {MapComponent} from "../map/map.component";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ReabrirDTO} from "../model/reabrirDTO";



@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {

  @Input() reclamo: Reclamo = new Reclamo(null,null,null,null,null,null,null,[])

  @ViewChild('map') map: MapComponent;

  motivoReapertura:string

  constructor(private reclamoService: ReclamoService, private ruta: ActivatedRoute,
              public router: Router, private spinner: Ng4LoadingSpinnerService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.spinner.show()
    this.ruta.paramMap
      .switchMap( paramMap => this.reclamoService.buscarReclamo(+paramMap.get('id')))
      .subscribe(data => {this.reclamo = data},
        err => {
          if(err.status === 404) {
            this.openDlgError("errorBuscando")
            this.router.navigate(['']);
          }
        }
      )
    this.spinner.hide()
  }

  reclamoCerrado() : boolean{
    return this.reclamo.estado.type === "Cerrado";
  }

  reclamoReAbierto():boolean{
    return (this.reclamo.estado.type === "Abierto" && this.reclamo.estado.comentarioReapertura != null)
  }

  ReAbrirReclamo(): void{
    var link = this.reclamoService.reabrirReclamo(new ReabrirDTO(this.reclamo.id, this.motivoReapertura))
    console.log(link)
    this.open("reclamo-reabierto", "")
  }

  open(status: string, link: string) {
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
    modalRef.componentInstance.link = link;
    this.router.navigate(['mis-reclamos']);
  }

  volver(){
    this.router.navigate(['mis-reclamos']);
  }

  openDlgError(status: string){
    const modalRef = this.modalService.open(NgModalContentComponent)
    modalRef.componentInstance.status = status
  }


}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

