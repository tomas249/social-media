"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TokenService = /** @class */ (function () {
    function TokenService(api, cookieService) {
        this.api = api;
        this.cookieService = cookieService;
        this.accountSubject = new rxjs_1.BehaviorSubject('');
        this.account = '';
        document.cookie = 'testData=subnormal';
    }
    TokenService.prototype.testfn = function () {
    };
    TokenService.prototype.subscribeAcc = function () {
        var acc = this.getUserData();
        this.account = acc;
        this.accountSubject.next(this.account);
        return this.accountSubject.asObservable();
    };
    TokenService.prototype.setTokens = function (refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        var userData = atob(accessToken.split('.')[1]);
        var userParsed = JSON.parse(userData);
        this.account = userParsed;
        this.accountSubject.next(userParsed);
        localStorage.setItem('userData', userData);
    };
    TokenService.prototype.removeTokens = function () {
        this.account = '';
        this.accountSubject.next('');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
    };
    TokenService.prototype.getUserData = function () {
        if (this.isLogged()) {
            return JSON.parse(localStorage.getItem('userData'));
        }
        else {
            return null;
        }
    };
    TokenService.prototype.getRefreshToken = function () {
        return localStorage.getItem('refreshToken');
    };
    TokenService.prototype.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };
    TokenService.prototype.isLogged = function () {
        return !!this.getRefreshToken();
    };
    TokenService.prototype.getUserId = function () {
        if (this.isLogged()) {
            return this.getUserData().id;
        }
        else {
            return null;
        }
    };
    TokenService.prototype.isPublisher = function () {
        var userData = this.getUserData();
        if (userData) {
            return (userData.role == 'publisher' || userData.role == 'admin');
        }
        else {
            return false;
        }
        //return false;
    };
    TokenService.prototype.isAdmin = function () {
        var userData = this.getUserData();
        if (userData) {
            return userData.role == 'admin';
        }
        else {
            return false;
        }
        //return false;
    };
    TokenService.prototype.refreshToken = function () {
        var payload = {
            refreshToken: this.getRefreshToken()
        };
        return this.api.post('tokens/refresh', payload).pipe(operators_1.map(function (res) { return res.message; }), operators_1.tap(function (res) {
            localStorage.setItem('accessToken', res.accessToken);
        }));
    };
    TokenService.prototype.updateData = function (newData) {
        var currentUser = this.getUserData();
        var newUser = Object.assign(currentUser, newData);
        this.account = newUser;
        this.accountSubject.next(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
    };
    TokenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
