
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Reclamo} from "../model/reclamo";
import { Observable } from "rxjs/Observable";
import {getResponseURL} from "@angular/http/src/http_utils";

@Injectable()
export class ReclamoService {

  constructor (public httpClient: HttpClient){

  }

/*  public generarReclamo(reclamo: Reclamo): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/rest/reclamos', reclamo)*/


  async generarReclamo(reclamo: Reclamo): Promise<any>{
    return await this.httpClient.post('http://localhost:8080/api/rest/reclamos', reclamo).toPromise()

  }
}
