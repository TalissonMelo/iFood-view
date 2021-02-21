import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFrmComponent } from './produto-frm/produto-frm.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [ProdutoComponent, ProdutoFrmComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ], exports: [
    ProdutoComponent,
    ProdutoFrmComponent
  ]
})

export class ProdutoModule { }
