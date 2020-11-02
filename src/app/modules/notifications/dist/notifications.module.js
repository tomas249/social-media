"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var notifications_routing_module_1 = require("./notifications-routing.module");
var notifications_list_component_1 = require("./notifications-list/notifications-list.component");
var notifications_component_1 = require("./notifications.component");
var tooltip_module_1 = require("src/app/shared/tooltip/tooltip.module");
var pipes_module_1 = require("src/app/pipes/pipes.module");
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        core_1.NgModule({
            declarations: [
                notifications_list_component_1.NotificationsListComponent,
                notifications_component_1.NotificationsComponent,
            ],
            imports: [
                common_1.CommonModule,
                notifications_routing_module_1.NotificationsRoutingModule,
                tooltip_module_1.TooltipModule,
                pipes_module_1.PipesModule,
            ],
            exports: [notifications_component_1.NotificationsComponent]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());
exports.NotificationsModule = NotificationsModule;