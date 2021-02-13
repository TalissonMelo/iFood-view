import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CozinhaRoutingModule } from './cozinha-routing.module';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';


@NgModule({
  declarations: [CozinhaFrmComponent],
  imports: [
    CommonModule,
    CozinhaRoutingModule
  ]
})
export class CozinhaModule { }
