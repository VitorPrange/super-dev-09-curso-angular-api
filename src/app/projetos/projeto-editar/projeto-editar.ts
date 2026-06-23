import { Component, inject, signal } from '@angular/core';
import { ProjetoModel } from '../../models/projeto.model';
import { ProjetoService } from '../../services/projeto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-editar',
  imports: [FormsModule],
  templateUrl: './projeto-editar.html',
  styleUrl: './projeto-editar.scss',
})
export class ProjetoEditar {
  projeto = signal<ProjetoModel>({
    id: crypto.randomUUID(),
    nome: "",
    codigoProjeto: null,
    custoEstimado: null
  })

  projetoService = inject(ProjetoService);

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    if (idParaEditar === null) {
      alert("Id do projeto não encontrado");
      this.router.navigate(["/projetos"]);
      return;
    }

    this.projeto.update(projeto => ({
      ...projeto,
      id: idParaEditar
    }));
    this.consultarProjeto();
  }

  consultarProjeto(): void {
    this.projetoService.obterPorId(this.projeto().id).subscribe({
      next: projeto => {
        this.projeto.update(() => ({
          id: projeto.id,
          nome: projeto.nome,
          codigoProjeto: projeto.codigoProjeto,
          custoEstimado: projeto.custoEstimado
        }))
      },
      error: erro => {
        console.error("deu ruim" + erro)
        alert("Ocorreu um erro ao consultar o projeto");
      }
    })
  }

  salvar(): void {


    this.projetoService.editar(this.projeto().id, this.projeto()).subscribe({
      next: () => {
        alert("Projeto editado com sucesso")
        this.router.navigate(["/projetos"]);
      },
      error: erro => {
        console.error("Não foi possivel alterar o projeto");
        alert("Erro ao aterar o projeto");
      }
    });
  }
}
