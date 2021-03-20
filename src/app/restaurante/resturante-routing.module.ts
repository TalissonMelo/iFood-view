import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RestauranteFrmComponent } from './restaurante-frm/restaurante-frm.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  {
    path: 'restaurante', component: LayoutComponent, children: [
      { path: "lista", component: RestauranteComponent },
      { path: "frm", component: RestauranteFrmComponent },
      { path: '', redirectTo: "/restaurante/lista", pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
