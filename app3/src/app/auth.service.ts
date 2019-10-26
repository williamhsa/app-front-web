import { Injectable } from '@angular/core';

import { Usuario } from './acesso/usuario.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  public cadastrarUsuario(usuario: Usuario): void {
    console.log('auth service', usuario);
  }
}
