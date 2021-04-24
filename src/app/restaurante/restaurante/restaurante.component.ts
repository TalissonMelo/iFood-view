import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/entidades/restaurante';
import { RestauranteService } from 'src/app/service/estado.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {
  public restaurantes: Restaurante[] = [];

  constructor(private service: RestauranteService) { }

  ngOnInit(): void {
  }

  listarRestaurantes(): void {
    this.service.listar().subscribe(res => this.restaurantes = res);
  }

}
