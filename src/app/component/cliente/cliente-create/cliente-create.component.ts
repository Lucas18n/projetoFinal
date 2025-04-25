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
  nome: '',
  cpfCnpj: '',
  dataNascimento: '',
  formaPagamento: '',
  status: ''
}
constructor(private clienteService: ClienteService,
  private router: Router) { }

ngOnInit(): void {
    
}
createCliente(): void
{
  this.clienteService.create(this.cliente).subscribe(() => {
    this.clienteService.showMessage('Cliente Criado!!!')
    this.router.navigate(['/cliente'])
  })
}
cancel(): void
{
  this.router.navigate(['/cliente'])
}
}
