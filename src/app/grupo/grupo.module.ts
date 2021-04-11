import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo/grupo.component';
import { GrupoFrmComponent } from './grupo-frm/grupo-frm.component';
import { GrupoRoutingModule } from './grupo-routing.module'

@NgModule({
  declarations: [GrupoComponent, GrupoFrmComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
    ]
})
export class GrupoModule { }
