"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiHttpInterceptor = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ApiHttpInterceptor = /** @class */ (function () {
    function ApiHttpInterceptor(token) {
        this.token = token;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs_1.BehaviorSubject(null);
    }
    ApiHttpInterceptor.prototype.intercept = function (req, next) {
        // Exclude some api requests
        var login = '/api/auth/login';
        var register = '/api/auth/register';
        // if (req.url.search(login) != -1 ||
        //     req.url.search(register) != -1
        //     ){
        //     return next.handle(req);
        // }
        // Send request with Access-Token
        if (this.token.getAccessToken() && this.token.getRefreshToken()) {
            req = this.addToken(req, this.token.getAccessToken());
        }
        else {
            this.token.removeTokens();
        }
        return next.handle(req).pipe(operators_1.catchError(function (err) {
            return rxjs_1.throwError(err.error.message);
            // if (err instanceof HttpErrorResponse && err.status === 401) {
            //     return this.handle401Error(req, next);
            // } else {
            //     return throwError(err.error.message);
            // }
        }));
    };
    ApiHttpInterceptor.prototype.addToken = function (request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': "Bearer " + token
            }
        });
    };
    ApiHttpInterceptor.prototype.handle401Error = function (request, next) {
        var _this = this;
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.token.refreshToken().pipe(operators_1.switchMap(function (res) {
                _this.isRefreshing = false;
                _this.refreshTokenSubject.next(res.accessToken);
                return next.handle(_this.addToken(request, res.accessToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(operators_1.filter(function (res) { return res != null; }), operators_1.take(1), operators_1.switchMap(function (res) {
                return next.handle(_this.addToken(request, res.accessToken));
            }));
        }
    };
    ApiHttpInterceptor = __decorate([
        core_1.Injectable()
    ], ApiHttpInterceptor);
    return ApiHttpInterceptor;
}());
exports.ApiHttpInterceptor = ApiHttpInterceptor;
