import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {IEmployee} from "./models/IEmployee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employeeInfo:IEmployee[] = [];
  public errMsg:string = "";
  // @ts-ignore
  public selectedEmployeeInfo: IEmployee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      // @ts-ignore
      this.employeeInfo = data;
    }, (err) => {
      this.errMsg = err;
    })
  }

}
