import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Cozinha } from 'src/app/entidades/cozinha';
import { CozinhaService } from 'src/app/service/cozinha.service';

@Component({
  selector: 'app-cozinha-frm',
  templateUrl: './cozinha-frm.component.html'
})
export class CozinhaFrmComponent implements OnInit {
  public cozinha: Cozinha;
  public validaCozinha: boolean;
  public sucesso: string = "Cozinha cadastrada com sucesso.";
  public erro: string = "Nome e Obrigatório, deve conter no mínimo 5 caracteres."
  public id: number;

  constructor(private service: CozinhaService, private activatedRoute: ActivatedRoute) {
    this.cozinha = new Cozinha();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      this.id = url['id'];
      if (this.id) {
        this.service.listarCozinhaId(this.id).subscribe(res => this.cozinha = res);
      }
    });
  }

  atualizar(): void {
    if (this.validarCozinha()) {
      this.service.atualizar(this.cozinha.id, this.cozinha).subscribe(res => {
        this.validaCozinha = true;
      }, error => {
        this.validaCozinha = false;
      })
    }
  }

  salvar(): void {
    if (this.validarCozinha()) {
      this.service.adicionar(this.cozinha).subscribe(res => {
        this.validaCozinha = true;
      }, error => {
        this.validaCozinha = false;
      })
    }
  }

  validarCozinha(): boolean {
    this.validaCozinha = this.cozinha.nome != null && this.cozinha.nome.length >= 5 ? true : false;
    return this.validaCozinha;
  }

}
