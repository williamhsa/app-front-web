import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraReactiveFormsComponent } from './ordem-compra/ordem-compra-reactive-forms/ordem-compra-reactive-forms.component';
import { OrdemCompraDataBindingComponent } from './ordem-compra/ordem-compra-data-binding/ordem-compra-data-binding.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'oferta/:id', component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent }
    ]
  },
  { path: 'ordem-compra', component: OrdemCompraComponent },
  { path: 'ordem-compra-reactive-forms', component: OrdemCompraReactiveFormsComponent },
  { path: 'ordem-compra-data-binding', component: OrdemCompraDataBindingComponent }
];


