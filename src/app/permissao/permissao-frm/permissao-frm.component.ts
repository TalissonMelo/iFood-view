import { Component, OnInit } from '@angular/core';
import { Permissao } from 'src/app/entidades/permissao';

@Component({
  selector: 'app-permissao-frm',
  templateUrl: './permissao-frm.component.html'
})
export class PermissaoFrmComponent implements OnInit {
  public permissao: Permissao;
  public validaPermissao: boolean;
  public sucesso: string = "Permissão cadastrada com sucesso.";
  public erro: string = "Permissao e Obrigatório, deve conter no mínimo 5 caracteres. Descrição e Obrigatório.";
  
  constructor() { 
    this.permissao = new Permissao();
  }

  ngOnInit(): void {
  }

  salvar() : void {
    if(this.validarPermissao()){
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
