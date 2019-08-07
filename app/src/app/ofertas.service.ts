import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from '../app/shared/oferta.model'

import { URL_API} from './app.api'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

  private url_api = 'http://localhost:3100/ofertas'

  constructor( private http: Http ) { }

  public getOfertas(): Promise<Oferta[]> {
    // return this.http.get(`${this.url_api}?destaque=false`)
    return this.http.get(`${URL_API}/ofertas?destaque=false`)

      .toPromise()
      .then((resposta: Response) => resposta.json())
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: Response) => res.json())
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((res: Response) => {
         return res.json().shift()
         // ou : return res.json()[0]
      })
      /*
      método .shift() pega um array, retira o primeiro elemento desse array e traz todos
      os outros elementos ainda contidos para n-1.
      */
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json()[0].descricao)
        return res.json()[0].descricao
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((res: Response) => {
        return res.json()[0].descricao
      })
  }

  // _like é do JsonServer, faz busca por aproximação
  public searchOffer(offer: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${offer}`)
      .retry(5)
      .map((response: Response) => response.json())
  }

  public searchOffer2(offer: string): Observable<Oferta[]> {
    // resposta pura da requisição http rest
    return this.http.get(`${URL_API}/ofertas?descricao_oferta=${offer}`)
      .map((response: any) => response)
  }

}

/*
operador map() -> recupera cada um dos eventos disparados na stream do observable
                  e com base em uma função, pode-se transformar esse evento em alguma
                  outra coisa.
*/