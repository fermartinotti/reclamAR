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
          return "https://lh5.googleusercontent.com/u9L7qo02khsXZf6qE6z_SrWW8g_MbO1lcu0ZfIFVsbvaltLCBEIpYtlQesHszi7yVJURonrjZ5Bz-1Tt2kQl=w1919-h925";
      }
      case "Bacheo":{
        return "https://lh6.googleusercontent.com/Ub3MsJV5ROtNEHFYsaI7cPr2dJ8DcKwTsmhWYuLEI3OqtC8_4RDo9OZSz1hN6M9cxQehZ21iVYKEY0U-l7-_=w1919-h973"
      }
      case "Luminaria":{
        return "https://lh4.googleusercontent.com/tXAnvTHE0FAesuvW5ffHGkNRibS8eGX8SY5x3M7m-GFAuklJeQFkwapm8mRrnUSJsaYKcVb6NXpx2gQd5kE5=w1919-h925"
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
