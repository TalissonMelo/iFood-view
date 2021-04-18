import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteFrmComponent } from './restaurante-frm/restaurante-frm.component';
import { RestauranteRoutingModule } from './resturante-routing.module';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [
    RestauranteComponent, 
    RestauranteFrmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateModule,
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
