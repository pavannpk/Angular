import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  // @ts-ignore
  public selectedProduct: Product;
  // @ts-ignore
  public productID: string;
  // @ts-ignore
  public errorMessage: string;
  // @ts-ignore
  public imageFileName: string;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.productID = param.get('id');
    });
    this.productService.getProduct(this.productID).subscribe((data) => {
      this.selectedProduct = data;
      this.imageFileName = data.image;
    }, (err) => {
      this.errorMessage = err;
    });
  }

  // tslint:disable-next-line:typedef
  public onChangeImage(event: any){
    if (event.target.files && event.target.files.length){
      const [file] = event.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        if (reader.result){
          this.imageFileName = String(reader.result);
          this.selectedProduct.image = String(reader.result);
        }
      });
    }
  }

  // submit updatedproduct
  // tslint:disable-next-line:typedef
  public updateProduct() {
    // @ts-ignore
    this.productService.updateProduct(this.productID, this.selectedProduct).subscribe((data) => {
      this.router.navigate(['/products/list-products']);
    }, (err) => {
      console.error(err);
    });
  }
}
