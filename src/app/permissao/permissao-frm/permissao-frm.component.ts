import { Component, OnInit } from '@angular/core';
import { Permissao } from 'src/app/entidades/permissao';

@Component({
  selector: 'app-permissao-frm',
  templateUrl: './permissao-frm.component.html'
})
export class PermissaoFrmComponent implements OnInit {
  public permissao: Permissao;
  public validaPermissao: boolean;
  
  constructor() { 
    this.permissao = new Permissao();
  }

  ngOnInit(): void {
  }

  salvar() : void {
    if(this.validarPermissao()){
      console.log(this.permissao)
      this.validaPermissao = true;
    }
  }

  validarPermissao(): boolean {
    let nome: boolean = this.permissao.nome != null && this.permissao.nome.length > 5 ? true : false;
    let descricao: boolean = this.permissao.descricao != null ? true : false;
    this.validaPermissao = nome && descricao;
    return this.validaPermissao;
  }

}
