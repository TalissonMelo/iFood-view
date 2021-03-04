import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../entidades/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>('http://localhost:8080/cidades');
  }
}
