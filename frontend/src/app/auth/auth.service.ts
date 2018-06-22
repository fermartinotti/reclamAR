import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../model/usuario";

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'pkWsivxxPINC9sLGyeZXqmnTQ1VrqJNV',
    domain: 'reclamar.auth0.com',
    responseType: 'token id_token',
    audience: `http://localhost:8080/api`,
    scope: 'openid profile email read:messages',
    redirectUri:'http://localhost:4200/callback',
  });

  userProfile: any;
  private usuarioLogueado: Usuario = new Usuario(null,null,null,false);

  constructor(public router: Router, private usuarioService: UsuarioService) {
    this.usuarioService.usuarioLogueado()
      .then(usuario => this.usuarioLogueado = usuario);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication():void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/inicio']);
      } else if (err) {
        this.router.navigate(['/inicio']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  public getProfile(): void {
      const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
    });
  }

  private async setSession(authResult): Promise<void> {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    await this.usuarioService.usuarioLogueado()
      .then(usuario => this.usuarioLogueado = usuario);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.usuarioLogueado = new Usuario(null,null,null,false);
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public esAdmin(): boolean {
    return (this.isAuthenticated() && this.usuarioLogueado.esAdmin)
  }


}
