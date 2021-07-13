import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {ICustomer} from "../components/customers/ICustomer";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //for fetching the data
  constructor(private httpClient: HttpClient) { }

 /* get all customers
  which type of data come from the server is observable
  we have to tell which type of data will coming
  public getAllCustomers():Observable<any[]>
  thats why we have to create an interface*/

  public getAllCustomers():Observable<ICustomer[]>{
    let dataURL:string = `https://gist.githubusercontent.com/bypavannpk/4e1459a43a48ac915e201afb16d014d4/raw/ea7f21357d96a2d68fe8664bc2333a09e62041f0/digitalart.json`;
    //get will return something thats why we write any
    //pipe is do asynchronus calls to the url
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  //for error handler
  public handleErrors(getError:HttpErrorResponse){
    let errorMessage:string = "";
    if (getError.error instanceof ErrorEvent){
      //client side error
      errorMessage = getError.error.message;
    }
    else {
      //server error
      errorMessage = `Status: ${getError.status} Message: ${getError.message}`;
    }
    return throwError(errorMessage);
  }
}
