import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {
  // ng g c oferta/comoUsar --spec=false

  public comoUsar: string;

  constructor(
    private router: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    this.router.parent.params.subscribe((param: Params) => {

      this.ofertasService.getComoUsarOfertaPorId(param.id)
        .then((descricao: string) => {
          this.comoUsar = descricao;
      });

    });

    /* console.log('id: ', this.router.parent.snapshot.params.id);
    this.ofertasService.getComoUsarOfertaPorId(this.router.parent.snapshot.params.id)
      .then((descricao: string) => {
        this.comoUsar = descricao;
    }); */
    console.log('comoUsar: ', this.comoUsar);
  }

}
