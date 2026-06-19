import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaModel } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-cadastrar',
  imports: [FormsModule],
  templateUrl: './tarefa-cadastrar.html',
  styleUrl: './tarefa-cadastrar.scss',
})
export class TarefaCadastrar {
  tarefa = signal<TarefaModel>({
    id: crypto.randomUUID(),
    descricao: "",
    prioridade: null,
    horasEstimadas: null
  })

  salvar(): void {
    const tarefas = this.carregarTarefasDoLocalStorage();

    tarefas.push(this.tarefa());

    const tarefaString = JSON.stringify(tarefas);
    localStorage.setItem("tarefas", tarefaString)

    alert("Tarefa cadastrada com sucesso");
  }

  carregarTarefasDoLocalStorage(): TarefaModel[] {
    const tarefasString = localStorage.getItem("tarefas");

    if (tarefasString === null) {
      return [];
    }

    return JSON.parse(tarefasString) as TarefaModel[];
  }
}
