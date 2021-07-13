import { Component, OnInit } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public ProductItem:Product = {
    SNO: 1,
    Name: "Samsung J6",
    Quantity: 2,
    Price: 14000
  };
  public Inc():void{
    this.ProductItem.Quantity++;
  }
  public Dec():void{
    this.ProductItem.Quantity--;
    if (this.ProductItem.Quantity - 1 > 0){
      this.ProductItem.Quantity - 1;
    }
    else {
      this.ProductItem.Quantity = 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
