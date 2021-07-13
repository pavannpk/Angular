import { Component, OnInit } from '@angular/core';
import {CustomersService} from "./services/customers.service";
import {ICustomers} from "./models/ICustomers";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customerList:ICustomers[] = [];
  public errorMsg:string = "";
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customerList = data;
    }, (err) => {
      this.errorMsg = err;
    })
  }

}
