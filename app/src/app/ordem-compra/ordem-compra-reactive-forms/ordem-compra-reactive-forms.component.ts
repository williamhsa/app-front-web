import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'src/app/ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra-reactive-forms',
  templateUrl: './ordem-compra-reactive-forms.component.html',
  styleUrls: ['./ordem-compra-reactive-forms.component.css']
})
export class OrdemCompraReactiveFormsComponent implements OnInit {

  public formOrderBuy: FormGroup = new FormGroup({
    address: new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    number: new FormControl(null,  [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    complement: new FormControl(null),
    formPayment: new FormControl(null,  [ Validators.required ]),
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmBuy(): void {
    console.log(this.formOrderBuy);
  }
}
