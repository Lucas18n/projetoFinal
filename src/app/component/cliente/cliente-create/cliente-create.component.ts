import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente, ClientePayload } from '../cliente.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'], // ou .scss se estiver usando SCSS
  encapsulation: ViewEncapsulation.None // ⬅️ adicionado aqui
})

export class ClienteCreateComponent implements OnInit{
  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    dataNascimento: new Date().toISOString(),
    cliEstCivil: '',
    cliProfissao: '',
    cliAtivo: true,
    contato: {
      conCelular: '',
      conTelefoneComercial: '',
      conEmail: ''
    },
    endereco: {
      endRua: '',
      endNumero: '',
      endCidade: '',
      endCep: '',
      endEstado: '',
      endPais: ''
    }
  };
  

 // Categorias fixas para seleção
 cliEstCivil: string[] = ['Solteiro', 'Casado', 'Divorciado', 'Viúvo'];

constructor(private clienteService: ClienteService,
  private router: Router) { }

ngOnInit(): void {
    
}
createCliente(form: NgForm): void {
  if (form.invalid) {
    this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  const data = new Date(this.cliente.dataNascimento);
  this.cliente.dataNascimento = data.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:mm:ss"

  const payload = {
    cliNome: this.cliente.cliNome,
    cliCpf: this.cliente.cliCpf,
    cliProfissao: this.cliente.cliProfissao,
    cliEstCivil: this.cliente.cliEstCivil,
    cliAtivo: this.cliente.cliAtivo,
    dataNascimento: this.cliente.dataNascimento,

    ...this.cliente.contato,
    ...this.cliente.endereco
  };

  this.clienteService.create(payload).subscribe(() => {
    this.clienteService.showMessage('Cliente Criado!!!');
    this.router.navigate(['/clientes']);
  }, error => {
    console.error('Erro ao criar cliente:', error);
    console.log('Payload enviado:', payload);
  });
}



cancel(): void
{
  this.router.navigate(['/clientes'])
}
}
