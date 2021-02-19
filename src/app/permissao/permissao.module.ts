import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoComponent } from './permissao/permissao.component';
import { PermissaoFrmComponent } from './permissao-frm/permissao-frm.component';
import { PermissaoRoutingModule } from './permissao.module.routing';



@NgModule({
  declarations: [PermissaoComponent, PermissaoFrmComponent],
  imports: [
    CommonModule,
    PermissaoRoutingModule
  ],exports: [
    PermissaoComponent,
    PermissaoFrmComponent
  ]
})
export class PermissaoModule { }
