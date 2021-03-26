import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/entidades/cidade';
import { CidadeService } from 'src/app/service/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html'
})
export class CidadeComponent implements OnInit {
  public cidades: Cidade[] = [];
  public cidade: Cidade;
  public erroDelcao: string;

  constructor(private service: CidadeService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe((res) => this.cidades = res);
  }

  preparaDelecao(cidade : Cidade){
    this.cidade = cidade;
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe(() =>{
      let index: number = this.cidades.findIndex((cidade) => cidade.id == id);
      this.cidades.splice(index);
      this.erroDelcao = null;
    }, error => {
      this.erroDelcao = error.error.detalhe;
    });
    
  }
}
