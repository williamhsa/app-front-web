import { Component, OnInit } from '@angular/core'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})

export class RestauranteComponent implements OnInit {

  public ofertas: Oferta[]

  // public dataTest: any = new Date(2017, 8, 30)

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategorias('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
    })
  }
}


