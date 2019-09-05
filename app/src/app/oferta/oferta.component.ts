import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from './../ofertas.service';

import { Observable, Observer, Subscription } from 'rxjs';

import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';
// import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  // providers: [ CarrinhoService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;

  private tempoObservableSubscription: Subscription;
  private myObservableTestSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    // console.log('Oferta CarrinhoService: ', this.carrinhoService.showItens());
    // utilizando rota
    console.log('Route', this.route.snapshot.params.id);
    // this.route.params.subscribe((parameter: any) => {
    //  console.log('Params id:', parameter.id)
    // })

    this.route.params.subscribe((param: Params) => {

      this.ofertasService.getOfertasPorId(param.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(oferta);
      });

    });
    /*
      atributo params nos retorna um obserable, ele dispara um evento
      quando ocorre uma alteração dos parametro nessa rota
    */

    /* this.ofertasService.getOfertasPorId(this.route.snapshot.params.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(oferta);
      }); */

    /* // this.route.params.subscribe(
    //   (parametro: any) => {
    //     console.log(parametro)
    //   },
    //   (err: any) => {
    //     console.log(err)
    //   },
    //   () => console.log('Processamento concluído!')
    // )

    let tempo = Observable.interval(2000)

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })

    // observable (observável)
    const myObservableTest = Observable.create((observer: Observer<string>) => {
      observer.next('First event of stream')
      observer.next('Second event of stream')
      observer.next('Third event of stream')
      // observer.error('algum erro foi encontrado na stream de eventos')
      observer.complete()
      observer.next('Event after error') // não é disparado
    })

    // observable (observador)
    this.myObservableTestSubscription = myObservableTest.subscribe(
      (response: any) => console.log(response),
      (err: any) => console.log(err),
      (complete: any) => console.log('metodo complete')
    )

    //  this.myObservableTestSubscription
    //    uma referencia para os subscribers dos meus observables
     */


  }

  /*  com esse unsubscribe() dos subscription dos obserables resolvo problemas por exemplo
      memory leak

      Meus observables só entram em ação quando ocorre um subscribe
  */

  ngOnDestroy(): void {
    console.log('componente destruído');
    // this.tempoObservableSubscription.unsubscribe()
    // this.myObservableTestSubscription.unsubscribe()
  }

  // primeira forma
  // public addItemCart(oferta: Oferta): void {
  //   console.log('oferta click: ', oferta);
  // }

  public addItemCart(): void {
    console.log('oferta click: ', this.oferta);
    this.carrinhoService.includeItem(this.oferta);
    console.log(this.carrinhoService.showItens());
  }

}
