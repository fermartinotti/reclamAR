import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Cuadrilla} from "../model/cuadrilla";
import 'rxjs/add/operator/map';

@Injectable()
export class CuadrillaService {
  constructor(private httpClient: HttpClient) {
  //
  // public crearCuadrilla(cuadrilla: Cuadrilla): Promise<void>{
  //     return await this.httpClient.post('http://localhost:8080/api/rest/')
  //   }

  }
}
