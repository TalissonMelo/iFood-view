import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permissao } from '../entidades/permissao';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permissao[]> {
    return this.http.get<Permissao[]>(`${environment.uri}/permissoes`);
  }

  deletar(id: number) : Observable<any> {
    return this.http.delete<any>(`${environment.uri}/permissoes/${id}`);
  }
}
