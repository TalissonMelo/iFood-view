import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { GrupoFrmComponent } from "./grupo-frm/grupo-frm.component";
import { GrupoComponent } from "./grupo/grupo.component";

const routes: Routes = [
  {
    path: 'grupo', component: LayoutComponent, children: [
      { path: "lista", component: GrupoComponent },
      { path: "frm", component: GrupoFrmComponent },
      { path: '', redirectTo: "/grupo/lista", pathMatch: 'full' }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GrupoRoutingModule { }
