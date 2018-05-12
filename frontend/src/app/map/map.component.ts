import { Component, OnInit, Output, EventEmitter, NgZone , Input} from '@angular/core';
import {Localizacion} from "../model/localizacion";
import { MouseEvent, AgmMap } from '@agm/core';
import {Geocoder} from '../model/geocoder';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers :[Geocoder]
})
export class MapComponent implements OnInit {
  latInicial: number = -34.72418;
  lngInicial: number = -58.25265;
  zoom: number = 13;
  //Punto marcado en el map
  markers: marker[] = [];
  @Input() localizacion: Localizacion;
  @Output() onclickMap = new EventEmitter<Localizacion>();
  @Input() clickableMap: boolean = true;
  direccionFisica;

  constructor(private geocoder: Geocoder) {
  }

  ngOnInit() {
    if(this.localizacion != null){
      this.addMarker()
    }
    else {
      this.localizacion = new Localizacion(null,null,null)
      }
}

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.findLocation($event.coords.lat.toString(), $event.coords.lng.toString());
    if(this.clickableMap){
      this.markers=[];
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      });

      this.localizacion.setLatitud = $event.coords.lat.toString()
      this.localizacion.setLongitud = $event.coords.lng.toString()

      this.onclickMap.emit(this.localizacion);
    }
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  addMarker(){
    this.markers.push({
      lat: Number(this.localizacion.latitud),
      lng: Number(this.localizacion.longitud),
      draggable: false
    });
  }

  findLocation(lat:string, lng:string): void {
    this.direccionFisica = this.geocoder.getLocation(lat, lng)
    .then((response) => {this.direccionFisica = response.results[0].formatted_address, this.localizacion.setDireccionFisica= this.direccionFisica})
    .catch((error) => console.error(error));
  }
}
  // just an interface for type safety.
  interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
