
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reclamo} from "../model/reclamo";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ReclamoService {
  constructor (private httpClient: HttpClient){

  }
  protected baseUrl: string = 'http://localhost:8080';

  async generarReclamo(reclamo: Reclamo): Promise<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await this.httpClient.post(this.baseUrl+'/api/rest/reclamos', reclamo, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async buscarReclamo(id: number): Promise<Reclamo>{
    return await this.httpClient.get(this.baseUrl+`/api/rest/reclamos/${id}`)
      .map(reclamo => Reclamo.crearDesdeJson(reclamo)).toPromise()
  }

  async misReclamos(): Promise<Array<Reclamo>>{
    return await this.httpClient.get<Array<Reclamo>>(this.baseUrl+'/api/rest/reclamos/', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise();
  }

  async todosLosReclamos(): Promise<Array<Reclamo>>{
    return await this.httpClient.get<Array<Reclamo>>(this.baseUrl+'/api/rest/reclamos/todos').toPromise()
  }
}
