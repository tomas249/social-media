
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap, retryWhen } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';
import { NavbarService } from '../shared/navbar/navbar.service';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  
  isRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
  constructor(
    public token: TokenService,
    private modalService: ModalService,
    private navbarService: NavbarService
    ) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      // Exclude some api requests
      const login = '/api/auth/login';
      const register = '/api/auth/register';
      
      if (req.url.search(login) != -1 ||
          req.url.search(register) != -1
          ){
          return next.handle(req);
      }
      
      // Send request with AccessToken
      if (this.token.getAccessToken() && this.token.getRefreshToken()) {
        req = this.addToken(req, this.token.getAccessToken());
      } else {
        this.token.removeTokens();
      }
      
      return next.handle(req).pipe(
        catchError(err => {

          // if (!navigator.onLine) {
          //   return throwError({error: 'Could not get response. Check your connection.'});
          // }
          // else {
          //   return throwError(err);
          // }
          if (err instanceof HttpErrorResponse && err.status === 401) {
            return this.handle401Error(req, next);
          }
          else if (err instanceof HttpErrorResponse &&
            err.error.message === 'Invalid RefreshToken') {
            this.token.removeTokens();
            this.navbarService.go('/explore');
            const content = [
              { title: 'Session revoked' },
              { html:  `<p>Your sessions was revoked, login again please</p>` }
            ];
            const modal = {type: 'default', content};
            const location = {action: 'set', stack: ['Error']};
            this.modalService.open(modal, location);
            return throwError('Session revoked');
          }
          else {
            const content = [
              { title: 'Error was found' },
              { html: '<p>Got the following error:</p>' },
              { html:  `<p>${JSON.stringify(err.error.message)}</p>` }
            ];
            const modal = {type: 'default', content};
            const location = {action: 'set', stack: ['Unhandled Error']};
            this.modalService.open(modal, location);
            return throwError(err.error.message);
          }
        }));
      }
      
      addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
          setHeaders: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
      
      handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          this.refreshTokenSubject.next(null);
          
          return this.token.refreshToken().pipe(
            switchMap((res: any) => {
              this.isRefreshing = false;
              this.refreshTokenSubject.next(res.accessToken);
              return next.handle(this.addToken(request, res.accessToken));
            }));
            
        } else {
          return this.refreshTokenSubject.pipe(
            filter(res => res != null),
            take(1),
            switchMap(res => {
              return next.handle(this.addToken(request, res.accessToken));
            }));
        }
      }
          
}