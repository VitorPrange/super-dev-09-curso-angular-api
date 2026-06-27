import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetoListar } from './projetos/projeto-listar/projeto-listar';
import { ProjetoCadastrar } from './projetos/projeto-cadastrar/projeto-cadastrar';
import { ProjetoEditar } from './projetos/projeto-editar/projeto-editar';
import { RelatorioFinanceiroListar } from './relatorios-financeiros/relatorio-financeiro-listar/relatorio-financeiro-listar';
import { RelatorioFinanceiroCadastrar } from './relatorios-financeiros/relatorio-financeiro-cadastrar/relatorio-financeiro-cadastrar';
import { RelatorioFinanceiroEditar } from './relatorios-financeiros/relatorio-financeiro-editar/relatorio-financeiro-editar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },
    { path: "projetos", loadComponent: () => ProjetoListar },
    { path: "projetos/cadastrar", loadComponent: () => ProjetoCadastrar },
    { path: "projetos/editar/:id", loadComponent: () => ProjetoEditar },
    { path: "relatorios", loadComponent: () => RelatorioFinanceiroListar },
    { path: "relatorios/cadastrar", loadComponent: () => RelatorioFinanceiroCadastrar },
    { path: "relatorios/editar/:id", loadComponent: () => RelatorioFinanceiroEditar },
];
