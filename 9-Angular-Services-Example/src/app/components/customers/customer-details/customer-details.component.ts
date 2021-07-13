import { Component, OnInit } from '@angular/core';
import "../../../../assets/images/K L Rahul.jpg"
import {CustomerService} from "../../../services/customer.service";
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerDetails:any[]=[];
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

  //here we inject
  constructor(private customerService:CustomerService) { }

  //here we get data once component will load
  ngOnInit(): void {
    this.customerDetails = this.customerService.getDataFromService();
  }

}
