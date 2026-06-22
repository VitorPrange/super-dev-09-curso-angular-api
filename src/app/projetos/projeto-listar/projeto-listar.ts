import { Component, inject, signal } from '@angular/core';
import { ProjetoService } from '../../services/projeto.service';
import { ProjetoModel } from '../../models/projeto.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projeto-listar',
  imports: [RouterLink],
  templateUrl: './projeto-listar.html',
  styleUrl: './projeto-listar.scss',
})
export class ProjetoListar {

  private readonly projetoService = inject(ProjetoService);

  projetos = signal<ProjetoModel[]>([]);

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas(): void {

    this.projetoService.listar().subscribe({
      next: projetos => {
        const tarefasOrdenadas = projetos.sort((x, y) => x.nome.localeCompare(y.nome));
        this.projetos.set(tarefasOrdenadas);
      },
      // error e o caso de erro
      error: erro => {
        console.error("Erro ao carregar as tarefas: " + erro);
        alert("Não foi possivel carregar as tarefas")
      }
    })


  }

  apagar(id: string): void {
    this.projetos.update(projetos => projetos.filter(x => x.id !== id))
    const tarefasString = JSON.stringify(this.projetos());
    localStorage.setItem("tarefas", tarefasString);
  }
}
