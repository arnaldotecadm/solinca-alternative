import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.hasToken();
    this.decodeAndNotify("");
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  public decodeAndNotify(userInfo: any) {
    const token = this.tokenService.getToken();
    if (token) {
      this.userSubject.next(userInfo);
    } else {
      this.logout();
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.router.navigate(['home']);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }
}
