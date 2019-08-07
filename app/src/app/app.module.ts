import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { TopoComponent } from './topo/topo.component'
import { HomeComponent } from './home/home.component'
import { RodapeComponent } from './rodape/rodape.component'
import { RestauranteComponent } from './restaurante/restaurante.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertasService } from './ofertas.service'
import 'rxjs/Rx'
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent
  ],
  imports: [
    BrowserModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    OfertasService
    // { provide: LOCALE_ID, useValue: 'pt-Br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* 
forRoot --> mapeamento de rotas global par aplicação.
forChild --> mapeamento de rotas internas de componentes.


*/