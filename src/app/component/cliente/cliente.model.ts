/*Classe especifica que os atributos vem do back end*/

export interface Cliente
{
    cliId?: number
    cliNome: string
    cliCpf: string
    dataNascimento: string
    cliformaPagamento: string
    cliAtivo: boolean
}