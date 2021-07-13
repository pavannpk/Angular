import { Component, OnInit } from '@angular/core';
import {ProductService} from './services/product.service';
import {Product} from "./models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // @ts-ignore
  public errorMessage: string;
  // @ts-ignore
  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts(this.products).subscribe((data) => {
      this.products = data;
    }, (err) => {
      this.errorMessage = err;
    });
  }

}
