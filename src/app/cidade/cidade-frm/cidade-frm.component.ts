import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Cidade } from 'src/app/entidades/cidade';
import { Estado } from 'src/app/entidades/estado';
import { CidadeService } from 'src/app/service/cidade.service';
import { EstadoService } from 'src/app/service/estado.service';

@Component({
  selector: 'app-cidade-frm',
  templateUrl: './cidade-frm.component.html'
})
export class CidadeFrmComponent implements OnInit {
  public cidade: Cidade;
  public validarCidade: boolean;
  public erro: string = "Nome e estado são Obrigatórios!."
  public sucesso: string = "Cidade cadastrada com sucesso!.";
  public id: number;
  public estados: Estado[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CidadeService,
    private serviceEstado: EstadoService,
    ) {
    this.cidade = new Cidade();
   }

  ngOnInit(): void {
    this.listarEstados();
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      this.id = url['id'];
      if(this.id){
        this.service.listarCidadeId(this.id).subscribe(res => this.cidade = res);
      }
    });
  }

  listarEstados(): void {
    this.serviceEstado.listar().subscribe(res => this.estados = res);
  }

  salvar(): void {
    if(this.validarCidades()){
      this.validarCidade = true;
    }
  }

  validarCidades(): boolean {
    this.validarCidade = this.cidade.nome != null && this.cidade.nome.length >= 5 ? true : false;
    return this.validarCidade;
  }
}
