import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent {

  formaPagamento!: FormaPagamento;

  constructor(private formaPagamentoservice: FormaPagamentoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formaPagamentoservice.readById(id!).subscribe((formaPagamento: FormaPagamento) =>{
      this.formaPagamento = formaPagamento
    })
  }

  updateFormaPagamento(): void {
    this.formaPagamentoservice.update(this.formaPagamento).subscribe(() => {
      this.formaPagamentoservice.showMessage('Forma De Pagamento atualizada com sucesso!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }
}
