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
    categoria: '',  // será preenchido com uma das opções fixas abaixo
    codigoBarras: '',
    marca: '',
    unidadeMedida: '',
    ativo: true,
    dataCadastro: new Date().toISOString()    
  }

  // Categorias fixas para seleção
  categorias: string[] = ['Frio', 'Salgado', 'Doce', 'Bebida'];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.product.dataCadastro = new Date().toISOString();
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!!!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
