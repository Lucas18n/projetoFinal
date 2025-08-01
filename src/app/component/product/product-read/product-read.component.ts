import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductStateService } from 'src/app/services/product-state.service';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, AfterViewInit, OnDestroy {
  products!: Product[];
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'quantidadeEstoque', 'ativo', 'action'];

  filtros: any = null;
  paginaAtual: number = 1;

  private routerSubscription!: Subscription;

  constructor(
    private productService: ProductService,
    private productState: ProductStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recupera estado salvo
    this.filtros = this.productState.filtros;
    this.paginaAtual = this.productState.paginaAtual;

    this.loadProducts();

    // Salva estado ao iniciar navegação para outra rota
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.saveState();
      }
    });
  }

  ngAfterViewInit(): void {
    // Restaura scroll com timeout para garantir renderização
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, this.productState.scrollPosition || 0);
      }
    }, 0);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.saveState();
  }

  private saveState(): void {
    if (typeof window !== 'undefined') {
      this.productState.scrollPosition = window.scrollY || 0;
    }
    this.productState.filtros = this.filtros;
    this.productState.paginaAtual = this.paginaAtual;
  }

  loadProducts(): void {
    // Aqui pode aplicar filtros/paginação ao carregar
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  statusAtivo(value: any): string {
    return value === true || value === 'true' ? 'Ativo' : 'Inativo';
  }

  onFiltroChange(novoFiltro: any): void {
    this.filtros = novoFiltro;
    this.productState.filtros = novoFiltro;
    this.paginaAtual = 1;
    this.productState.paginaAtual = 1;
    this.loadProducts();
  }

  onPaginaChange(novaPagina: number): void {
    this.paginaAtual = novaPagina;
    this.productState.paginaAtual = novaPagina;
    this.loadProducts();
  }
}
