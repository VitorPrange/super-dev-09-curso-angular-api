// src/app/models/tarefa.model.ts
export interface TarefaModel {
    id: string;
    descricao: string;
    prioridade: number | null;
    // Apesar do nome ser horasEstimadas, o valor será salvo em minutos
    horasEstimadas: number | null;
}
