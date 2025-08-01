import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {

  // Declara um array de produtos, que vai ser preenchido depois
  formaPagamentos!: FormaPagamento[]

  // Define as colunas visíveis da tabela (em ordem)
  displayedColumns: string[] = ['fpgId', 'fpgDescricao', 'numeroMaximoParcelas','permiteParcelamento', 'ativo', 'action'];


  // Injeta o ProductService pra poder acessar os métodos dele
  constructor(private formaPagamentoService: FormaPagamentoService) { }

  statusAtivo(value: any): string {
    return value === true || value === 'true' ? 'Ativo' : 'Inativo';
  }

  permiteParcelamento(value: any): string {
    return value === true || value === 'true' ? 'Permitido' : 'Não Permitido';
  }

  // Método chamado quando o componente é iniciado
  ngOnInit(): void {
    // Chama o método 'read' do service, que busca os produtos
    this.formaPagamentoService.read().subscribe(formaPagamentos => {
      // Quando os produtos forem recebidos, salva eles na variável
      this.formaPagamentos = formaPagamentos

      // Mostra os dados no console (pra debug)
      console.log(formaPagamentos)
    })
  }

}