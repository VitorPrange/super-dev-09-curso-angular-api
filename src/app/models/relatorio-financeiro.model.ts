export interface RelatorioFinanceiroModel {
    id: string,
    titulo: string,
    tipo: string,
    valorTotal: number | null,
    dataEmissao: string,
    responsavel: string
}
