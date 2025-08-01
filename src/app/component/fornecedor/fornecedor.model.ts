export interface Fornecedor
{
  forId?: number
    forNomeFantasia: string
    forCnpj: string
    forRazaoSocial: string
    forResponsavel: string
    forTipoEmpresa: string
    forAtivo: boolean
}

export interface Contato {
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;
  }
  
  export interface Endereco {
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
    endPais: string;
  }

  export interface FornecedorPayload {
    forId?: number;
    forNomeFantasia: string;
    forCnpj: string;
    forRazaoSocial: string;
    forResponsavel: string;
    forTipoEmpresa: string;
    forAtivo: boolean;
  
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;
  
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
    endPais: string;
  }