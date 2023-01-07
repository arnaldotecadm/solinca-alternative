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
import { TokenService } from '../components/auth/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

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
    if (this.tokenService.hasToken()) {
      const token = '' + this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          token: token,
        },
      });
    }

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
