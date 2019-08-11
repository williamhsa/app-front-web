import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string;

  constructor(
    private router: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    this.router.parent.params.subscribe((param: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(param.id)
        .then((descricao: string) => {
          this.ondeFica = descricao;
        });
    });

    console.log('id2: ', this.router.parent.snapshot.params.id);
    /* this.ofertasService.getOndeFicaOfertaPorId(this.router.parent.snapshot.params.id)
      .then((descricao: string) => {
        this.ondeFica = descricao;
      }); */
  }
}
