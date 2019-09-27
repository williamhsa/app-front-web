import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Order } from '../shared/order.model';
import { NgForm } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // fazendo referencia ao #formTemplate do html
  @ViewChild('formTemplate', {static: false}) public formBuy: NgForm;

  public idOrderBuy: number;

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

  }

  public confirmBuy(): void {
    console.log(this.formBuy.value);
    const order: Order = new Order(
      this.formBuy.value.address,
      this.formBuy.value.number,
      this.formBuy.value.complement,
      this.formBuy.value.formPayment,
      this.carrinhoService.showItens()
    );
    this.ordemCompraService.effectBuy(order)
      .subscribe((id: number) => {
        this.idOrderBuy = id;
        console.log('Pedido cadastrado com sucesso! ID do Pedido: ' + id);
      });
  }
  /* public confirmBuy(formBuy: NgForm): void {
    console.log(formBuy);
  } */
}
