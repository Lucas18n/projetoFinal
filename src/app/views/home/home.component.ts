import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ProductService, CategoriaProdutoDTO } from 'src/app/component/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  };

  public pieChartType: ChartType = 'pie';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getQuantidadePorCategoria().subscribe({
      next: (data: CategoriaProdutoDTO[]) => {
        console.log('Dados recebidos da API:', data); // <-- Aqui o log dos dados

        this.pieChartData = {
          labels: data.map(item => item.categoria),
          datasets: [
            {
              data: data.map(item => item.quantidade)
            }
          ]
        };
      },
      error: (err) => {
        console.error('Erro ao buscar quantidade por categoria:', err);
      }
    });
  }
}
