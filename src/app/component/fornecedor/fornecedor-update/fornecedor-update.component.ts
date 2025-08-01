import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: any = {
    endereco: {},
    contato: {}
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fornecedorService.readById(id!).subscribe((fornecedor: any) => {
      this.fornecedor = {
        ...fornecedor,
        endereco: {
          endRua: fornecedor.endRua || '',
          endNumero: fornecedor.endNumero || '',
          endCidade: fornecedor.endCidade || '',
          endCep: fornecedor.endCep || '',
          endEstado: fornecedor.endEstado || '',
          endPais: fornecedor.endPais || ''
        },
        contato: {
          conCelular: fornecedor.conCelular || '',
          conTelefoneComercial: fornecedor.conTelefoneComercial || '',
          conEmail: fornecedor.conEmail || ''
        }
      };
    });
  }

  updateFornecedor(): void {
    const payload = {
      ...this.fornecedor,
      ...this.fornecedor.endereco,
      ...this.fornecedor.contato
    };

    this.fornecedorService.update(payload).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
