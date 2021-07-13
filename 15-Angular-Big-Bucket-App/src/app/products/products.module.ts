import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, UpdateProductComponent, ListProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
