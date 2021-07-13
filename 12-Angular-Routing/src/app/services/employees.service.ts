import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {IEmployee} from "../models/IEmployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  //fetch data
  public getAllEmployees():Observable<IEmployee[]>{
    let employeeUrl:string = `https://gist.githubusercontent.com/bypavannpk/c3fc2b7b3558c0ac99e554f84436123c/raw/6ecd0b4ce807b9f4062436b2f84e012cf9c45af3/employees_26042021`
    return this.httpClient.get<IEmployee[]>(employeeUrl).pipe(
      retry(1),
      catchError(this.HandleErrors)
    )
  }


  public HandleErrors(errors:HttpErrorResponse){
    let errorMessage:string = "";
    if (errors.error instanceof ErrorEvent){
      errorMessage = `Message : ${errors.error.message}`
    }
    else {
      errorMessage = `Status : ${errors.status} Message : ${errors.message}`
    }
    return throwError(errorMessage);
  }
}
