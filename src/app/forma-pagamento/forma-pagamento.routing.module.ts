import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagamentoFrmComponent } from './forma-pagamento-frm/forma-pagamento-frm.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';

const routes: Routes = [
  {path: "forma-pagamento", component: FormaPagamentoComponent},
  {path: "forma-pagamento-frm", component : FormaPagamentoFrmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormaPagamentoRoutingModule { }
