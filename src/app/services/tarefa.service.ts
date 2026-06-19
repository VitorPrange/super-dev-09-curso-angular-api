import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa.model';
import { Observable } from 'rxjs';

// Como gerar service: ng g s services\tarefa.service
// Service é responsavel pela comunicação com a API de tarefas
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  // Cliente responsavel por fazer a requisição para o backend(API)
  private readonly http = inject(HttpClient);

  listar(): Observable<TarefaModel[]>{
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    // fazer requisição para carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(url);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    return this.http.post<TarefaModel>(url, tarefa);

  }
}
