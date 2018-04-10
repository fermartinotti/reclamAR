import { Component, OnInit, NgZone } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Luminaria} from "../model/luminaria";
import {Localizacion} from "../model/localizacion"
import { MouseEvent } from '@agm/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-luminaria',
  templateUrl: './luminaria.component.html',
  styleUrls: ['./luminaria.component.css']
})
export class LuminariaComponent implements OnInit {
  reclamo: Reclamo;
  luminaria: Luminaria;
  latInicial: number = -34.72418;
  lngInicial: number = -58.25265;
  zoom: number = 8;
  markers: marker[] = [];
  localizacion: Localizacion;
  display='none'


  constructor(public reclamoService: ReclamoService, public router: Router) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria = new Luminaria("luminaria")
    this.localizacion = new Localizacion("", "")
  }

  async generarReclamo():Promise<void>{
    this.reclamo.setTipoDeReclamo = this.luminaria
    try{
      await this.reclamoService.generarReclamo(this.reclamo)
    }catch(error){
      this.handleError(error);
    }
    // Abro dialog
    this.display='block';
  }

  public handleError(error){
    this.router.navigate(['']);
  }

  onCloseHandled(){
    this.display='none';
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
    this.reclamo.setLugarDeIncidente= this.localizacion
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

