import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from 'src/app/entidades/formaPagamento';
import { FormaPagamentoService } from 'src/app/service/formaPagamento';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html'
})
export class FormaPagamentoComponent implements OnInit {
  public formaPagamentos: FormaPagamento[] = [];
  public formaPagamento: FormaPagamento;
  public erroDelcao: string;

  constructor(private service: FormaPagamentoService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.service.listar().subscribe(res => this.formaPagamentos = res);
  }

  preparaDelecao(pagamento: FormaPagamento) {
    this.formaPagamento = pagamento;
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe(() => {
      let index: number = this.formaPagamentos.findIndex((pagamento) => pagamento.id == id);
      this.formaPagamentos.splice(index, 1);
      this.erroDelcao = null;
    }, error => {
      this.erroDelcao = error.error.detalhe;
    });

  }
}
