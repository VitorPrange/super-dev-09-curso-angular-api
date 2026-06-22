import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa.model';
import { Observable, ObservableInput } from 'rxjs';
import { environment } from '../../environments/environment';

// Como gerar service: ng g s services\tarefa.service
// Service é responsavel pela comunicação com a API de tarefas
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  // Cliente responsavel por fazer a requisição para o backend(API)
  private readonly http = inject(HttpClient);

  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/tarefas`;

  listar(): Observable<TarefaModel[]>{
    // fazer requisição para carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(this.baseUrl);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {

    return this.http.post<TarefaModel>(this.baseUrl, tarefa);

  }

  apagar(id: string): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    //aqui é void pois o status code da request é 204 no content, o back não retorna dados quando é 204
    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<TarefaModel>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<TarefaModel>(url);
  }

  editar(id: string, tarefa: TarefaModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.put<void>(url, tarefa);
  }
}
