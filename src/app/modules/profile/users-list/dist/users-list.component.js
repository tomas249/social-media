"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersListComponent = void 0;
var core_1 = require("@angular/core");
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(profileService, tooltip, token, modal) {
        this.profileService = profileService;
        this.tooltip = tooltip;
        this.token = token;
        this.modal = modal;
        this.loading = true;
        this.currentUserId = null;
        this.userId = null;
        this.usersField = null;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getFollowsFromUser(this.userId, this.usersField)
            .subscribe(function (res) {
            _this.usersList = res.data[0][_this.usersField];
            _this.loading = false;
        });
    };
    UsersListComponent.prototype.openTooltip = function (user, i) {
        this.image = this.img.toArray()[i];
        this.image.nativeElement.style.zIndex = '10';
        var a = this.image.nativeElement.getBoundingClientRect();
        var start = a.y;
        var X = a.x + a.width / 2;
        var Y = a.y + a.height;
        this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', { user: user });
    };
    UsersListComponent.prototype.closeTooltip = function () {
        this.tooltip.close();
        this.image.nativeElement.style.zIndex = '2';
    };
    UsersListComponent.prototype.doesItFollow = function (userId) {
        return this.profileService.checkIfFollowsByList(userId);
    };
    UsersListComponent.prototype.followUser = function (user) {
        if (!this.checkAuth('In order to follow someone you need to be logged in'))
            return;
        var follows = this.doesItFollow(user._id);
        if (follows)
            user.count.followers -= 1;
        else
            user.count.followers += 1;
        // this.follows = !this.follows;
        this.profileService.followUser(user._id).subscribe(function (res) {
            // this.user = res.followingCount;
            // console.log(res);
        });
    };
    UsersListComponent.prototype.checkAuth = function (message) {
        if (!this.token.isLogged()) {
            this.tooltip.close(true);
            // this.modal.addMessage(message);
            // this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        core_1.ViewChildren('img')
    ], UsersListComponent.prototype, "img");
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'app-users-list',
            templateUrl: './users-list.component.html',
            styleUrls: ['./users-list.component.css']
        })
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
