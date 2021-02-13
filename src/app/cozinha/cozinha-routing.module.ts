import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';


const routes: Routes = [
  {path: "cozinha-frm", component : CozinhaFrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CozinhaRoutingModule { }
