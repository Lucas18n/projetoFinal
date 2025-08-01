import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private router: Router,
    private productState: ProductStateService
  ) {}

  ngOnInit(): void {
    // Aqui você pode recuperar filtro, página, etc do serviço se quiser
  }

  ngAfterViewInit(): void {
    // Restaura a posição do scroll quando o componente for exibido
    setTimeout(() => {
      window.scrollTo(0, this.productState.scrollPosition);
    }, 0);
  }

  ngOnDestroy(): void {
    // Salva a posição do scroll antes de sair da tela
    this.productState.scrollPosition = window.scrollY;
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
