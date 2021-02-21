import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioFrmComponent } from "./usuario-frm/usuario-frm.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const routes: Routes = [
    {path: "usuario", component: UsuarioComponent},
    {path: "usuario-frm", component : UsuarioFrmComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }