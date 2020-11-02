"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(api, token, router) {
        this.api = api;
        this.token = token;
        this.router = router;
    }
    AuthService.prototype.register = function (payload) {
        return this.api.post('/auth/register', payload);
    };
    AuthService.prototype.login = function (payload) {
        var _this = this;
        return this.api.post('/auth/login', payload)
            .pipe(operators_1.tap(function (res) {
            var refreshTKN = 'deeee';
            var accessTKN = res.token;
            _this.token.setTokens(refreshTKN, accessTKN);
        }));
    };
    AuthService.prototype.logout = function () {
        this.token.removeTokens();
        this.router.navigate(['/explore']);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
