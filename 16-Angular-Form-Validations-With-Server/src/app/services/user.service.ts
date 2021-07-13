import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserEnroll} from '../model/userEnroll';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // enrollment
  // tslint:disable-next-line:typedef
  // @ts-ignore
  public enroll(user): Observable<any>{
    const dataURL  = 'http://127.0.0.1:5000/user/enroll';
    return this.httpClient.post<any>(dataURL, user).pipe(
      retry(1)
    );
  }

  // register
  // tslint:disable-next-line:typedef
  // @ts-ignore
  public register(user): Observable<any>{
    const dataURL  = 'http://127.0.0.1:5000/user/register';
    return this.httpClient.post<any>(dataURL, user).pipe(
      retry(1)
    );
  }
}
