import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";
export class Autenticacao {
    public token_id: string

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        // console.log('Chegamos até o serviço: ', usuario)

       return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                /* Vamos somente gravar o e-mail do usuário, não
                queremos salvar no path usuario_detalhe a senha dele,
                logo, usaremos o delete */
                delete usuario.senha
                /* Estamos salvando os dados complementares do usuário no path usuario_detalhe
                em formato de base64, pela função nativa btoa do JS */
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => {
            firebase.auth().currentUser.getIdToken()
            .then((idToken: string) => {
                this.token_id = idToken
            })
        })
        .catch((error: Error) => console.log(error))
    }
}