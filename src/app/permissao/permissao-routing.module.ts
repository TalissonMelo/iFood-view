import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PermissaoFrmComponent } from './permissao-frm/permissao-frm.component';
import { PermissaoComponent } from './permissao/permissao.component';

const routes: Routes = [
  {
    path: 'permissao', component: LayoutComponent, children: [
      { path: "lista", component: PermissaoComponent },
      { path: "frm", component: PermissaoFrmComponent },
      { path: "frm/:id", component: PermissaoFrmComponent },
      { path: '', redirectTo: "/permissao/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoRoutingModule { }