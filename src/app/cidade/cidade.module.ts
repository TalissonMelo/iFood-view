import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeComponent } from './cidade/cidade.component';
import { CidadeFrmComponent } from './cidade-frm/cidade-frm.component';
import { CidadeRoutingModule } from './cidade-routing.module';
import { TemplateModule } from '../template/template.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CidadeComponent,
    CidadeFrmComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    CidadeRoutingModule,
    TemplateModule
  ], exports : [
    CidadeComponent,
    CidadeFrmComponent
  ]
})
export class CidadeModule { }
