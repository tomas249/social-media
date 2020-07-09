import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private api: ApiService
  ) { }

  setTokens(refreshToken: string, accessToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessToken', accessToken);

    const userData = atob(accessToken.split('.')[1]);
    localStorage.setItem('userData', userData);
  }

  removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
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
