import {Component, OnInit, ViewChild} from '@angular/core';
import {ReclamoService} from "../services/reclamo.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-todos-los-reclamos',
  templateUrl: './todos-los-reclamos.component.html',
  styleUrls: ['./todos-los-reclamos.component.css']
})
export class TodosLosReclamosComponent implements OnInit {
  @ViewChild('map') map: MapComponent;

  constructor(private reclamoService: ReclamoService, private spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    // logica de busqueda de reclamos y se envia al child
    this.spinner.hide()
  }

}


// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
