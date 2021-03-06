import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/entidades/cidade';

@Component({
  selector: 'app-cidade-frm',
  templateUrl: './cidade-frm.component.html'
})
export class CidadeFrmComponent implements OnInit {
  public cidade: Cidade;
  public validarCidade: boolean;
  public erro: string = "Nome e estado são Obrigatórios!."
  public sucesso: string = "Cidade cadastrada com sucesso!.";

  constructor() {
    this.cidade = new Cidade();
   }

  ngOnInit(): void {
  }

  salvar(): void {
    if(this.validarCidades()){
      this.validarCidade = true;
    }
  }

  validarCidades(): boolean {
    this.validarCidade = this.cidade.nome != null && this.cidade.nome.length >= 5 ? true : false;
    return this.validarCidade;
  }

}
