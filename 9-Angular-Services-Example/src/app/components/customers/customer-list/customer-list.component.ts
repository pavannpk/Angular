import { Component, OnInit } from '@angular/core';
import "../../../../assets/images/IRONAMN.jpg"
import {CustomerService} from "../../../services/customer.service";
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customerList:any[]=[];
  //we remove this bcz of dupplication data
  /*public Customer:any[] = [
    {
      "Name": "Radha Krishna",
      "Picture": "../../../../assets/images/Radha Krishna oil paint.jpg",
      "Format": ".jpg",
      "Cost": 599,
      "Size": "18MB"
    },
    {
      "Name": "K L Rahul",
      "Picture": "../../../../assets/images/K L Rahul.jpg",
      "Format": ".jpg",
      "Cost": 459,
      "Size": "20MB"
    },
    {
      "Name": "IRONAMN",
      "Picture": "../../../../assets/images/IRONAMN.jpg",
      "Format": ".jpg",
      "Cost": 999,
      "Size": "15MB"
    },
    {
      "Name": "DHONI",
      "Picture": "../../../../assets/images/DHONI.jpg",
      "Format": ".jpg",
      "Cost": 899,
      "Size": "28MB"
    },
    {
      "Name": "House Design",
      "Picture": "../../../../assets/images/House Design.jpg",
      "Format": ".jpg",
      "Cost": 659,
      "Size": "30MB"
    }
  ];*/
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerList = this.customerService.getDataFromService();
  }

}
