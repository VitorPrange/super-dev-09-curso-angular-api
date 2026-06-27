import { Component, inject, signal } from '@angular/core';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-financeiro-editar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-editar.html',
  styleUrl: './relatorio-financeiro-editar.scss',
})
export class RelatorioFinanceiroEditar {

  private readonly relatorioService = inject(RelatorioFinanceiroService);

  relatorio = signal<RelatorioFinanceiroModel>({
    id: crypto.randomUUID(),
    titulo: "",
    tipo: "",
    valorTotal: null,
    dataEmissao: "",
    responsavel: ""
  })

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    if(idParaEditar === null){
      alert("Id do relatorio não encontrado");
      this.router.navigate(["/relatorios"]);
      return;
    }

    this.relatorio.update(relatorio=> ({
      ...relatorio,
      id: idParaEditar
    }));
    this.consultarRelatorio();
  }

  consultarRelatorio(): void {
    this.relatorioService.obterPorId(this.relatorio().id).subscribe({
      next: relatorio => {
        this.relatorio.update(() => ({
          id: relatorio.id,
          titulo: relatorio.titulo,
          tipo: relatorio.tipo,
          valorTotal: relatorio.valorTotal,
          dataEmissao: relatorio.dataEmissao,
          responsavel: relatorio.responsavel
        }))
      },
      error: erro => {
        console.error("deu ruim" + erro)
        alert("Ocorreu um erro ao consultar o relatorio");
      }
    })
  }

  salvar(): void {


    this.relatorioService.editar(this.relatorio().id, this.relatorio()).subscribe({
      next: () => {
        alert("Relatorio editado com sucesso")
        this.router.navigate(["/relatorios"]);
      },
      error: erro => {
        console.error("Não foi possivel alterar o relatorio");
        alert("Erro ao aterar o relatorio");
      }
    });
  }
}
