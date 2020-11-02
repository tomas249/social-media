"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsListComponent = void 0;
var core_1 = require("@angular/core");
var NotificationsListComponent = /** @class */ (function () {
    function NotificationsListComponent(notifications, router, locationService, route) {
        this.notifications = notifications;
        this.router = router;
        this.locationService = locationService;
        this.route = route;
        this.isLogged = false;
        this.notificationsCount = 2;
    }
    NotificationsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // String.prototype['format'] = function() {
        //   return [...arguments].reduce((p,c) => p.replace(/%s/,c), this);
        // };
        this.route.params.subscribe(function (params) {
            // this.locationService.removeChildLoc(true);
            _this.notificationsFilter = params.notificationsFilter;
            if (['all', 'unread'].includes(_this.notificationsFilter)) {
                var redirects = {
                    all: 'All',
                    unread: 'Only unread'
                };
                // this.locationService.addChildLoc(redirects[this.notificationsFilter], {extend:false, parentLoc:'Notifications', useNav:true});
                _this.notifications.getNotifications(_this.notificationsFilter === 'unread').subscribe(function (res) {
                    _this.notificationsList = res.data.reverse();
                });
                // this.notifications.sub().subscribe(res => {
                //   console.warn(res);
                // })
            }
            else {
                _this.router.navigate(['/notifications/unread']);
            }
        });
        // SocketIO
        // this.notifications.connect();
        // this.notifications.getMessage().subscribe(res => {
        //   console.log(res);
        //   this.notificationsList.unshift(res);
        // });
    };
    NotificationsListComponent.prototype.ngOnDestroy = function () {
        // this.locationService.removeChildLoc(true);
    };
    NotificationsListComponent.prototype.markAsRead = function (notification) {
        if (this.notificationsFilter === 'all') {
            notification.read = true;
        }
        else {
            this.notificationsList = this.notificationsList.filter(function (n) { return n !== notification; });
        }
        this.notifications.markAsRead(notification._id).subscribe();
    };
    NotificationsListComponent = __decorate([
        core_1.Component({
            selector: 'app-notifications-list',
            templateUrl: './notifications-list.component.html',
            styleUrls: ['./notifications-list.component.css']
        })
    ], NotificationsListComponent);
    return NotificationsListComponent;
}());
exports.NotificationsListComponent = NotificationsListComponent;
