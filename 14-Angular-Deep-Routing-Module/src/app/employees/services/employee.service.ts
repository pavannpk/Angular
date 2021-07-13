import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {IEmployee} from "../models/IEmployee";
import {ICustomers} from "../../customers/models/ICustomers";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }


  public getAllEmployees():Observable<ICustomers[]>{
    let employeeURL = `https://gist.githubusercontent.com/bypavannpk/c3fc2b7b3558c0ac99e554f84436123c/raw/6ecd0b4ce807b9f4062436b2f84e012cf9c45af3/employees_26042021`;
    return this.httpClient.get<ICustomers[]>(employeeURL).pipe(
      retry(1),
      catchError(this.HandleErrors)
    )
  }


  public HandleErrors(errors:HttpErrorResponse){
    let ErrorMessage:string = "";
    if (errors.error instanceof ErrorEvent){
      ErrorMessage = `Message : ${errors.error.message}`;
    }
    else {
      ErrorMessage = `Status : ${errors.status} Message : ${errors.message}`;
    }
    return throwError(ErrorMessage)
  }
}
