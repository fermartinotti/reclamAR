
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reclamo} from "../model/reclamo";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ReabrirDTO} from "../model/reabrirDTO";

export const baseURL = 'http://localhost:8080'

@Injectable()
export class ReclamoService {
  constructor (private httpClient: HttpClient){

  }
  //protected baseUrl: string = 'http://localhost:8080';

  async generarReclamo(reclamo: Reclamo): Promise<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await this.httpClient.post(baseURL+'/api/rest/reclamos', reclamo, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async buscarReclamo(id: number): Promise<Reclamo>{
    return await this.httpClient.get(baseURL+`/api/rest/reclamos/${id}`)
      .map(reclamo => Reclamo.crearDesdeJson(reclamo)).toPromise()
  }

  async misReclamos(): Promise<Array<Reclamo>>{
    return await this.httpClient.get<Array<Reclamo>>(baseURL+'/api/rest/reclamos/', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise();
  }

  async todosLosReclamos(): Promise<Array<Reclamo>>{
    return await this.httpClient.get<Array<Reclamo>>(baseURL+'/api/rest/reclamos/todos').toPromise()
  }

  // async todosLosReclamos(): Promise<Array<Reclamo>>{
  //   return await this.httpClient.get<Array<Reclamo>>(baseURL+'/api/rest/reclamos/todos')
  //     .map(respuesta => respuesta.map(reclamo => Reclamo.crearDesdeJson(reclamo))).toPromise()
  // }

  async finalizarReclamo(dto: any):Promise<any>{
    return await this.httpClient.post(baseURL+'/api/rest/reclamos/finalizarReclamo', dto,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      }).toPromise()
  }


  async reabrirReclamo(dto: ReabrirDTO): Promise<any>{
    return await this.httpClient.post(baseURL+'/api/rest/reclamos/reabrirReclamo', dto,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      }).toPromise()
  }


}
