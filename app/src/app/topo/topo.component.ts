import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  // public ofertaTwo: Oferta[];
  // nosso proxy está criado
  // está funcionando como um gateway para nossos observables
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor( private ofertasService: OfertasService) { }

  ngOnInit() {
    // essa estrutura explicada na aula 159 udemy
    this.ofertas = this.subjectSearch // retorno Oferta[]
      .debounceTime(1000) // executa a ação do switchMap após 1 segundo
      .distinctUntilChanged()
      .switchMap((wordCall: string) => {
        // console.log('request http: ', wordCall);
        // para evitar pesquisa por strings vazias
        if (wordCall.trim() === '') {
          // returnar um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertasService.searchOffer(wordCall);
      })
      .catch((err: any) => {
        // console.log(err);
        return Observable.of<Oferta[]>([]);
      });
      // catch nos traz para dentro nosso codigo um pilar muito importante
      // da programação reativa que é a resiliencia
      // aviso ou armazenar esses erros do lado da aplicacao e depois enviar pro servidor
      // para uma analise, envio em tempo real para administração da aplicação.
    /*

    Colocado pipe async no local dele
    this.ofertas.subscribe(
      (response: Oferta[]) => {
        console.log('ae', response);
        this.ofertaTwo = response;
      }
    );

    */
  }

  // posso fazer desse jeito, onde recebo a string direto
  public search(word: string): void {
    // console.log('keyup: ', word);
    this.subjectSearch.next(word);
  }

  // acessando o 'value' do Event.target
  public searchEvent(event: Event): void {
    let text;
    text = ( event.target as HTMLInputElement).value;
    // console.log('word searched HTML Element', text)
  }

  // utilizando variavel de refencia no html
  public searchRefer(word: string): void {
    // console.log('refence variable: ', word)
    /* this.ofertasService.searchOffer2(word).subscribe(
      // retorna um http corpo
      (response: any) => { console.log('http res', response)}
    ) */
  }

  public clearSearch(): void {
    this.subjectSearch.next('');
  }

}


/*

  ****       DistinctUntilChanged
    permite controlar se a pesquisa atual é identica a pesquisa anterior, pois
    se for igual ele vai desconsiderar, reexecuta o chamada se for diferente a busca


 // posso fazer desse jeito, onde recebo a string direto
  public search(word: string): void {
    console.log('word searched: ', word)
    // this.ofertasService.searchOffer(word).subscribe(
    //   (response: any) => {
    //     console.log('response', response)
    //   }
    // )
    this.ofertas = this.ofertasService.searchOffer(word)

    this.ofertas.subscribe(
      (responseOffers: Oferta[]) => console.log('Observador', responseOffers),
      (error: any) => console.log('error', error),
      () => console.log('Fluxo de eventos completo!')
    )
  }


*/
