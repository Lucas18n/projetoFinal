export interface FormaPagamento {
  fpgId?: number;
  fpgDescricao: string;
  ativo: boolean;
  permiteParcelamento: boolean;
  numeroMaximoParcelas: number;
  taxaAdicional: number;
}
