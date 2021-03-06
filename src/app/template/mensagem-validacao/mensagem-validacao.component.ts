import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-validacao',
  templateUrl: './mensagem-validacao.component.html'
})
export class MensagemValidacaoComponent {
  @Input() validacao: boolean = false;
  @Input() sucesso: string;
  @Input() erro: string;
}
