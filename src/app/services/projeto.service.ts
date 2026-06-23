import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoModel } from '../models/projeto.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  // Cliente responsavel por fazer a requisição para o backend(API)
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/projetos`;

  listar(): Observable<ProjetoModel[]>{
    return this.http.get<ProjetoModel[]>(this.baseUrl);
  }

  cadastrar(projeto: ProjetoModel): Observable<ProjetoModel> {
    return this.http.post<ProjetoModel>(this.baseUrl, projeto);
  }

  apagar(id: string): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    //aqui é void pois o status code da request é 204 no content, o back não retorna dados quando é 204
    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<ProjetoModel>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ProjetoModel>(url);
  }

  editar(id: string, projeto: ProjetoModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.put<void>(url, projeto);
  }
}
