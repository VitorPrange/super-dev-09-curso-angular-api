import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaModel } from '../../models/tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa-editar',
  imports: [FormsModule],
  templateUrl: './tarefa-editar.html',
  styleUrl: './tarefa-editar.scss',
})
export class TarefaEditar {
  tarefa = signal<TarefaModel>({
    id: "",
    descricao: "",
    prioridade: null,
    horasEstimadas: null
  });

  // Método executado quando o componente de editar tarefa é aberto
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    // Pega o id definido na rota /tarefas/editar/:id
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    // Carrega a lista de tarefas do localStorage
    const tarefasString = localStorage.getItem("tarefas");
    if (tarefasString === null) {
      alert("Nenhuma tarefa cadastrada")
      router.navigate(["/tarefas"]);
      return;
    }

    const tarefas = JSON.parse(tarefasString) as TarefaModel[];
    const tarefasEncontradas = tarefas.filter(tarefa => tarefa.id === idParaEditar);

    if (tarefasEncontradas.length === 0) {
      alert("Tarefa não encontrada")
      router.navigate(["/tarefas"]);
      return;
    }

    this.tarefa.set(tarefasEncontradas[0]);
  }

  salvar(): void {
    const tarefas = this.carregarTarefasDoLocalStorage();

    const indiceTarefaParaEditar = tarefas.findIndex(x => x.id === this.tarefa().id);
    tarefas[indiceTarefaParaEditar].descricao = this.tarefa().descricao;
    tarefas[indiceTarefaParaEditar].prioridade = this.tarefa().prioridade;
    tarefas[indiceTarefaParaEditar].horasEstimadas = this.tarefa().horasEstimadas;
    
    const tarefaString = JSON.stringify(tarefas);
    localStorage.setItem("tarefas", tarefaString)

    alert("Tarefa alterada com sucesso");

    this.router.navigate(["/tarefas"]);
  }

  carregarTarefasDoLocalStorage(): TarefaModel[] {
    const tarefasString = localStorage.getItem("tarefas");

    if (tarefasString === null) {
      return [];
    }

    return JSON.parse(tarefasString) as TarefaModel[];
  }
}
