import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { ProdutoFrmComponent } from "./produto-frm/produto-frm.component";
import { ProdutoComponent } from "./produto/produto.component";

const routes: Routes = [
  {
    path: 'produto', component: LayoutComponent, children: [
      { path: "lista", component: ProdutoComponent },
      { path: "frm", component: ProdutoFrmComponent },
      { path: '', redirectTo: "/produto/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }