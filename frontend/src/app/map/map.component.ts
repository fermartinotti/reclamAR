import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
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
  localizacion: Localizacion;
  @Output() onclickMap = new EventEmitter<Localizacion>();

  constructor() { }

  ngOnInit() {
    this.localizacion = new Localizacion("", "")
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers=[];
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

    this.localizacion.setLatitud = $event.coords.lat.toString()
    this.localizacion.setLongitud = $event.coords.lng.toString()

    this.onclickMap.emit(this.localizacion);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
  // just an interface for type safety.
  interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
