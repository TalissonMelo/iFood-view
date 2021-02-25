import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoComponent } from './permissao/permissao.component';
import { PermissaoFrmComponent } from './permissao-frm/permissao-frm.component';
import { PermissaoRoutingModule } from './permissao-routing.module';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [PermissaoComponent, PermissaoFrmComponent],
  imports: [
    CommonModule,
    PermissaoRoutingModule,
    TemplateModule
  ],exports: [
    PermissaoComponent,
    PermissaoFrmComponent
  ]
})
export class PermissaoModule { }
