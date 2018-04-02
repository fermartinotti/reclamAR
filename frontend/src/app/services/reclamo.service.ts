
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Reclamo} from "../model/reclamo";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReclamoService {

  constructor (public httpClient: HttpClient){

  }

  public generarReclamo(reclamo: Reclamo): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/rest/reclamos', reclamo);
  }

}
