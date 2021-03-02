import { Injectable } from '@angular/core';
import { Permissao } from '../entidades/permissao';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  constructor() { }

  permissoes(): Permissao[] {
    let permissoes: Permissao[] = [];
    let permissao: Permissao = new Permissao();
    permissao.id = 1
    permissao.nome = "CONSULTAR_COZINHAS";
    permissao.descricao = "Permite consultar cozinhas";
    permissoes.push(permissao);
    return permissoes;
  }
}
