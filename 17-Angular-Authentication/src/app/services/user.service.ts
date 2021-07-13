import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../model/IUser';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserResult} from '../model/UserResult';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  // login
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public login(user: IUser): Observable<UserResult>{
    const dataURL = `http://127.0.0.1:5000/users/login`;
    return this.httpClient.post<UserResult>(dataURL, user).pipe(
      retry(1)
    );
  }


  // register
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public register(user: IUser): Observable<UserResult>{
    const dataURL = `http://127.0.0.1:5000/users/register`;
    return this.httpClient.post<UserResult>(dataURL, user).pipe(
      retry(1)
    );
  }



  // get user info
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public getUserInfo(): Observable<any>{
    const dataURL = `http://127.0.0.1:5000/users`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1)
    );
  }


  // get user details
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public getUserDetails(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem('user'));
  }


  // is admin
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public isAdmin(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem('user')).isAdmin;
  }

  // isLoggedIn
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public isLoggedIn(){
    /*if (localStorage.getItem('token')){
      return true;
    }
    else {
      return false;
    }*/
    return !!localStorage.getItem('token');
  }


  // logout
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  // get token
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public getToken(){
    return localStorage.getItem('token');
  }
}
