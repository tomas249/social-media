"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggedOutGuard = void 0;
var core_1 = require("@angular/core");
var LoggedOutGuard = /** @class */ (function () {
    function LoggedOutGuard(token, location, router, activatedRoute) {
        this.token = token;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    LoggedOutGuard.prototype.canActivate = function () {
        if (this.token.isLogged()) {
            // this.router.navigate(['/accounts'], {relativeTo: this.activatedRoute});
            // this.router.navigate(['/auth/accounts']);
            return false;
        }
        else {
            return true;
        }
    };
    LoggedOutGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoggedOutGuard);
    return LoggedOutGuard;
}());
exports.LoggedOutGuard = LoggedOutGuard;
