import { Component, OnInit } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Luminaria} from "../model/luminaria";
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  reclamo: Reclamo;
  luminaria: Luminaria;
  lat: number = -34.72418;
  lng: number = -58.25265;
  zoom: number = 8;
  markers: marker[] = [];


  constructor(public reclamoService: ReclamoService) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria= new Luminaria("luminaria")
  }

  public generarReclamo():void{
    this.reclamo.setTipoDeReclamo = this.luminaria
    this.reclamoService.generarReclamo(this.reclamo).subscribe()
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
