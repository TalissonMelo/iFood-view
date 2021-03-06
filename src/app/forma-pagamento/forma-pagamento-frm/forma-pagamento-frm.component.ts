import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from 'src/app/entidades/formaPagamento';

@Component({
  selector: 'app-forma-pagamento-frm',
  templateUrl: './forma-pagamento-frm.component.html'
})
export class FormaPagamentoFrmComponent implements OnInit {
  public formaPagamento: FormaPagamento;
  public validaFormaPagamento: boolean;
  public sucesso: string = "Forma de Pagamento cadastrada com sucesso!.";
  public erro: string = "Descrição e obrigatória, minímo 5 caracteres";
  
  constructor() { 
    this.formaPagamento = new FormaPagamento();
  }

  ngOnInit(): void {
  }

  salvar(): void {
    if(this.validarFormaPagamento()){
      this.validaFormaPagamento = true;
    }
  }

  validarFormaPagamento(): boolean {
    this.validaFormaPagamento = this.formaPagamento.descricao != null && this.formaPagamento.descricao.length > 5 ? true : false;
    return this.validaFormaPagamento;
  }
}
