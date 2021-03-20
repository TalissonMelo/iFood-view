import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { PedidoFrmComponent } from "./pedido-frm/pedido-frm.component";
import { PedidoComponent } from "./pedido/pedido.component";

const routes: Routes = [
  {
    path: 'pedido', component: LayoutComponent, children: [
      { path: "lista", component: PedidoComponent },
      { path: "frm", component: PedidoFrmComponent },
      { path: '', redirectTo: "/pedido/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }