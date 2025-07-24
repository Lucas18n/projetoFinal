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
    forTipoEmpresa: '',
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

  // Método para criação do fornecedor
  createFornecedor(form: NgForm): void {
    // Verifica se o formulário está válido
  

    // Combina todos os dados do fornecedor, contato e endereço
    const payload: FornecedorPayload = {
      ...this.fornecedor,
      ...this.contato,
      ...this.endereco
    };

    // Chama o serviço para criar o fornecedor e navega para a lista
    this.fornecedorService.create(payload).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/fornecedores']);
    }, error => {
      console.error('Erro ao criar fornecedor:', error);
      console.log('Payload enviado:', payload);
      this.fornecedorService.showMessage('Erro ao criar fornecedor. Tente novamente.');
    });
  }

  // Método de cancelamento
  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
