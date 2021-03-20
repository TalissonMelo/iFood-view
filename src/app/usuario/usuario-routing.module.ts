import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { UsuarioFrmComponent } from "./usuario-frm/usuario-frm.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const routes: Routes = [
  {
    path: 'usuario', component: LayoutComponent, children: [
      { path: "lista", component: UsuarioComponent },
      { path: "frm", component: UsuarioFrmComponent },
      { path: '', redirectTo: "/usuario/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }