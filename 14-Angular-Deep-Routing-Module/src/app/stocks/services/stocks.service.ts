import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {IStocks} from "../models/IStocks";
import {ICustomers} from "../../customers/models/ICustomers";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  //get all stocks
  public getAllStocks():Observable<IStocks[]>{
    let stockURL:string = `https://gist.githubusercontent.com/bypavannpk/8d2873559ac5429869b2c2e189bcdd8d/raw/1e6cfa9f06e10e2bd12d4fea4afa36195e201ef5/stocks_26042021`;
    return  this.httpClient.get<IStocks[]>(stockURL).pipe(
      retry(1),
      catchError(this.HandleErrors)
    )
  }


  public HandleErrors(errors: HttpErrorResponse){
    let errorMSG:string = "";
    if (errors.error instanceof ErrorEvent){
      errorMSG = `Message : ${errors.error.message}`;
    }
    else {
      errorMSG = `Status : ${errors.status} Message : ${errors.message}`
    }
    return throwError(errorMSG);
  }
}
