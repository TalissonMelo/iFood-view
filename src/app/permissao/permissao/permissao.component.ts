import { Component, OnInit } from '@angular/core';
import { Permissao } from 'src/app/entidades/permissao';
import { PermissaoService } from 'src/app/service/permissao.service';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html'
})
export class PermissaoComponent implements OnInit {
  public permissoes: Permissao[] = [];
  public permissao: Permissao;
  public erroDelcao: string;
  
  constructor(private service: PermissaoService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe((res) => this.permissoes = res);
  }

  preparaDelecao(permissao: Permissao) {
    this.permissao = permissao;
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe(() => {
      let index: number = this.permissoes.findIndex((permissao) => permissao.id == id);
      this.permissoes.splice(index, 1);
    }, error => {
      this.erroDelcao = error.error.detalhe;
    });
  }
}
