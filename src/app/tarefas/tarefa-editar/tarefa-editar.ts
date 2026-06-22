import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaModel } from '../../models/tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { signalUpdateFn } from '@angular/core/primitives/signals';

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

  tarefaService = inject(TarefaService);

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    if(idParaEditar === null){
      alert("Id da tarefa não encontrado");
      this.router.navigate(["/tarefas"]);
      return;
    }

    this.tarefa.update(tarefa=> ({
      ...tarefa,
      id: idParaEditar
    }));
    this.consultarTarefa();
  }

  consultarTarefa(): void {
    this.tarefaService.obterPorId(this.tarefa().id).subscribe({
      next: tarefa => {
        this.tarefa.update(() => ({
          id: tarefa.id,
          descricao: tarefa.descricao,
          prioridade: tarefa.prioridade,
          horasEstimadas: tarefa.horasEstimadas
        }))
      },
      error: erro => {
        console.error("deu ruim" + erro)
        alert("Ocorreu um erro ao consultar a tarefa");
      }
    })
  }

  salvar(): void {


    this.tarefaService.editar(this.tarefa().id, this.tarefa()).subscribe({
      next: () => {
        alert("Tarefa editada com sucesso")
        this.router.navigate(["/tarefas"]);
      },
      error: erro => {
        console.error("Não foi possivel alterar a tarefa");
        alert("Erro ao aterar a tarefa");
      }
    });
  }
}
