import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';
import { ModalDelecaoComponent } from './modal-delecao/modal-delecao.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
    MensagemValidacaoComponent,
    ModalDelecaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
    MensagemValidacaoComponent,
    ModalDelecaoComponent
  ]
})
export class TemplateModule { }
