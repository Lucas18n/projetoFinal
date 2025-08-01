import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FornecedorPayload } from '../fornecedor.model'; // <- use o nome correto do arquivo/interface

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FornecedorDeleteComponent implements OnInit {
  fornecedor!: FornecedorPayload;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fornecedorService.readById(id!).subscribe((fornecedor: any) => {
      fornecedor.conCelular = fornecedor.conCelular || '';
      fornecedor.conTelefoneComercial = fornecedor.conTelefoneComercial || '';
      fornecedor.conEmail = fornecedor.conEmail || '';
      
      fornecedor.endRua = fornecedor.endRua || '';
      fornecedor.endNumero = fornecedor.endNumero || '';
      fornecedor.endCidade = fornecedor.endCidade || '';
      fornecedor.endCep = fornecedor.endCep || '';
      fornecedor.endEstado = fornecedor.endEstado || '';
      fornecedor.endPais = fornecedor.endPais || '';

      this.fornecedor = fornecedor;
    });
  }

  deleteFornecedor(): void {
    if (window.confirm('Tem certeza que deseja excluir este fornecedor?')) {
      if (this.fornecedor.forId) {
        this.fornecedorService.delete(this.fornecedor.forId).subscribe(() => {
          this.fornecedorService.showMessage('Fornecedor excluído com sucesso!');
          this.router.navigate(['/fornecedores']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
