import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Pedido } from './shared/pedido.model';
import { Observable } from 'rxjs';
import { URL_API } from './app.api';

// decorador injectable nos fala que esta apto a receber servicos externos
@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) {}

  public effectBuy(pedido: Pedido): Observable<any> {
    let headers: Headers = new Headers();

    headers.append('Content-type', 'application/json');

    console.log('objeto pedido: ', pedido);

    return this.http.post(
      `${URL_API}/pedidos`,
       JSON.stringify(pedido),
       new RequestOptions({ headers: headers })
    )
    .map((res: Response) => console.log(res.json()); );
  }
}

// ṕega um objeto literal e retorna uma string que o representa
