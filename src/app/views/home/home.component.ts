import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartOptions } from 'chart.js';
import { ProductService, CategoriaProdutoDTO } from 'src/app/component/product/product.service';
import { Product } from 'src/app/component/product/product.model';

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

  // Corrigido: declarar como string literal 'pie'
  public pieChartType: 'pie' = 'pie';

  // Gráfico de barras apenas com gastos (saída)
  public barChartData: ChartData<'bar'> = {
    labels: ['Gastos Totais'],
    datasets: [
      { label: 'Saída (Custo)', data: [0], backgroundColor: '#f44336' }
    ]
  };

  // Corrigido: declarar como string literal 'bar'
  public barChartType: 'bar' = 'bar';

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            const valNum = Number(value) || 0;
            return `R$ ${valNum.toFixed(2).replace('.', ',')}`;
          }
        }
      },
      legend: {
        labels: {
          font: {
            size: 14
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            const valNum = Number(value) || 0;
            return `R$ ${valNum.toFixed(2).replace('.', ',')}`;
          }
        }
      }
    }
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getQuantidadePorCategoria().subscribe({
      next: (data: CategoriaProdutoDTO[]) => {
        console.log('Dados recebidos da API:', data);

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

    // Cálculo somente de saída (gastos)
    this.productService.read().subscribe({
      next: (produtos: Product[]) => {
        let totalSaida = 0;

        produtos.forEach(produto => {
          totalSaida += produto.proPrecoCusto * produto.quantidadeEstoque;
        });

        this.barChartData = {
          labels: ['Gastos Totais'],
          datasets: [
            { label: 'Saída (Custo)', data: [totalSaida], backgroundColor: '#f44336' }
          ]
        };
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
      }
    });
  }
}
