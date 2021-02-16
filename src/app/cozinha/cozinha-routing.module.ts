import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CozinhaFrmComponent } from './cozinha-frm/cozinha-frm.component';
import { CozinhaComponent } from './cozinha/cozinha.component';


const routes: Routes = [
  {path: "cozinha-frm", component : CozinhaFrmComponent},
  {path: "cozinha", component: CozinhaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CozinhaRoutingModule { }
