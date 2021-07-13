import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // @ts-ignore
  public imageFileName: any;
  public addProduct: Product = {
    _id: '',
    name : '',
    image : '',
    price : 0.0,
    qty : 0.0,
    info : ''
  };
  // @ts-ignore
  public result: HTMLInputElement;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public async onChangeImage(event: any){
      if (event.target.files && event.target.files.length){
      const [file] = event.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      this.imageFileName = file;
      reader.addEventListener('load', () => {
        return reader.result ? this.addProduct.image = String(reader.result) : '';
      });
    }
  }

  // tslint:disable-next-line:typedef
  public submitProduct(){
  // @ts-ignore
    this.productService.addProductToServer(this.addProduct).subscribe((data) => {
      this.router.navigate(['/products/list-products']);
    }, (err) => {
      console.error(err);
    });
  }
}
