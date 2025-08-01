import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent {
  cliente!: Cliente[];
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'cliProfissao', 'cliAtivo', 'action'];

  constructor(private clienteService: ClienteService) { }

  statusAtivo(value: any): string {
    return value === true || value === 'true' ? 'Ativo' : 'Inativo';
  }

  ngOnInit(): void {
    this.clienteService.read().subscribe(cliente => {
      this.cliente = cliente;
      console.log(cliente);
    });
  }
}
