import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClienteDeleteComponent implements OnInit {
  cliente!: Cliente;

  cliEstCivil: string[] = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

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

  deleteCliente(): void {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      if (this.cliente.cliId) {
        this.clienteService.delete(this.cliente.cliId).subscribe(() => {
          this.clienteService.showMessage('Cliente excluído com sucesso!');
          this.router.navigate(['/clientes']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
