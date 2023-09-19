import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const gettoken = localStorage.getItem('token');
    const token = `Bearer ${gettoken}`;
    const headers = new HttpHeaders ({
      Authorization: token,

    });

    const headersClone = request.clone({headers})
    return next.handle(headersClone)

  }
}
