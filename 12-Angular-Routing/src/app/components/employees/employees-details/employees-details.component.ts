import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../../models/IEmployee";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  public employeeID:any;
  // @ts-ignore
  public selectedEmployee:IEmployee;
  public errmsg:string = "";

  //for id
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    //for getting the id
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.employeeID = Number(param.get('id'));
    });

    this.employeeService.getAllEmployees().subscribe((data) => {
      // @ts-ignore
      this.selectedEmployee = data.find((employee) => {
        return employee.id === this.employeeID;
      })
    }, (err) => {
      this.errmsg = err;
    })
  }

}
