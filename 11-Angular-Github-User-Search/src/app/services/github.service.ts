import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Client_ID, Client_SECRET} from "../credentials/GithubCredentials";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  //for github profile
  public getProfile(searchQuery:any):Observable<any[]>{
    let profileUrl = `https://api.github.com/users/${searchQuery}?clientID=${Client_ID}&clientSecret=${Client_SECRET}`;
    return this.httpClient.get<any[]>(profileUrl).pipe(
      retry(1),
      catchError(this.HandleErrors)
    );
  }


  //for github repos
  public getRepos(searchQuery:any):Observable<any[]>{
    let reposUrl = `https://api.github.com/users/${searchQuery}/repos?clientID=${Client_ID}&clientSecret=${Client_SECRET}`;
    return this.httpClient.get<any[]>(reposUrl).pipe(
      retry(1),
      catchError(this.HandleErrors)
    );
  }



  //handle errors
  public HandleErrors(err: HttpErrorResponse){
    let errorMsg:string = "";
    if (err.error instanceof ErrorEvent){
      //client side error
      errorMsg = `Message : ${err.error.message}`
    }
    else {
      errorMsg = `Status : ${err.status} Message : ${err.message}`
    }
    return throwError(errorMsg);
  }
}
