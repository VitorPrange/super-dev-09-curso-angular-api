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
    this.carregarProjetos();
  }

  carregarProjetos(): void {

    this.projetoService.listar().subscribe({
      // next é o caso de sucesso
      next: projetos => {
        const projetosOrdenados = projetos.sort((x, y) => x.nome.localeCompare(y.nome));
        this.projetos.set(projetosOrdenados);
      },
      // error e o caso de erro
      error: erro => {
        console.error("Erro ao carregar os projetos: " + erro);
        alert("Não foi possivel carregar os projetos")
      }
    })


  }

  apagar(id: string): void {
    this.projetoService.apagar(id).subscribe({
      next: () => {
        alert("Projeto apagado com sucesso");
        this.carregarProjetos();
      },
      error: erro => {
        console.error("Erro ao tentar apagar o projeto" + erro);
        alert("Erro ao apagar projeto");
      }
    })
  }
}
