import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  // @ts-ignore
  public errormessage: string;
  // @ts-ignore
  public products: Product[] = [];
  // @ts-ignore
  public productID: string;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts(this.products).subscribe((data) => {
      this.products = data;
    },
      (err) => {
      this.errormessage = err;
    });
  }

  // delete product
  // tslint:disable-next-line:typedef variable-name
  public deleteProductItem(productID: any) {
    this.productID = productID;
    this.productService.deleteProduct(this.productID).subscribe((data) => {
      this.router.navigateByUrl('/products', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/products/list-products']).then(r => {});
      });
    });
  }
}
