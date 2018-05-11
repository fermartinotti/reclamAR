import {Component, OnInit, ViewChild} from '@angular/core';
import {ReclamoService} from "../services/reclamo.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {MapComponent} from "../map/map.component";
import {Reclamo} from "../model/reclamo";
import {MapGlobalComponent} from "../map-global/map-global.component";

@Component({
  selector: 'app-todos-los-reclamos',
  templateUrl: './todos-los-reclamos.component.html',
  styleUrls: ['./todos-los-reclamos.component.css']
})
export class TodosLosReclamosComponent implements OnInit {
  @ViewChild('map') map: MapGlobalComponent;
  todosLosReclamos : Array<Reclamo>;

  constructor(private reclamoService: ReclamoService, private spinner: Ng4LoadingSpinnerService) {
    this.spinner.show()
    this.reclamoService.todosLosReclamos().then(reclamos=>
      this.map.cargarMarkers(this.todosLosReclamos = reclamos));
    this.spinner.hide()
  }

  ngOnInit() {

  }

}
