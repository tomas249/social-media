"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var LocationService = /** @class */ (function () {
    function LocationService() {
        this._location = new rxjs_1.Subject();
        this._locationStack = [];
        this.location$ = this._location.asObservable();
    }
    LocationService.prototype.joinStackAndSend = function (stack) {
        var location = stack.join(' > ');
        this._location.next(location);
    };
    LocationService.prototype.finishComposition = function () {
        this.joinStackAndSend(this._locationStack);
    };
    LocationService.prototype.addItemToStack = function (item) {
        this._locationStack.push(item);
    };
    LocationService.prototype.removeItemFromStack = function () {
        this._locationStack.pop();
    };
    LocationService.prototype.changeStackRoot = function (item) {
        this._locationStack = [item];
    };
    LocationService.prototype.changeItemAtIndex = function (item, i) {
        this._locationStack = this._locationStack.slice(0, i).concat(item);
    };
    LocationService.prototype.replaceItemsFromEnd = function (position, items) {
        this._locationStack = this._locationStack.slice(0, -position);
        this._locationStack = this._locationStack.concat(items);
    };
    LocationService.prototype.changeItemAtRoot = function (item, root) {
        var rootIndex = this._locationStack.indexOf(root);
        this.changeItemAtIndex(item, rootIndex + 1);
    };
    LocationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
