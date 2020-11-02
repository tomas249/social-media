"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_select_component_1 = require("./dashboard-select/dashboard-select.component");
var dashboard_edit_component_1 = require("./dashboard-edit/dashboard-edit.component");
var dashboard_confirm_component_1 = require("./dashboard-confirm/dashboard-confirm.component");
var routes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'select', pathMatch: 'full' },
            { path: 'select', component: dashboard_select_component_1.DashboardSelectComponent },
            { path: 'edit', component: dashboard_edit_component_1.DashboardEditComponent },
        ]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.components = {
        DashboardSelectComponent: dashboard_select_component_1.DashboardSelectComponent,
        DashboardEditComponent: dashboard_edit_component_1.DashboardEditComponent,
        DashboardConfirmComponent: dashboard_confirm_component_1.DashboardConfirmComponent
    };
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent, dashboard_select_component_1.DashboardSelectComponent, dashboard_edit_component_1.DashboardEditComponent, dashboard_confirm_component_1.DashboardConfirmComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
