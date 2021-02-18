import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteFrmComponent } from './restaurante-frm/restaurante-frm.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  {path: "restaurante", component: RestauranteComponent},
  {path: "restaurante-frm", component : RestauranteFrmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
