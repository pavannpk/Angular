import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  // add product
  public addProductToServer(product: any): Observable<Product> {
    const dataURL = `http://127.0.0.1:5000/api/products/`;
    return this.httpClient.post<Product>(dataURL, product).pipe(
      retry(1)
    );
  }

  // get all products
  // tslint:disable-next-line:typedef
  // @ts-ignore
  public getAllProducts(products: any): Observable<Product[]> {
    const dataURL = `http://127.0.0.1:5000/api/products/`;
    return this.httpClient.get<Product[]>(dataURL).pipe(
      retry(1)
    );
  }

  // get a single product
  public getProduct(productID: any): Observable<Product> {
    const dataURL = `http://127.0.0.1:5000/api/products/${productID}`;
    return this.httpClient.get<Product>(dataURL).pipe(
      retry(1)
    );
  }

  // update a product
  public updateProduct(productID: any, product: any): Observable<Product> {
    const dataURL = `http://127.0.0.1:5000/api/products/${productID}`;
    return this.httpClient.put<Product>(dataURL, product).pipe(
      retry(1)
    );
  }

  // delete the product
  public deleteProduct(productID: any): Observable<Product> {
    const dataURL = `http://127.0.0.1:5000/api/products/${productID}`;
    return this.httpClient.delete<Product>(dataURL).pipe(
      retry(1)
    );
  }
}
