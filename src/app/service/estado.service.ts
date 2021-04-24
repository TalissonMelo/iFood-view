import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurante } from '../entidades/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${environment.uri}/restaurantes`);
  }

}