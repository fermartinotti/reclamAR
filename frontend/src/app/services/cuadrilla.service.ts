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

  protected baseUrl: string = 'http://localhost:8080';

   async crearCuadrilla(cuadrilla: Cuadrilla): Promise<any>{
      return await this.httpClient.post(this.baseUrl+'/api/rest/cuadrillas', cuadrilla,
        {
          headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }

  async todasLasCuadrillas(): Promise<Array<Cuadrilla>>{
    return await this.httpClient.get<Array<Cuadrilla>>(this.baseUrl+'/api/rest/cuadrillas',{
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise()
  }


}
