import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeFrmComponent } from './cidade-frm/cidade-frm.component';
import { CidadeRoutingModule } from './cidade-routing.module';

@NgModule({
  declarations: [CidadeComponent, CidadeFrmComponent],
  imports: [
    CommonModule,
    CidadeRoutingModule
  ], exports : [
    CidadeComponent,
    CidadeFrmComponent
  ]
})
export class CidadeModule { }
