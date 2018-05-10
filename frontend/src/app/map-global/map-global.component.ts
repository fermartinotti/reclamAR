import {Component, Input, OnInit} from '@angular/core';
import {Reclamo} from "../model/reclamo";

@Component({
  selector: 'app-map-global',
  templateUrl: './map-global.component.html',
  styleUrls: ['./map-global.component.css']
})
export class MapGlobalComponent implements OnInit {
  latInicial: number = -34.72418;
  lngInicial: number = -58.25265;
  zoom: number = 8;
  markers: marker[] = [];
  @Input() reclamos: Reclamo[];

  constructor() {
  }

  ngOnInit() {
  }

  cargarMarkers(reclamos : Reclamo[]){
    console.log(reclamos)
    reclamos.forEach( r => this.addMarker(r))
  }

  addMarker(reclamo: Reclamo){
    console.log(reclamo)
    this.markers.push({
      lat: Number(reclamo.lugarDeIncidente.latitud),
      lng: Number(reclamo.lugarDeIncidente.longitud),
      draggable: false
    });
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon?: string;
}
