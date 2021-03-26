import { Component, OnInit } from '@angular/core';
import { Permissao } from 'src/app/entidades/permissao';
import { PermissaoService } from 'src/app/service/permissao.service';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html'
})
export class PermissaoComponent implements OnInit {
  public permissoes: Permissao[] = [];

  constructor(private service: PermissaoService) { }

  ngOnInit(): void {
  }
}
