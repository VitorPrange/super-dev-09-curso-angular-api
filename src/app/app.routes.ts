import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar }
];
