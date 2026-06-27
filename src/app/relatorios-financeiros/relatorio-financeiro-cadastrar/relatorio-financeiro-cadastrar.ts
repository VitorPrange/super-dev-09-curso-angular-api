import { Component, inject, signal } from '@angular/core';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-financeiro-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-cadastrar.html',
  styleUrl: './relatorio-financeiro-cadastrar.scss',
})
export class RelatorioFinanceiroCadastrar {

  private readonly relatorioService = inject(RelatorioFinanceiroService);
  private readonly router = inject(Router);

  relatorio = signal<RelatorioFinanceiroModel>({
    id: crypto.randomUUID(),
    titulo: "",
    tipo: "",
    valorTotal: null,
    dataEmissao: "",
    responsavel: ""
  })

  salvar(): void {
    this.relatorioService.cadastrar(this.relatorio()).subscribe({
      next: () =>{
        alert("Relatorio cadastrado com sucesso");
        this.router.navigate(["/relatorios"]);
      },
      error: erro =>{
        console.error("Erro ao cadastrar relatorio: " + erro);
        alert("Ocorreu um erro ao cadastrar o relatorio")
      }
    })
  }
}