import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(username: string, password: string) {
    return this.http
      .post(API + 'session/login', {
        email: username,
        password,
      })
      .pipe(
        tap((res: any) => {
          if (res.ok) {
            this.tokenService.setToken(res.leaseToken);
            this.tokenService.setUserInfo(res.user);
          }
        })
      );
  }
}
