import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/entidades/cidade';
import { CidadeService } from 'src/app/service/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html'
})
export class CidadeComponent implements OnInit {
  public cidades: Cidade[] = [];

  constructor(private service: CidadeService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe((res) => this.cidades = res);
  }

}
