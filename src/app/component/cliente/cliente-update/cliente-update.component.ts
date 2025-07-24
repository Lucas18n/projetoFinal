import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id!).subscribe((cliente: any) => {
      // Criar os objetos aninhados com os campos vindos do backend
      cliente.endereco = {
        endRua: cliente.endRua || '',
        endNumero: cliente.endNumero || '',
        endCidade: cliente.endCidade || '',
        endCep: cliente.endCep || '',
        endEstado: cliente.endEstado || '',
        endPais: cliente.endPais || ''
      };
      cliente.contato = {
        conCelular: cliente.conCelular || '',
        conTelefoneComercial: cliente.conTelefoneComercial || '',
        conEmail: cliente.conEmail || ''
      };
      this.cliente = cliente;
    });
  }
  

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente atualizado com sucesso!');
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
