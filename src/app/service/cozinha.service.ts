import { Injectable } from '@angular/core';
import { Cozinha } from '../entidades/cozinha';

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {

  constructor() { }

  cozinhas(): Cozinha[] {
    let cozinhas: Cozinha[] = [];
    let cozinha: Cozinha = new Cozinha();
    cozinha.nome = "Brasileira";
    cozinha.id = 1
    cozinhas.push(cozinha);
    return cozinhas;
  }
}
