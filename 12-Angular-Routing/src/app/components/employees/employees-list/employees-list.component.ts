import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../../services/employees.service";
import {IEmployee} from "../../../models/IEmployee";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public screen:boolean = false;
  public employeesList:IEmployee[] = [];
  public errorMessage:string = "";
  constructor(private employeeService: EmployeesService,
              private ngxspinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.ngxspinner.show();
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employeesList = data;
      this.ngxspinner.hide();
    }, (err) => {
      this.errorMessage = err;
    })
  }

}
