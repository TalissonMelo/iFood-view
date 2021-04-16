import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from 'src/app/entidades/formaPagamento';
import { FormaPagamentoService } from 'src/app/service/formaPagamento';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html'
})
export class FormaPagamentoComponent implements OnInit {
  public formaPagamentos: FormaPagamento[] = [];

  constructor(private service: FormaPagamentoService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe(res => this.formaPagamentos = res);
  }

}
