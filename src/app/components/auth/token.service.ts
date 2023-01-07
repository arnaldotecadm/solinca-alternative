import { Injectable } from '@angular/core';

const KEY = 'authToken';
const USER_INFO = 'userInfo';

@Injectable({ providedIn: 'root' })
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  setUserInfo(data : any){
    const userInfo = {
      name: data.name,
      email: data.email
    }
    window.localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
  }

  getUserInfo(){
    return window.localStorage.getItem(USER_INFO);
  }


  removeToken() {
    window.localStorage.removeItem(KEY);
    window.localStorage.removeItem(USER_INFO);
  }
}
