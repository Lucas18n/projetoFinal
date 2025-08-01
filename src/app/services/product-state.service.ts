import { Injectable } from '@angular/core';
import { Product } from '../component/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  public filtros: any = null;
  public paginaAtual: number = 1;
  public scrollPosition: number = 0;

  constructor() { }

  

}
