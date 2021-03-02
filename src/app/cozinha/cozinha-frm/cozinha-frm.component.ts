import { Component, OnInit } from '@angular/core';
import { Cozinha } from 'src/app/entidades/cozinha';

@Component({
  selector: 'app-cozinha-frm',
  templateUrl: './cozinha-frm.component.html'
})
export class CozinhaFrmComponent implements OnInit {
  public cozinha: Cozinha;
  public validaCozinha: boolean;

  constructor() { 
    this.cozinha = new Cozinha();
  }

  ngOnInit(): void {
  }

  salvar(): void {
    if(this.validarCozinha()){
      this.validaCozinha = true;
      console.log(this.cozinha);
    }
  }

  validarCozinha(): boolean {
    this.validaCozinha = this.cozinha.nome != null && this.cozinha.nome.length >= 5 ? true : false;
    return this.validaCozinha;
  }

}
