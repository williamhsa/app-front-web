import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'descricaoReduzida'})
export class DescricaoReduzida implements PipeTransform {
  // trasform pode receber qualquer tipo de dado
  transform(text: string, truncarEm: number): string {
    if (text.length > truncarEm) {
      return text.substr(0, 15) + '...';
    }
    return text;
  }

}


/*

decoro a classe com @Pipe(), de modo que ela se transforme
em um pipe, assim o Angular sabe que essa classe eh um pipe e nao um component.

@Pipe -> funcao decoradora, decorando nossa classe com o metadado 'name', que a informacao
que vou utiliza em conjunto com o dado para indicar como aquele informação deve ser transformada

*/
