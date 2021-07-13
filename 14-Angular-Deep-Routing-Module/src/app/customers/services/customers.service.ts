import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {ICustomers} from "../models/ICustomers";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  public getCustomers():Observable<ICustomers[]>{
    let customerUrl = `https://gist.githubusercontent.com/bypavannpk/ca91f76db8e38ad28f64348a971bf532/raw/c39f8f46319990bb8fffeb620299f7c5616f7d24/customers_27042021`;
    return this.httpClient.get<ICustomers[]>(customerUrl).pipe(
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
