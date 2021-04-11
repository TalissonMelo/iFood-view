import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CozinhaFrmComponent,
     CozinhaComponent],
  imports: [
    CommonModule,
    CozinhaRoutingModule,
    TemplateModule,
    FormsModule,
  ]
})
export class CozinhaModule { }
