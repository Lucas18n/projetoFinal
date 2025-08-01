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
  
  export interface Cliente {
    cliId?: number;
    cliNome: string;
    cliCpf: string;
    cliProfissao: string;
    cliEstCivil: string;
    cliAtivo: boolean;
    dataNascimento: string;
    endereco: Endereco;
    contato: Contato;

    
  }

  export interface ClientePayload {
    cliNome: string;
    cliCpf: string;
    cliProfissao: string;
    cliEstCivil: string;
    cliAtivo: boolean;
    dataNascimento: string;
  
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

  
  
  