import { Component, OnInit } from '@angular/core'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: []
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategorias('diversao')
    .then( res =>
      this.ofertas = res
    )
  }
}
