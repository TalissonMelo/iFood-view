import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FormaPagamentoFrmComponent } from './forma-pagamento-frm/forma-pagamento-frm.component';
import { FormaPagamentoRoutingModule } from './forma-pagamento.routing.module';



@NgModule({
  declarations: [FormaPagamentoComponent, FormaPagamentoFrmComponent],
  imports: [
    CommonModule,
    FormaPagamentoRoutingModule
  ], exports : [
    FormaPagamentoComponent,
    FormaPagamentoFrmComponent
  ]
})
export class FormaPagamentoModule { }