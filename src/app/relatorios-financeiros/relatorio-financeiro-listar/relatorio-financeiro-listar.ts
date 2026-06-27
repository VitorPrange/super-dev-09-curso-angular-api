import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-financeiro-listar',
  imports: [RouterLink, FormsModule],
  templateUrl: './relatorio-financeiro-listar.html',
  styleUrl: './relatorio-financeiro-listar.scss',
})
export class RelatorioFinanceiroListar {

  private readonly relatorioService = inject(RelatorioFinanceiroService);

  relatorios = signal<RelatorioFinanceiroModel[]>([]);

  ngOnInit() {
    this.carregarRelatorios();
  }

  carregarRelatorios(): void {

    this.relatorioService.listar().subscribe({
      // next é o caso de sucesso
      next: relatorios => {
        const tarefasOrdenadas = relatorios.sort((x, y) => x.titulo.localeCompare(y.titulo));
        this.relatorios.set(tarefasOrdenadas);
      },
      // error e o caso de erro
      error: erro => {
        console.error("Erro ao carregar os relatorios: " + erro);
        alert("Não foi possivel carregar os relatorios")
      }
    })


  }

  apagar(id: string): void {
    this.relatorioService.apagar(id).subscribe({
      next: () => {
        alert("Relatorio apagado com sucesso");
        this.carregarRelatorios();
      },
      error: erro => {
        console.error("Erro ao tentar apagar o relatorio" + erro);
        alert("Erro ao apagar relatorio");
      }
    })
  }
}

