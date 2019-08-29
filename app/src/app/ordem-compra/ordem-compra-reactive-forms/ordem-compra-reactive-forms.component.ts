import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'src/app/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra-reactive-forms',
  templateUrl: './ordem-compra-reactive-forms.component.html',
  styleUrls: ['./ordem-compra-reactive-forms.component.css']
})
export class OrdemCompraReactiveFormsComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {}
}
