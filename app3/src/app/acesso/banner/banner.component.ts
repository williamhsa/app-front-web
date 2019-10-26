import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in')),
      // transition('visivel => escondido', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  public imagens: Imagem[] = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' },
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.imagens)
    setTimeout(() => this.logicaRotacao(), 2000);

    /*
      para esse método 'logicaRotação' não ser executado no momento de atribuição 
      dele como parametro do método 'setTimeout', precisa ser feito uma técnica de wrapper.
      Utilizando uma função anonima, que está função é executada quando ocorre a atribuição
      do método 'setTimeout', retornando apenas o método que vai ser executado la dentro
      do setTimeout apos 3 segundos.

      Utilizar uma logica recursiva, para poder chamar o método varias vezes e poder gerar
      o efeito de transição das imagens

    */
  }

  public logicaRotacao(): void {
    // console.log(this.imagens);
    // aux para exibir proximo banner
    let idx: number = 0;

    // ocultar a imagem
    for (let i = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        idx = i === 4 ? 0 : i + 1;
        break;
      }
    }

    // exibir a proxima imagem
    this.imagens[idx].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 2000);
  }

  public toggleState(): void {
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

}
