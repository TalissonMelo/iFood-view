import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';
import { CozinhaComponent } from './cozinha/cozinha.component';


@NgModule({
  declarations: [CozinhaFrmComponent, CozinhaComponent],
  imports: [
    CommonModule,
    CozinhaRoutingModule
  ], exports: [
    CozinhaFrmComponent, 
    CozinhaComponent
  ]
})
export class CozinhaModule { }
