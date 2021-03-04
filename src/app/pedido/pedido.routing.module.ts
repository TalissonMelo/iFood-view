import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoFrmComponent } from "./pedido-frm/pedido-frm.component";
import { PedidoComponent } from "./pedido/pedido.component";

const routes: Routes = [
    {path: "pedido", component: PedidoComponent},
    {path: "pedido-frm", component : PedidoFrmComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PedidoRoutingModule { }