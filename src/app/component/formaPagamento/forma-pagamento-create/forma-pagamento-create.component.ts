import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    if (form.valid) {
      this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
        this.formaPagamentoService.showMessage('Forma de pagamento Criada!!!');
        this.router.navigate(['/formaPagamento']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }

  limparCampos(form: NgForm): void {
    form.resetForm(); // limpa estados e validações do formulário
    this.formaPagamento = {
      fpgDescricao: '',
      ativo: true,
      permiteParcelamento: true,
      numeroMaximoParcelas: 1,
      taxaAdicional: 0.00
    };
  }
}
