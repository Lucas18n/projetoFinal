import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent 
{
  products!: Product[]
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda','quantidadeEstoque','ativo', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)  
    })
  }
}
