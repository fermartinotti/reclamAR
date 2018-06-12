import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Cuadrilla} from "../model/cuadrilla";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {baseURL} from "./reclamo.service";

@Injectable()
export class CuadrillaService {
  constructor(private httpClient: HttpClient) {
  }

  async crearCuadrilla(cuadrilla: Cuadrilla): Promise<any>{
      return await this.httpClient.post(baseURL+'/api/rest/cuadrillas', cuadrilla,
        {
          headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async todasLasCuadrillas(): Promise<Array<Cuadrilla>>{
    return await this.httpClient.get<Array<Cuadrilla>>(baseURL+'/api/rest/cuadrillas',{
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }


}
