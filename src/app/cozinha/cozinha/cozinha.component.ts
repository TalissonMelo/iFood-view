import { Component, OnInit } from '@angular/core';
import { Cozinha } from 'src/app/entidades/cozinha';
import { CozinhaService } from 'src/app/service/cozinha.service';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html'
})
export class CozinhaComponent implements OnInit {
  public cozinhas: Cozinha[] = [];

  constructor(private service: CozinhaService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe(res => this.cozinhas = res)
  }

}
