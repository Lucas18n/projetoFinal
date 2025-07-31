import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor!: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fornecedorService.readById(id!).subscribe((fornecedor: any) => {
      // 🔧 Criar manualmente os objetos aninhados com base nos dados recebidos
      fornecedor.endereco = {
        endRua: fornecedor.endRua || '',
        endNumero: fornecedor.endNumero || '',
        endCidade: fornecedor.endCidade || '',
        endCep: fornecedor.endCep || '',
        endEstado: fornecedor.endEstado || '',
        endPais: fornecedor.endPais || ''
      };
      fornecedor.contato = {
        conCelular: fornecedor.conCelular || '',
        conTelefoneComercial: fornecedor.conTelefoneComercial || '',
        conEmail: fornecedor.conEmail || ''
      };
      this.fornecedor = fornecedor;
    });
  }

  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
