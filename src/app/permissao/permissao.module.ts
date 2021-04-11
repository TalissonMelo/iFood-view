import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoComponent } from './permissao/permissao.component';
import { PermissaoFrmComponent } from './permissao-frm/permissao-frm.component';
import { PermissaoRoutingModule } from './permissao-routing.module';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  PermissaoComponent, 
  PermissaoFrmComponent
],
imports: [
  CommonModule,
  PermissaoRoutingModule,
  TemplateModule,
  FormsModule
]
})
export class PermissaoModule { }
