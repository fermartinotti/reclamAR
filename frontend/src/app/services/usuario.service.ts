import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Usuario} from "../model/usuario";
import {baseURL} from "./reclamo.service";

@Injectable()
export class UsuarioService {
  constructor(private httpClient: HttpClient) {

  }


  async loguearUsuario(): Promise<void>{
    return await this.httpClient.get<void>( baseURL+'/api/rest/login', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise();
  }

  async usuarioLogueado(): Promise<Usuario>{
    return await this.httpClient.get<Usuario>(baseURL+'/api/rest/usuarioLogueado')
      .map(usuario => Usuario.crearDesdeJson(usuario)).toPromise();
  }

}
