import { Component, OnInit, NgZone } from '@angular/core';
import { Reclamo} from "../model/reclamo";
import {ReclamoService} from "../services/reclamo.service";
import {Luminaria} from "../model/luminaria";
import {Localizacion} from "../model/localizacion"
import { MouseEvent } from '@agm/core';
import { Router} from "@angular/router";
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

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

  private _success = new Subject<string>();
  warningMessage: string;

  constructor(public reclamoService: ReclamoService, public router: Router) {
  }

  ngOnInit() {
    this.reclamo = new Reclamo("")
    this.luminaria = new Luminaria("luminaria")
    this.localizacion = new Localizacion("", "")

    // logica cierre alert
    this._success.subscribe((message) => this.warningMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.warningMessage = null);
  }

  async generarReclamo():Promise<void>{
    if (this.markers.length == 0){
      this.changeSuccessMessage()
    }else{
    this.reclamo.setTipoDeReclamo = this.luminaria

    try{
      await this.reclamoService.generarReclamo(this.reclamo)

    }catch(error){

    }
    this.openModal()
    }
  }

  openModal(){
    this.display='block';
  }

  onCloseHandled(){
    this.display='none';
    this.router.navigate(['']);
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

  public changeSuccessMessage() {
    this._success.next(`Por favor seleccione la ubicacion de su reclamo`);
  }

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

