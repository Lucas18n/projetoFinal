export interface FormaPagamento {
    fpgId?: number;
    fpgDescricao: string;
    fpgStatus: string;
  
    ativo: boolean; // "true" ou "false" como string
    permiteParcelamento: boolean;
    numeroMaximoParcelas: number;
    taxaAdicional: number; // em porcentagem, ex: 1.99 para 1,99%
  }
  