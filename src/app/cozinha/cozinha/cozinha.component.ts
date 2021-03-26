import { Component, OnInit } from '@angular/core';
import { Cozinha } from 'src/app/entidades/cozinha';
import { CozinhaService } from 'src/app/service/cozinha.service';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html'
})
export class CozinhaComponent implements OnInit {
  public cozinhas: Cozinha[] = [];
  public cozinha: Cozinha;
  public erroDelcao: string;

  constructor(private service: CozinhaService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe(res => this.cozinhas = res)
  }

  preparaDelecao(cozinha : Cozinha){
    this.cozinha = cozinha;
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe(() =>{
      let index: number = this.cozinhas.findIndex((cozinha) => cozinha.id == id);
      this.cozinhas.splice(index);
    }, error => {
      this.erroDelcao = error.error.detalhe;
    });
  }
}
