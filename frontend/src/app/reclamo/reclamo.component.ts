import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {MapComponent} from "../map/map.component";
import {NgModalContentComponent} from "../ng-modal-content/ng-modal-content.component";
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {

  @Input() reclamo: Reclamo = new Reclamo(null,null,null,null,null,null,null)

  @ViewChild('map') map: MapComponent;

  constructor(private reclamoService: ReclamoService, private ruta: ActivatedRoute,
              public router: Router, private spinner: Ng4LoadingSpinnerService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.spinner.show()
    try{
      /*var id = this.ruta.paramMap.switchMap(paramMap => paramMap.get('id'))
      var reclamo = this.reclamoService.buscarReclamo(id);*/
    this.ruta.paramMap
      .switchMap( paramMap => this.reclamoService.buscarReclamo(+paramMap.get('id')))
      .subscribe(reclamo => this.reclamo = reclamo)
    }catch(error){
      this.openDlgError("error-bucando-reclamo")
      this.router.navigate(['']);
    }
    this.spinner.hide()
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

