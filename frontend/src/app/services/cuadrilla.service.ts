import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Cuadrilla} from "../model/cuadrilla";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CuadrillaService {
  constructor(private httpClient: HttpClient) {
  }

   async crearCuadrilla(cuadrilla: Cuadrilla): Promise<any>{
      return await this.httpClient.post('http://localhost:8080/api/rest/cuadrillas', cuadrilla,
        {headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async todasLasCuadrillas(): Promise<Array<Cuadrilla>>{
    return await this.httpClient.get<Array<Cuadrilla>>('http://localhost:8080/api/rest/cuadrillas').toPromise()
  }


}
