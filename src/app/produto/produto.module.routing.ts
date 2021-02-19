import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoFrmComponent } from "./produto-frm/produto-frm.component";
import { ProdutoComponent } from "./produto/produto.component";

const routes: Routes = [
    {path: "produto", component: ProdutoComponent  },
    {path: "produto-frm", component : ProdutoFrmComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProdutoRoutingModule { }