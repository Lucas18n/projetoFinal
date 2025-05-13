import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    quantidadeEstoque: 0,
    categoria: '',
    codigoBarras: '',
    marca: '',
    unidadeMedida: '',
    ativo: true,
    dataCadastro: new Date().toISOString(),      // ou use new Date() se for do tipo Date
    dataAtualizacao: new Date().toISOString()
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  createProduct(): void {
    this.product.dataAtualizacao = new Date().toISOString(); // atualiza na hora de criar
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!!!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
