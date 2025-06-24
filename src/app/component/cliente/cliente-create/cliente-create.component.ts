import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create', // Nome da tag HTML usada para representar este componente.
  templateUrl: './cliente-create.component.html', // Caminho do arquivo HTML com o formulário de criação.
  styleUrls: ['./cliente-create.component.css'] // Estilos específicos deste componente.
})

export class ClienteCreateComponent implements OnInit{
cliente: Cliente = {
  cliNome: '',
  cliCpf: '',
  dataNascimento: new Date().toISOString() ,
  cliformaPagamento: '',
  cliAtivo: true
}

 // Categorias fixas para seleção
 formaPagamento: string[] = ['Débito', 'Crédito', 'Boleto Bancário'];
constructor(private clienteService: ClienteService,
  private router: Router) { }

ngOnInit(): void {
    
}
createCliente(): void {
  const data = new Date(this.cliente.dataNascimento);
  this.cliente.dataNascimento = data.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:mm:ss"

  this.clienteService.create(this.cliente).subscribe(() => {
    this.clienteService.showMessage('Cliente Criado!!!');
    this.router.navigate(['/clientes']);
  }, error => {
    console.error('Erro ao criar cliente:', error);
    console.log('Payload enviado:', this.cliente);

  });
}

cancel(): void
{
  this.router.navigate(['/clientes'])
}
}
