"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IsAdminGuard = void 0;
var core_1 = require("@angular/core");
var IsAdminGuard = /** @class */ (function () {
    function IsAdminGuard(token, router, modal) {
        this.token = token;
        this.router = router;
        this.modal = modal;
    }
    IsAdminGuard.prototype.canActivate = function () {
        if (this.token.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            // this.modal.addMessage('In order to visit this page, please login');
            // this.modal.open('AuthModule', 'LoginComponent');
            return false;
        }
    };
    IsAdminGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], IsAdminGuard);
    return IsAdminGuard;
}());
exports.IsAdminGuard = IsAdminGuard;
