import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { CozinhaModule } from './cozinha/cozinha.module';
import { CidadeModule } from './cidade/cidade.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    CozinhaModule,
    CidadeModule,
    RestauranteModule,
    FormaPagamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
