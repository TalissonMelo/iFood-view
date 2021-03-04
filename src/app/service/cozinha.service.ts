import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cozinha } from '../entidades/cozinha';

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cozinha[]> {
    return this.http.get<Cozinha[]>('http://localhost:8080/cozinhas');
  }
}
