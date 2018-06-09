import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Usuario} from "../model/usuario";

@Injectable()
export class UsuarioService {
  constructor(private httpClient: HttpClient) {

  }

  protected baseUrl: string = 'http://localhost:8080';

  async loguearUsuario(): Promise<void>{
    return await this.httpClient.get<void>( this.baseUrl+'/api/rest/login', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    }).toPromise();
  }

  async usuarioLogueado(): Promise<Usuario>{
    return await this.httpClient.get<Usuario>(this.baseUrl+'/api/rest/usuarioLogueado')
      .map(usuario => Usuario.crearDesdeJson(usuario)).toPromise();
  }

}
