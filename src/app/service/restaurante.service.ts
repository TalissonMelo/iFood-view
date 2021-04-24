import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../entidades/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${environment.uri}/estados`);
  }

  listarEstadoId(id: number): Observable<Estado> {
    return this.http.get<Estado>(`${environment.uri}/estados/${id}`);
  }
}