"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardSelectComponent = void 0;
var core_1 = require("@angular/core");
var DashboardSelectComponent = /** @class */ (function () {
    function DashboardSelectComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    DashboardSelectComponent.prototype.ngOnInit = function () {
        this.presetsList = this.dashboardService.getPresets();
    };
    DashboardSelectComponent.prototype.onSelectPreset = function (presetName) {
        this.selectedPreset = this.presetsList[presetName];
    };
    DashboardSelectComponent.prototype.onQuery = function (preset) {
        this.dashboardService.selectPreset(preset);
    };
    DashboardSelectComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard-select',
            templateUrl: './dashboard-select.component.html',
            styleUrls: ['./dashboard-select.component.css']
        })
    ], DashboardSelectComponent);
    return DashboardSelectComponent;
}());
exports.DashboardSelectComponent = DashboardSelectComponent;
