import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthAPI } from './auth.api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authApi: AuthAPI) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authApi.accessToken;
    if (accessToken !== ''){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          'X-API-Key': "my-secret"
        }
      });
    }
    return next.handle(request);
  }
}
