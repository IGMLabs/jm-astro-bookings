import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any): Observable<any> {
    const httpError = error as HttpErrorResponse;
    if (httpError){
      if(httpError.status === 401){
        console.log('👮‍♀️ security error');
        this.router.navigate(['/','auth','login']);
      } else{
        if(httpError.status === 0 || httpError.status === 500){
          console.log('🤖 server error');
        }else {
          console.log('🧑 user error')
        }
      }
    }else {
      console.log('💣 application error');
    }
    return throwError(() => error);
  }
}
