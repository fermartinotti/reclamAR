import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {MapComponent} from "../map/map.component";
import {Localizacion} from "../model/localizacion";


@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {

  @Input() reclamo: Reclamo = new Reclamo(null,null,null,null,null,null,null)

  @ViewChild('map') map: MapComponent;

  constructor(private reclamoService: ReclamoService, private ruta: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    this.ruta.paramMap
      .switchMap( paramMap => this.reclamoService.buscarReclamo(+paramMap.get('id')))
      .subscribe(reclamo => this.reclamo = reclamo)
  }

  volver(){
    this.router.navigate(['mis-reclamos']);
  }
}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

