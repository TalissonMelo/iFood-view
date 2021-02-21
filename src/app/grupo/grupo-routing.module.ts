import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrupoFrmComponent } from "./grupo-frm/grupo-frm.component";
import { GrupoComponent } from "./grupo/grupo.component";

const routes: Routes = [
    {path: "grupo", component: GrupoComponent},
    {path: "grupo-frm", component : GrupoFrmComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class GrupoRoutingModule { }
  