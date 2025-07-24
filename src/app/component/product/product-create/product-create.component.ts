import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { NgForm } from '@angular/forms';

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

  unidadesMedida: string[] = ['Kg', 'g', 'L', 'ml', 'Unidade'];


  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Alterando para usar o parâmetro 'form' e validar antes de criar o produto
  createProduct(form: NgForm): void {
    if (form.valid) {  // Verifica se o formulário é válido
      this.product.dataCadastro = new Date().toISOString();
      
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Produto Criado!!!');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.showMessage('Preencha todos os campos obrigatórios!');  // Sem o segundo parâmetro
    }
  }
  

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
