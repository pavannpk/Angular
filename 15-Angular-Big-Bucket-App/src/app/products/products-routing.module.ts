import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {ListProductsComponent} from './components/list-products/list-products.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {UpdateProductComponent} from './components/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update/:id', component: UpdateProductComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
