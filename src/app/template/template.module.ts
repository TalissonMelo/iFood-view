import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
    MensagemValidacaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
    MensagemValidacaoComponent
  ]
})
export class TemplateModule { }
