import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent 
},
///////////////////////////products
{
  path: "products",
  component: ProductCrudComponent
},
/*-----*/
{
  path: "products/create",
  component: ProductCreateComponent
},
/*-----*/
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
/*-----*/
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
///////////////////////////products FIM

///////////////////////////formaPagamento
{
  path: "formaPagamento",
  component: FormaPagamentoCrudComponent
},
{
  path: "formaPagamento/create",
  component: FormaPagamentoCreateComponent
},
{
  path: "formaPagamento/delete/:id",
  component: FormaPagamentoDeleteComponent
},
{
  path: "formaPagamento/update/:id",
  component: FormaPagamentoUpdateComponent
},
///////////////////////////formaPagamento FIM

///////////////////////////fornecedores
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
{
  path: "fornecedor/create",
  component: FornecedorCreateComponent
},
///////////////////////////fornecedores FIM

///////////////////////////Cliente
{
  path: "clientes",
  component: ClienteCrudComponent
},
{
  path: "cliente/create",
  component: ClienteCreateComponent
},

{
  path: "cliente/update/:id",
  component: ClienteUpdateComponent
},

///////////////////////////Cliente FIM
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }