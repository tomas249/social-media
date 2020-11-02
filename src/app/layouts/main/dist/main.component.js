"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var MainComponent = /** @class */ (function () {
    function MainComponent(locationService, token, router, modal) {
        this.locationService = locationService;
        this.token = token;
        this.router = router;
        this.modal = modal;
        this.navItemsList = [
            {
                name: 'Home',
                path: '/home',
                protected: false
            },
            {
                name: 'Explore',
                path: '/explore',
                protected: false
            },
            {
                name: 'Notifications',
                path: '/notifications',
                children: [
                    { name: 'All', path: '/all' },
                    { name: 'Only unread', path: '/unread' }
                ],
                selChildIdx: 1,
                protected: true,
                checkAvailability: this.token.user$,
                expectingRes: true
            },
            {
                name: 'Profile',
                path: '/u/me',
                protected: true,
                checkAvailability: this.token.user$,
                expectingRes: true
            },
            {
                name: 'Auth',
                path: '/auth',
                children: [
                    { name: 'Login', path: '/login' },
                    { name: 'Register', path: '/register' }
                ],
                selChildIdx: 0,
                protected: true,
                checkAvailability: this.token.user$,
                expectingRes: false
            },
            {
                name: 'Accounts',
                path: '/auth/accounts',
                protected: true,
                checkAvailability: this.token.user$,
                expectingRes: true
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.location$ = this.locationService.location$.pipe(operators_1.delay(0));
        this.user$ = this.token.user$;
    };
    MainComponent.prototype.open = function (name) {
    };
    MainComponent.prototype["default"] = function () {
        var mContent = [
            {
                title: 'Please login in order to post'
            }, {
                module: 'AuthModule',
                component: 'RegisterComponent'
            },
            {
                html: "<div>yo mamma tis difficulting</div>"
            }
        ];
        // this.modal.open('default', mContent)
    };
    MainComponent.prototype.close = function () {
        // this.modal.changeContentMssg('default', 2, {
        //   html: `<hr>noiiiise<hr>`
        // });
    };
    MainComponent.prototype.openPostModal = function () {
        this["default"]();
        // this.modal.open('default', {module: 'PostsModule', component: 'PostPublishComponent'});
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
