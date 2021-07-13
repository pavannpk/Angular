import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedRequest = request.clone({
      setHeaders : {
      /* 'Autherization' : `Bearer ${this.userService.getToken()}`*/
        Autherization : `Bearer ${this.userService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
