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
  zoom: number = 14;
  markers: marker[] = [];
  @Input() reclamos: Reclamo[];

  constructor() {
  }

  ngOnInit() {
  }

  cargarMarkers(reclamos : Reclamo[]){
    reclamos.forEach( r => this.addMarker(r))
  }

  addMarker(reclamo: Reclamo){
    this.markers.push({
      lat: Number(reclamo.lugarDeIncidente.latitud),
      lng: Number(reclamo.lugarDeIncidente.longitud),
      draggable: false,
      icon: this.icono(reclamo),
      title: "Estado creado el dia: " + reclamo.fechaDeCreacion + ". El reclamo se encuentra: " + reclamo.estado.type
    });
  }

  icono(reclamo: Reclamo): string{
    switch(reclamo.tipoDeReclamo.type) {
      case "Semaforo":{
        return "https://www.google.com/mapfiles/traffic.png";
      }
      case "Arboleda":{
          return "http://maps.google.com/mapfiles/kml/pal2/icon12.png";
      }
      case "Bacheo":{
        return "http://maps.google.com/mapfiles/kml/pal3/icon59.png"
      }
      case "Luminaria":{
        return "http://maps.google.com/mapfiles/kml/pal3/icon58.png"
      }
    }
  }
}



interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon?: string;
  title?: string;
}
