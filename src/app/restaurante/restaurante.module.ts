import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteFrmComponent } from './restaurante-frm/restaurante-frm.component';
import { RestauranteRoutingModule } from './resturante-routing.module';

@NgModule({
  declarations: [RestauranteComponent, RestauranteFrmComponent],
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ], exports : [
    RestauranteComponent,
    RestauranteFrmComponent
  ]
})
export class RestauranteModule { }
