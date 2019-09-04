import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'src/app/ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Order } from '../../shared/order.model';
import CarrinhoService from '../../carrinho.service';

@Component({
  selector: 'app-ordem-compra-reactive-forms',
  templateUrl: './ordem-compra-reactive-forms.component.html',
  styleUrls: ['./ordem-compra-reactive-forms.component.css'],
  providers: [ CarrinhoService ]
})
export class OrdemCompraReactiveFormsComponent implements OnInit {

  public idOrderBuy: number;

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

  ngOnInit() {
    console.log('carrinho: ', this.carrinhoService.showItens());
  }

  public confirmBuy(): void {
    console.log(this.formOrderBuy);
    const order: Order = new Order(
      this.formOrderBuy.value.address,
      this.formOrderBuy.value.number,
      this.formOrderBuy.value.complement,
      this.formOrderBuy.value.formPayment
    );

    this.ordemCompraService.effectBuy(order)
      .subscribe((id: number) => {
        this.idOrderBuy = id;
        console.log(id);
      });

  }
}
