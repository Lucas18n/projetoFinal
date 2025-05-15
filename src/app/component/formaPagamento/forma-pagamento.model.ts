export interface FormaPagamento {
    fpgId?: number;
    fpgDescricao: string;
    fpgStatus: string;
  
    ativo: string; // "true" ou "false" como string
    permiteParcelamento: string;
    numeroMaximoParcelas: number;
    taxaAdicional: number; // em porcentagem, ex: 1.99 para 1,99%
  }
  