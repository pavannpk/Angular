import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../models/IEmployee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  // @ts-ignore
  @Input() employeeSelectedCard: IEmployee;
  constructor() { }

  ngOnInit(): void {
  }

}
