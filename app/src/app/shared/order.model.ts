import { ItemCarrinho } from './item-carrinho.model';

export class Order {
  constructor(
    public address: string,
    public numberAddress: string,
    public complement: string,
    public paymentForm: string,
    public itens: Array<ItemCarrinho>
  ) { }
}
