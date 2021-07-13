import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../ICustomer";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerDetails:ICustomer[] = [];
  public errorMsgCD:string = "";
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customerDetails = data;
    }, (err) => {
      this.errorMsgCD = err;
    })
  }

}
