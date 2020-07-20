import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  accountSubject = new BehaviorSubject<any>('');
  account = '';

  constructor(
    private api: ApiService
  ) { }

  subscribeAcc() {
    const acc = this.getUserData();
    this.account = acc;
    this.accountSubject.next(this.account);
    return this.accountSubject.asObservable();
  }

  setTokens(refreshToken: string, accessToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessToken', accessToken);

    const userData = atob(accessToken.split('.')[1]);
    const userParsed = JSON.parse(userData);
    this.account = userParsed;
    this.accountSubject.next(userParsed);
    localStorage.setItem('userData', userData);
  }

  removeTokens() {
    this.account = '';
    this.accountSubject.next('');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
  }

  getUserData() {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('userData'));
    } else {
      return null;
    }
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  isLogged() {
    return !!this.getRefreshToken();
  }

  getUserId() {
    if (this.isLogged()) {
      return this.getUserData().id;
    } else {
      return null;
    }
  }

  isPublisher() {
    const userData = this.getUserData();
    if (userData) {
      return (userData.role == 'publisher' || userData.role == 'admin');
    } else {
      return false;
    }
    //return false;
  }

  isAdmin() {
    const userData = this.getUserData();
    if (userData) {
      return userData.role == 'admin';
    } else {
      return false;
    }
    //return false;
  }

  refreshToken() {
    const payload = {
      refreshToken: this.getRefreshToken()
    }
    return this.api.post('tokens/refresh', payload).pipe(
      map(res => res.message),
      tap(res => {
        localStorage.setItem('accessToken', res.accessToken);
      })
    );
  } 

}
