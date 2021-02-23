import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PaginacaoComponent } from './paginacao/paginacao.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PaginacaoComponent,
  ]
})
export class TemplateModule { }
