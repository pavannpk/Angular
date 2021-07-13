import { Component, OnInit } from '@angular/core';
import {ICustomers} from "../../models/ICustomers";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerID:any;
  // @ts-ignore
  public selectedCustomer:ICustomers;
  public errorMSG:string = "";
  constructor(private activatedRoute: ActivatedRoute, private customerService:CustomersService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.customerID = Number(param.get('id'));
    });

    this.customerService.getCustomers().subscribe((data) => {
      // @ts-ignore
      this.selectedCustomer = data.find((customer) => {
        return customer.id === this.customerID;
      })
    }, (err) => {
      this.errorMSG = err;
    })
  }

}
