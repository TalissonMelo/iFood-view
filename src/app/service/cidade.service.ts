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
}
