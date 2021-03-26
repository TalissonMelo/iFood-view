import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cozinha } from '../entidades/cozinha';

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cozinha[]> {
    return this.http.get<Cozinha[]>(`${environment.uri}/cozinhas`);
  }

  listarCozinhaId(id:number): Observable<Cozinha> {
    return this.http.get<Cozinha>(`${environment.uri}/cozinhas/${id}`);
  }
  
  deletar(id: number) : Observable<any> {
    return this.http.delete<any>(`${environment.uri}/cozinhas/${id}`);
  }
}
