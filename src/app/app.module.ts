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
import { PermissaoModule } from './permissao/permissao.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { GrupoModule } from './grupo/grupo.module';

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
    FormaPagamentoModule,
    PermissaoModule,
    ProdutoModule,
    UsuarioModule,
    GrupoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
