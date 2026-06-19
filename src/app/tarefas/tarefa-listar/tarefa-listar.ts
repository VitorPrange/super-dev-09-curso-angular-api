import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaModel } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-listar',
  imports: [RouterLink],
  templateUrl: './tarefa-listar.html',
  styleUrl: './tarefa-listar.scss',
})
export class TarefaListar {
  tarefas = signal<TarefaModel[]>([]);

  ngOnInit() {
    this.carregarTarefas();
  }

  readonly totalMinutos = computed(() => {
    let total = 0;
    this.tarefas().forEach(tarefa => {
      total += tarefa.horasEstimadas ?? 0;
    });
    return total;
  })

  carregarTarefas(): void {
    const tarefasString = localStorage.getItem("tarefas");
    if (tarefasString === null) {
      return;
    }

    const tarefasLista = JSON.parse(tarefasString) as TarefaModel[];

    const tarefasOrdenadas = tarefasLista.sort((x, y) => x.descricao.localeCompare(y.descricao));
    this.tarefas.set(tarefasOrdenadas);
  }

  apagar(id: string): void {
    this.tarefas.update(tarefas => tarefas.filter(x => x.id !== id))
    const tarefasString = JSON.stringify(this.tarefas());
    localStorage.setItem("tarefas", tarefasString);
  }
}
