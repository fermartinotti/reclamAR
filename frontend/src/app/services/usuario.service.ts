import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Usuario} from "../model/usuario";
import {baseURL} from "./reclamo.service";

@Injectable()
export class UsuarioService {
  constructor(private httpClient: HttpClient) {

  }

  async usuarioLogueado(): Promise<Usuario>{
    return await this.httpClient.get<Usuario>(baseURL+'/api/rest/usuarioLogueado',
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      })
      .map(usuario => Usuario.crearDesdeJson(usuario)).toPromise();
  }

}
