import { Component, inject, signal } from '@angular/core';
import { ProjetoService } from '../../services/projeto.service';
import { Router } from '@angular/router';
import { ProjetoModel } from '../../models/projeto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-cadastrar',
  imports: [FormsModule],
  templateUrl: './projeto-cadastrar.html',
  styleUrl: './projeto-cadastrar.scss',
})
export class ProjetoCadastrar {

  private readonly projetoService = inject(ProjetoService);
  private readonly router = inject(Router);

  projeto = signal<ProjetoModel>({
    id: crypto.randomUUID(),
    nome: "",
    codigoProjeto: null,
    custoEstimado: null
  })

  salvar(): void {
    this.projetoService.cadastrar(this.projeto()).subscribe({
      next: () =>{
        alert("Projeto cadastrado com sucesso");
        this.router.navigate(["/projetos"]);
      },
      error: erro =>{
        console.error("Erro ao cadastrar projeto: " + erro);
        alert("Ocorreu um erro ao cadastrar o projeto")
      }
    })
  }
}
