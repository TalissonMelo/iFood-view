import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFrmComponent } from './usuario-frm/usuario-frm.component';
import { UsuarioRoutingModule } from './usuario.routing.module';

@NgModule({
  declarations: [UsuarioComponent, UsuarioFrmComponent],
  imports: [
    CommonModule, 
    UsuarioRoutingModule
  ], exports:[
    UsuarioComponent,
    UsuarioFrmComponent
  ]
})
export class UsuarioModule { }
