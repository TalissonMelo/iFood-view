import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';
import { CozinhaComponent } from './cozinha/cozinha.component';


const routes: Routes = [
  {
    path: 'cozinha', component: LayoutComponent, children: [
      { path: "lista", component: CozinhaComponent },
      { path: "frm", component: CozinhaFrmComponent },
      { path: "frm/:id", component: CozinhaFrmComponent },
      { path: '', redirectTo: "/cozinha/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CozinhaRoutingModule { }
