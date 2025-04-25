/*Classe especifica que os atributos vem do back end*/

export interface Cliente
{
    id?: number
    nome: string
    cpfCnpj: string
    dataNascimento: string
    formaPagamento: string
    status: string
}