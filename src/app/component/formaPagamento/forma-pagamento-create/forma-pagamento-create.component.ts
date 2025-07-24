import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  // Certifique-se de que 'NgForm' está importado aqui

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent {

  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
    ativo: true,
    permiteParcelamento: true,
    numeroMaximoParcelas: 1,
    taxaAdicional: 0.00
  };

  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFormaPagamento(form: NgForm): void {
    // Certifique-se de que a verificação de 'form.valid' esteja aqui
    if (form.valid) {
      // Se o formulário for válido, realiza o processo de criação
      this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
        this.formaPagamentoService.showMessage('Forma de pagamento Criada!!!');
        this.router.navigate(['/formaPagamento']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
