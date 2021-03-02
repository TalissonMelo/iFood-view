import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeModule } from './cidade/cidade.module';
import { CozinhaModule } from './cozinha/cozinha.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { GrupoModule } from './grupo/grupo.module';
import { HomeComponent } from './home/home.component';
import { PermissaoModule } from './permissao/permissao.module';
import { ProdutoModule } from './produto/produto.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { CidadeService } from './service/cidade.service';
import { CozinhaService } from './service/cozinha.service';
import { PermissaoService } from './service/permissao.service';
import { TemplateModule } from './template/template.module';
import { UsuarioModule } from './usuario/usuario.module';



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
  providers: [
    CidadeService, 
    CozinhaService,
    PermissaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
