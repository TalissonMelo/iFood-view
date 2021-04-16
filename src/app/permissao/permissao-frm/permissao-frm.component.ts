import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Permissao } from 'src/app/entidades/permissao';
import { PermissaoService } from 'src/app/service/permissao.service';

@Component({
  selector: 'app-permissao-frm',
  templateUrl: './permissao-frm.component.html'
})
export class PermissaoFrmComponent implements OnInit {
  public permissao: Permissao;
  public validaPermissao: boolean;
  public id: number;
  public sucesso: string = "Permissão cadastrada com sucesso.";
  public erro: string = "Permissao e Obrigatório, deve conter no mínimo 5 caracteres. Descrição e Obrigatório.";
  
  constructor(private activatedRoute: ActivatedRoute, private service: PermissaoService) { 
    this.permissao = new Permissao();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      this.id = url['id'];
      if (this.id) {
        this.service.listarPermissaoId(this.id).subscribe(res => this.permissao = res);
      }
    });
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
