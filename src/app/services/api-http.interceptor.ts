
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

    isRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        public token: TokenService
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

        // Send request with Access-Token
        if (this.token.getAccessToken() && this.token.getRefreshToken()) {
            req = this.addToken(req, this.token.getAccessToken());
        } else {
            this.token.removeTokens();
        }

        return next.handle(req).pipe(
            catchError(err => {
                // return throwError('error :D');
            if (err instanceof HttpErrorResponse && err.status === 401) {
                return this.handle401Error(req, next);
            } else {
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