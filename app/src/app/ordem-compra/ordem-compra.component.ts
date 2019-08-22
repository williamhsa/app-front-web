import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idOrderBuy: number;
  // order
  public order: Order = new Order('', '', '', '');

  public address: string = '';
  public numberValue: string = '';
  public complement: string = '';
  public paymentForm: string = '';

  // controles de validação dos campos

  public addressValid: boolean;
  public numberValid: boolean;
  public complementValid: boolean;
  public paymentFormValid: boolean;

  // controlar botão confirmar compra
  public formState: string = 'disabled';

  // estados primitivos dos campos (pristine)
  public addressPrimitiveState: boolean = true;
  public numberPrimitiveState: boolean = true;
  public complementPrimitiveState: boolean = true;
  public paymentFormPrimitiveState: boolean = true;

  constructor(private ordemComraService: OrdemCompraService) { }

  ngOnInit() {
    // this.ordemComraService.effectBuy()
  }

  public confirmBuy(): void {
    this.order.address = this.address;
    this.order.numberAddress = this.numberValue;
    this.order.complement = this.complement;
    this.order.paymentForm = this.paymentForm;
    this.ordemComraService.effectBuy(this.order)
      .subscribe((idOrder: number) => {
        this.idOrderBuy = idOrder;
      });
  }

  public updateAddress(address: string): void {
    this.address = address;
    // console.log('Address: ', this.address);

    this.addressPrimitiveState = false;

    // será valido se a string for maior que 3
    if (this.address.length > 3) {
      this.addressValid = true;
    } else {
      this.addressValid = false;
    }

    this.enableForm();
  }

  public updateNumber(value: string): void {
    this.numberValue = value;
    // console.log('numberValue: ', this.numberValue);

    this.numberPrimitiveState = false;

    // será valido se a string possui 1 ou mais caracteres
    if (this.numberValue.length > 0) {
      this.numberValid = true;
    } else {
      this.numberValid = false;
    }

    this.enableForm();
  }

  public updateComplement(complement: string): void {
    this.complement = complement;
    // console.log('complement: ', this.complement);
    this.complementPrimitiveState = false;
    // Complement sera valido se possuir 1 ou mais caracteres, porem
    // por ser opcional nunca sera invalido
    if (this.complement.length >= 1) {
      this.complementValid = true;
    } else {
      this.complementValid = false;
    }
  }

  public updatePaymentForm(paymentForm: string): void {
    this.paymentForm = paymentForm;
    // console.log('payform: ', this.paymentForm);
    this.paymentFormPrimitiveState = false;
    // é valido se possuir uma opção valida selecionada.
    if (this.paymentForm.length > 0) {
      this.paymentFormValid = true;
    } else {
      this.paymentFormValid = false;
    }

    this.enableForm();
  }

  public enableForm(): void {
    if ( this.addressValid && this.numberValid && this.paymentFormValid) {
      this.formState = '';
    } else {
      this.formState = 'disabled';
    }
  }

}
