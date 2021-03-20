import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { FormaPagamentoFrmComponent } from './forma-pagamento-frm/forma-pagamento-frm.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';

const routes: Routes = [
  {
    path: 'pagamento', component: LayoutComponent, children: [
      { path: "lista", component: FormaPagamentoComponent },
      { path: "frm", component: FormaPagamentoFrmComponent },
      { path: '', redirectTo: "/pagamento/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormaPagamentoRoutingModule { }
