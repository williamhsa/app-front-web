import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'src/app/ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Order } from '../../shared/order.model';
import { CarrinhoService } from '../../carrinho.service';
import { ItemCarrinho } from 'src/app/shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra-reactive-forms',
  templateUrl: './ordem-compra-reactive-forms.component.html',
  styleUrls: ['./ordem-compra-reactive-forms.component.css'],
  // providers: [ CarrinhoService ]
})
export class OrdemCompraReactiveFormsComponent implements OnInit {

  public idOrderBuy: number;
  public itemCart: ItemCarrinho[] = [];

  public formOrderBuy: FormGroup = new FormGroup({
    address: new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    number: new FormControl(null,  [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    complement: new FormControl(null),
    formPayment: new FormControl(null,  [ Validators.required ]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

    // template tbm tem acesso ao servico do construtor.

  ngOnInit() {
    console.log('carrinho Service: ', this.carrinhoService.showItens());
    this.itemCart = this.carrinhoService.showItens();
    console.log('itemCart: ', this.itemCart);
  }

  public confirmBuy(): void {

    if (this.carrinhoService.showItens().length === 0) {
      alert('Você não selecionou nenhum item!');
    } else {
      console.log(this.formOrderBuy);
      const order: Order = new Order(
        this.formOrderBuy.value.address,
        this.formOrderBuy.value.number,
        this.formOrderBuy.value.complement,
        this.formOrderBuy.value.formPayment,
        this.carrinhoService.showItens()
      );

      this.ordemCompraService.effectBuy(order)
        .subscribe((id: number) => {
          this.idOrderBuy = id;
          console.log(id);
          this.carrinhoService.clearCart();
        });
    }

  }


  /*
    aumentando a quantidade de itens de um item do carrinho em especifico, existe duas formas
    de se faze isso, a primeira é do template chamar um metodo da classe do componente e dentro dele
    utilizar um metodo do serviço. Ou do template já chamar o metodo do servico.
  */
  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }
}
