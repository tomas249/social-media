"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Components
var main_component_1 = require("./main.component");
// Guards
var logged_in_guard_1 = require("src/app/guards/logged-in.guard");
var routes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            {
                path: '',
                redirectTo: '/explore',
                pathMatch: 'full'
            },
            {
                path: 'notifications',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/modules/notifications/notifications.module'); }).then(function (m) { return m.NotificationsModule; }); },
                canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: 'auth',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/modules/auth/auth.module'); }).then(function (m) { return m.AuthModule; }); }
            },
            {
                path: 'u',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/modules/profile/profile.module'); }).then(function (m) { return m.ProfileModule; }); },
                canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/modules/posts/posts.module'); }).then(function (m) { return m.PostsModule; }); }
            }
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
