import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {ICustomer} from "../ICustomer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customerListData:ICustomer[] = [];
  public errorMsgCL:string = "";
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    //subscribe have two functions internally
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customerListData = data;
    }, (err) => {
      this.errorMsgCL = err;
    });
  }

}
