import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeFrmComponent } from './cidade-frm/cidade-frm.component';
import { CidadeComponent } from './cidade/cidade.component';


const routes: Routes = [
  {path: "cidade", component: CidadeComponent},
  {path: "cidade-frm", component: CidadeFrmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
