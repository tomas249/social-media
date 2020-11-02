"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FullModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var full_component_1 = require("./full.component");
// Guards
var logged_in_guard_1 = require("src/app/guards/logged-in.guard");
var is_admin_guard_1 = require("src/app/guards/is-admin.guard");
var routes = [
    {
        path: 'dashboard',
        component: full_component_1.FullComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('src/app/modules/dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); },
                canActivate: [logged_in_guard_1.LoggedInGuard, is_admin_guard_1.IsAdminGuard]
            }
        ]
    }
];
var FullModule = /** @class */ (function () {
    function FullModule() {
    }
    FullModule = __decorate([
        core_1.NgModule({
            declarations: [full_component_1.FullComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], FullModule);
    return FullModule;
}());
exports.FullModule = FullModule;
