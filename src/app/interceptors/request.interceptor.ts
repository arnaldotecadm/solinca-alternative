import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    req = req.clone({
      setHeaders: {
        token: '053956b2b0cb4553910bea9ba780fea9',
      },
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.logout();
        } else if (error.status === 403) {
          this.logout();
        }

        throw new HttpErrorResponse(error);
      })
    );
  }

  logout() {
    setTimeout(() => {}, 2000);
  }
}
