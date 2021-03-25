import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delecao',
  templateUrl: './modal-delecao.component.html'
})
export class ModalDelecaoComponent implements OnInit {
  @Input() objeto : any;
  @Output() deletar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirDelecao(id: number): void {
    this.deletar.emit(id);
  }

}
