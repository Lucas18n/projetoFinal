import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';
import { Contato, Endereco, Fornecedor, FornecedorPayload } from '../fornecedor.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: '',
    forResponsavel: '',
    ForTipoEmpresa: '',
    forAtivo: true
  };

  contato: Contato = {
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  endereco: Endereco = {
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: '',
    endPais: ''
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFornecedor(form: NgForm): void {
    if (form.invalid) {
      this.fornecedorService.showMessage('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const payload: FornecedorPayload = {
      ...this.fornecedor,
      ...this.contato,
      ...this.endereco
    };

    this.fornecedorService.create(payload).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/fornecedores']);
    }, error => {
      console.error('Erro ao criar fornecedor:', error);
      console.log('Payload enviado:', payload);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
