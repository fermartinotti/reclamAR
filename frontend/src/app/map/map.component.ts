import { Component, OnInit, Output, EventEmitter, NgZone , Input} from '@angular/core';
import {Localizacion} from "../model/localizacion";
import { MouseEvent, AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latInicial: number = -34.72418;
  lngInicial: number = -58.25265;
  zoom: number = 8;
  //Punto marcado en el map
  markers: marker[] = [];
  @Input() localizacion: Localizacion;
  @Output() onclickMap = new EventEmitter<Localizacion>();
  @Input() clickableMap: boolean = true;
  direccionFisica = null

  constructor() {
  }

  ngOnInit() {
    if(this.localizacion != null){
      this.addMarker()
      this.agregardireccionFisica()
    }
    else {
      this.localizacion = new Localizacion(null,null)
      }
}
  agregardireccionFisica():void{


  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    if(this.clickableMap){
      this.markers=[];
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      });
    }

    this.localizacion.setLatitud = $event.coords.lat.toString()
    this.localizacion.setLongitud = $event.coords.lng.toString()

    this.onclickMap.emit(this.localizacion);
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
}
  // just an interface for type safety.
  interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
