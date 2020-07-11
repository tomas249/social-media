import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService,
    private token: TokenService,
    private router: Router
  ) { }

  register(payload) {
    return this.api.post('/auth/register', payload);
  }

  login(payload) {
    return this.api.post('/auth/login', payload)
    .pipe(
      tap(res => {
        const refreshTKN = 'abc';
        const accessTKN = res.token
        this.token.setTokens(refreshTKN, accessTKN);
      })
    );
  }

  logout() {
    this.token.removeTokens();
    this.router.navigate(['/explore']);
  }

}
