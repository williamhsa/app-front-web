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

    // verificar se o item em questão já nao existe
    // referencia pro objeto dentro do nosso array ItemCarrinho
    let itemCartFound = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCartFound) {
      itemCartFound.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }

  }

  public totalCartShopping(): number {
    let total: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade);
    });

    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    //incrementar quantidade

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    // decrementar quantidade

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        //  com base em um indice, ele vai recortar aquele indice e devolver aquele
        // indice para um variavel
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }

  public clearCart(): void {
    this.itens = [];
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

