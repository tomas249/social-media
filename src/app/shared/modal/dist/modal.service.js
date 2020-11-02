"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ModalService = /** @class */ (function () {
    function ModalService(locationService, navbarService) {
        this.locationService = locationService;
        this.navbarService = navbarService;
        // private modal;
        // private opened = false;
        // response$;
        this._activeModals = {
            types: [],
            getActive: function () { return this.types[this.types.length - 1]; }
        };
        this._modals = {};
        this._sub = new rxjs_1.BehaviorSubject(this._modals);
    }
    ModalService.prototype.initiate = function (a, s) { };
    ModalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
