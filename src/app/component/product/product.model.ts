export interface Product {
    proId?: number;
    proNome: string;
    proPrecoCusto: number;
    proPrecoVenda: number;
    quantidadeEstoque: number;           
    categoria: string;                   
    codigoBarras: string;                
    marca: string;                       
    unidadeMedida: string;               
    ativo: boolean;                      
    dataCadastro: string;                
}
