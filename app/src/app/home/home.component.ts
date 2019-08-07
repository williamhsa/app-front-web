import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    this.ofertasService.getOfertas()
      .then(( ofertas: Oferta[] ) => { 
        console.log('a função resolve() foi resolvida depois de 3 segundos')
        this.ofertas = ofertas 
      
      })
      .catch(( param: any ) => { 
        console.log(param) 
      
      })
  }

}


/* 
Visualizar a diferença entre simplesmente instanciar um classe do Serviço e utilizar
o método em relação de fato criar um Serviço singleton dentro do Angular.

Utilizando uma classe de Serviço

                            FORMA ERRADA:
************************************************************************
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ofertas: OfertasService = new OfertasService();
    console.log(ofertas.getOfertas());
  }

}
************************************************************************
export class HomeComponent implements OnInit {

  constructor(private _ofertasService: OfertasService) { }

  ngOnInit() {
    console.log(this._ofertasService.getOfertas());
  }

}

*/