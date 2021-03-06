import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeModule } from './cidade/cidade.module';
import { CozinhaModule } from './cozinha/cozinha.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { GrupoModule } from './grupo/grupo.module';
import { HomeComponent } from './home/home.component';
import { PedidoModule } from './pedido/pedido.module';
import { PermissaoModule } from './permissao/permissao.module';
import { ProdutoModule } from './produto/produto.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { CidadeService } from './service/cidade.service';
import { CozinhaService } from './service/cozinha.service';
import { PermissaoService } from './service/permissao.service';
import { TemplateModule } from './template/template.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormaPagamentoService } from './service/formaPagamento';
import {  RestauranteService } from './service/estado.service';
import { EstadoService } from './service/restaurante.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CozinhaModule,
    CidadeModule,
    RestauranteModule,
    FormaPagamentoModule,
    PermissaoModule,
    ProdutoModule,
    UsuarioModule,
    GrupoModule,
    PedidoModule
  ],
  providers: [
    CidadeService, 
    CozinhaService,
    PermissaoService,
    FormaPagamentoService,
    EstadoService,
    RestauranteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
