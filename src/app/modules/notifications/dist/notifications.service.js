"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsService = void 0;
var core_1 = require("@angular/core");
var NotificationsService = /** @class */ (function () {
    function NotificationsService(api) {
        this.api = api;
    }
    NotificationsService.prototype.getNotifications = function (onlyUnread) {
        if (onlyUnread === void 0) { onlyUnread = true; }
        var queryParam = '?onlyUnread=' + onlyUnread;
        return this.api.get('/notifications' + queryParam);
    };
    NotificationsService.prototype.markAsRead = function (notificationId) {
        return this.api.get('/notifications/read/' + notificationId);
    };
    NotificationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
