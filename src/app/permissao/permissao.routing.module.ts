import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissaoFrmComponent } from './permissao-frm/permissao-frm.component';
import { PermissaoComponent } from './permissao/permissao.component';

const routes: Routes = [
  {path: "permissao", component: PermissaoComponent },
  {path: "permissao-frm", component : PermissaoFrmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoRoutingModule { }