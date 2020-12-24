import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _user = new BehaviorSubject<any>(false);

  user$ = this._user.asObservable();

  constructor(
    private api: ApiService,
  ) {
    // Check tokens existence
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');

    if (refreshToken && accessToken) {
      const storedUserData = this.getUserData();
      this._user.next(storedUserData);
    }
    else if (!refreshToken || !accessToken) {
      this.removeTokens();
    }
  }


  setTokens(refreshToken: string, accessToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessToken', accessToken);

    const userJWT = atob(accessToken.split('.')[1]);
    const userParsed = JSON.stringify(JSON.parse(userJWT));

    localStorage.setItem('userData', userParsed);
  
    this._user.next(JSON.parse(userJWT));
  }

  removeTokens() {
    this._user.next(false);
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
  }

  getUserData() {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('userData'));
    } else {
      return false;
    }
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  isLogged() {
    return !!this.getAccessToken();
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
  }

  isAdmin() {
    const userData = this.getUserData();
    if (userData) {
      return userData.role == 'admin';
    } else {
      return false;
    }
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

  updateData(newData) {
    const currentUser = this.getUserData();
    const newUser = Object.assign(currentUser, newData);
    localStorage.setItem('userData', JSON.stringify(newUser));
    this._user.next(newUser);
  }

}