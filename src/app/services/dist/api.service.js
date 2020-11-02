"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ApiService = /** @class */ (function () {
    function ApiService(http, modal) {
        this.http = http;
        this.modal = modal;
        this.baseUrl = environment_1.environment.baseUrl + '/api';
    }
    ApiService.prototype.post = function (url, payload, options) {
        if (options === void 0) { options = {}; }
        return this.http.post("" + this.baseUrl + url, payload, options)
            .pipe(operators_1.catchError(this.errorHandler));
    };
    ApiService.prototype.get = function (url) {
        return this.http.get("" + this.baseUrl + url)
            .pipe(operators_1.catchError(this.errorHandler));
    };
    ApiService.prototype.patch = function (url, payload) {
        return this.http.patch("" + this.baseUrl + url, payload)
            .pipe(operators_1.catchError(this.errorHandler));
    };
    ApiService.prototype["delete"] = function (url) {
        return this.http["delete"]("" + this.baseUrl + url)
            .pipe(operators_1.catchError(this.errorHandler));
    };
    ApiService.prototype.errorHandler = function (err) {
        var content = [
            {
                html: '<div>Got an error:</div>'
            },
            {
                html: "<p>" + err + "</p>"
            }
        ];
        // this.modal.open('extended', content);
        console.error('Error amigo');
        return rxjs_1.of(null);
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
