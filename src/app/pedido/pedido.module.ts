import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoFrmComponent } from './pedido-frm/pedido-frm.component';
import { PedidoRoutingModule } from './pedido.routing.module'

@NgModule({
  declarations: [
    PedidoComponent, 
    PedidoFrmComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
