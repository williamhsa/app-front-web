import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


import { Usuario } from './acesso/usuario.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    // console.log('auth service', usuario);

    // dimensão de autenticacao do firebase
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((response: any) => {
        console.log(response);

        delete usuario.senha; // removendo o atributo senha antes de enviar, pq nao queremos salvar a senha do usuario

        // criando ref() a partir desse endereço databaseURL: 'https://jta-instagram-clone-da597.firebaseio.com' e criando um path novo
        // firebase nao aceita caracteres especiais, por isso vamos criptografar a string em base64
        // utilizando o método btoa() converte a string em base64, e para transformar de base64 para string novamente utiliza-se atob()
        // push() -> faz o inclusao de documentos dentro do path
        // set() -> com base na referencia faz a remocao de qualquer conteudo que possui la dentro e faz somente a persistencia de
        // um unico documento dentro daquele nó
        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set( usuario );
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  public autenticar(email: string, senha: string): void {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(
        (res: any) => {
          console.log('resposta: ', res);
        }
      )
      .catch(
        (error: Error) => {
          console.log('erro: ', error);
        }
      );

  }
}
