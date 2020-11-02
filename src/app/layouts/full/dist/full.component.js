"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FullComponent = void 0;
var core_1 = require("@angular/core");
var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
    }
    FullComponent.prototype.ngOnInit = function () {
    };
    FullComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    FullComponent = __decorate([
        core_1.Component({
            selector: 'app-full',
            templateUrl: './full.component.html',
            styleUrls: ['./full.component.css']
        })
    ], FullComponent);
    return FullComponent;
}());
exports.FullComponent = FullComponent;
