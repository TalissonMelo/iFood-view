import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from '../entidades/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${environment.uri}/cidades`);
  }

  listarCidadeId(id:number): Observable<Cidade> {
    return this.http.get<Cidade>(`${environment.uri}/cidades/${id}`);
  }

  deletar(id: number) : Observable<any> {
    return this.http.delete<any>(`${environment.uri}/cidades/${id}`);
  }

  adicionar(cidade: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(`${environment.uri}/cidades`, cidade);
  }
}
