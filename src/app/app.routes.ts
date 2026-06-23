import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetoListar } from './projetos/projeto-listar/projeto-listar';
import { ProjetoCadastrar } from './projetos/projeto-cadastrar/projeto-cadastrar';
import { ProjetoEditar } from './projetos/projeto-editar/projeto-editar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },
    { path: "projetos", loadComponent: () => ProjetoListar },
    { path: "projetos/cadastrar", loadComponent: () => ProjetoCadastrar },
    { path: "projetos/editar/:id", loadComponent: () => ProjetoEditar },
];
