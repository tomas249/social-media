"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardService = void 0;
var core_1 = require("@angular/core");
var presets_1 = require("./presets");
var DashboardService = /** @class */ (function () {
    function DashboardService(router, api) {
        this.router = router;
        this.api = api;
        this.presets = presets_1.presetsList;
    }
    // Step 1
    DashboardService.prototype.getPresets = function () {
        return this.presets;
    };
    DashboardService.prototype.selectPreset = function (preset) {
        this.selectedPreset = preset.slice(1);
        this.apiConfig = preset[0];
        this.router.navigate(['/full/dashboard/edit']);
    };
    // Step 2
    DashboardService.prototype.getSelectedPreset = function () {
        if (!this.selectedPreset) {
            this.router.navigate(['/full/dashboard/select']);
            return false;
        }
        return this.selectedPreset;
    };
    DashboardService.prototype.getQuery = function () {
        return this.api.get(this.apiConfig.endpoint);
    };
    DashboardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
