import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}

  goToClientes() {
    const lastRoute = localStorage.getItem('clientes-last-route');
    if (lastRoute) {
      this.router.navigateByUrl(lastRoute);
    } else {
      this.router.navigate(['/clientes']);
    }
  }

  goToProdutos() {
    const lastRoute = localStorage.getItem('produtos-last-route');
    if (lastRoute) {
      this.router.navigateByUrl(lastRoute);
    } else {
      this.router.navigate(['/products']);
    }
  }

  // Pode fazer o mesmo para outros menus se quiser manter a última rota deles
}
