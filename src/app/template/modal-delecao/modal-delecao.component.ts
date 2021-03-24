import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delecao',
  templateUrl: './modal-delecao.component.html'
})
export class ModalDelecaoComponent implements OnInit {
  @Input() objeto : any;

  constructor() { }

  ngOnInit(): void {
  }

}
