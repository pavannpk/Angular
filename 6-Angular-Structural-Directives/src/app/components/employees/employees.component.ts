import { Component, OnInit } from '@angular/core';
import {Employee} from "./employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public person:Employee[] = [
    {
      id:1,
      name:'john',
      designation:'job',
      age:22
    },
    {
      id:2,
      name:'john k',
      designation:'IT',
      age:23
    },
    {
      id:3,
      name:'john KK',
      designation:'Team Lead',
      age:24
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
