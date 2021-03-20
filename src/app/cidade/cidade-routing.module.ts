import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CidadeFrmComponent } from './cidade-frm/cidade-frm.component';
import { CidadeComponent } from './cidade/cidade.component';


const routes: Routes = [
  {
    path: 'cidade', component: LayoutComponent, children: [
      { path: "lista", component: CidadeComponent },
      { path: "frm", component: CidadeFrmComponent },
      { path: "frm/:id", component: CidadeFrmComponent },
      { path: '', redirectTo: "/cidade/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
