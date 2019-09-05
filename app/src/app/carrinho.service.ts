import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';


// isso é uma instância singleton
@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public showItens(): ItemCarrinho[] {
    return this.itens;
  }

  public includeItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    this.itens.push(itemCarrinho);
  }
}



/*
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public showItens(): ItemCarrinho[] {
    return this.itens;
  }

  public includeItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    this.itens.push(itemCarrinho);
  }
}

export default CarrinhoService;
*/

