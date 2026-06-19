import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaModel } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-listar',
  imports: [RouterLink],
  templateUrl: './tarefa-listar.html',
  styleUrl: './tarefa-listar.scss',
})
export class TarefaListar {

  private readonly tarefaService = inject(TarefaService);

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

    this.tarefaService.listar().subscribe({
      // next é o caso de sucesso
      next: tarefas => {
        const tarefasOrdenadas = tarefas.sort((x, y) => x.descricao.localeCompare(y.descricao));
        this.tarefas.set(tarefasOrdenadas);
      },
      // error e o caso de erro
      error: erro => {
        console.error("Erro ao carregar as tarefas: " + erro);
        alert("Não foi possivel carregar as tarefas")
      }
    })


  }

  apagar(id: string): void {
    this.tarefas.update(tarefas => tarefas.filter(x => x.id !== id))
    const tarefasString = JSON.stringify(this.tarefas());
    localStorage.setItem("tarefas", tarefasString);
  }
}
