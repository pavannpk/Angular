import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {Observable, throwError} from "rxjs";
import {IStocks} from "../models/IStocks";

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpCLient: HttpClient) { }

  public getAllStocks():Observable<IStocks[]>{
    let stocksurl:string = `https://gist.githubusercontent.com/bypavannpk/8d2873559ac5429869b2c2e189bcdd8d/raw/1e6cfa9f06e10e2bd12d4fea4afa36195e201ef5/stocks_26042021`;
    return this.httpCLient.get<IStocks[]>(stocksurl).pipe(
      retry(1),
      catchError(this.HandleErrors)
    )
  }


  public HandleErrors(errors:HttpErrorResponse){
    let errorMsg:string = "";
    if (errors.error instanceof ErrorEvent){
      errorMsg = `Message : ${errors.error.message}`
    }
    else {
      errorMsg = `Status : ${errors.status} Message : ${errors.message}`
    }
    return throwError(errorMsg);
  }
}
