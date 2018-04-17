
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reclamo} from "../model/reclamo";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ReclamoService {
  constructor (private httpClient: HttpClient){

  }

/*
  generarReclamo (reclamo:Reclamo): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:8080/api/rest/reclamos', reclamo,{headers: headers, observe: "response"})
  }
*/

  async generarReclamo(reclamo: Reclamo): Promise<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await this.httpClient.post('http://localhost:8080/api/rest/reclamos', reclamo).toPromise()
  }

  public buscarReclamo(id: number): Observable<Reclamo>{
    return this.httpClient.get(`http://localhost:8080/api/rest/reclamos/${id}`)
      .map(reclamo => Reclamo.crearDesdeJson(reclamo))
  }
}
