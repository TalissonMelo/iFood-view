import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormaPagamento } from '../entidades/formaPagamento';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(`${environment.uri}/forma-pagamentos`);
  }

  deletar(id: number) : Observable<any> {
    return this.http.delete<any>(`${environment.uri}/forma-pagamentos/${id}`);
  }
}