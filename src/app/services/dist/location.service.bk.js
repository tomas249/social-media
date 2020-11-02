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
        this.paths = {
            Auth: {
                navItems: [
                    { name: 'Login', path: '/auth/login', component: 'LoginComponent' },
                    { name: 'Register', path: '/auth/register', component: 'RegisterComponent' }
                ]
            },
            Profile: {
                navItems: [
                    { name: 'Posts', path: '../posts', component: 'PostsListComponent' },
                    { name: 'Media', path: '../media', component: 'LogoutComponent' }
                ]
            },
            Notifications: {
                navItems: [
                    { name: 'All', path: '/notifications/all', component: 'PostsListComponent' },
                    { name: 'Only unread', path: '/notifications/unread', component: 'LogoutComponent' }
                ]
            }
        };
        this.location$ = new rxjs_1.BehaviorSubject('Main');
        this.location = [];
        this.navItems$ = new rxjs_1.Subject();
        this.navItems = [];
        this.fixed = false;
        // this.location$.subscribe(res => {
        //   console.log('LOCATION >>', res)
        // })
    }
    LocationService.prototype.subscribeLocation = function () {
        if (this.fixed)
            return;
        return this.location$.asObservable();
    };
    LocationService.prototype.subscribeNavItems = function () {
        if (this.fixed)
            return;
        return this.navItems$.asObservable();
    };
    LocationService.prototype.changeRootLoc = function (location) {
        if (this.fixed)
            return;
        this.location = [location];
        this.location$.next(location);
        this.parentLoc = location;
        // this.modal.close();
    };
    LocationService.prototype.changeNavItems = function (navItems, selected) {
        if (this.fixed)
            return;
        this.navItems = navItems;
        this.navItems$.next({
            navItems: this.navItems,
            modal: !!this.frozenData,
            selected: selected
        });
    };
    LocationService.prototype.addChildLoc = function (location, opt) {
        if (this.fixed)
            return;
        var checkSameParent = this.parentLoc && opt.parentLoc === this.parentLoc;
        // Control NavBar
        if (opt.useNav && !checkSameParent) {
            this.changeNavItems(this.paths[opt.parentLoc].navItems, location);
        }
        else if (!opt.useNav && !checkSameParent) {
            this.changeNavItems([]);
        }
        // If same parent, do not overwrite location
        if (checkSameParent) {
            opt.extend = true;
        }
        if (!opt.extend && !opt.parentLoc) {
            this.changeRootLoc(location);
        }
        else if (!opt.extend && opt.parentLoc) {
            this.changeRootLoc(opt.parentLoc);
            this.location.push(location);
            var newLoc = this.location.join(' > ');
            this.location$.next(newLoc);
        }
        else if (opt.extend) {
            this.location.push(location);
            var newLoc = this.location.join(' > ');
            this.location$.next(newLoc);
        }
    };
    LocationService.prototype.removeChildLoc = function (skip) {
        if (this.fixed)
            return;
        this.location.pop();
        if (skip)
            return;
        var newLoc = this.location.join(' > ');
        this.location$.next(newLoc);
    };
    LocationService.prototype.freeze = function () {
        this.frozenData = {
            location: this.location,
            navItems: this.navItems,
            parentLoc: this.parentLoc
        };
    };
    LocationService.prototype.restore = function () {
        this.location = this.frozenData.location;
        this.location$.next(this.location.join(' > '));
        this.changeNavItems(this.frozenData.navItems);
        this.parentLoc = this.frozenData.parentLoc;
        this.frozenData = null;
    };
    LocationService.prototype.getLocation = function () {
        return this.location;
    };
    LocationService.prototype.fixLocation = function () {
        this.fixed = true;
    };
    LocationService.prototype.unfixLocation = function () {
        this.fixed = false;
    };
    LocationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
