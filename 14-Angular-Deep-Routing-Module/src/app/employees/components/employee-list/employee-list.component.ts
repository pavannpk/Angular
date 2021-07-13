import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEmployee} from "../../models/IEmployee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employeeChildList:IEmployee[] = [];
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  //send to parent
  public selectedEmployee(InfoEmployeeList: any){
    this.sendData.emit(InfoEmployeeList);
  }
}
