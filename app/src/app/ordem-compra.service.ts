import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './shared/order.model';
import { Observable } from 'rxjs';
import { URL_API } from './app.api';

// decorador injectable nos fala que esta apto a receber servicos externos
@Injectable()
export class OrdemCompraService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public effectBuy(order: Order): Observable<any> {
    console.log('objeto pedido: ', order);

    return this.httpClient.post<any>(`${URL_API}/pedidos`, order)
    .map((res: any) => res.id);
  }
}

// ṕega um objeto literal e retorna uma string que o representa
