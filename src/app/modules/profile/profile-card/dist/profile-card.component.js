"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileCardComponent = void 0;
var core_1 = require("@angular/core");
var ProfileCardComponent = /** @class */ (function () {
    function ProfileCardComponent(profileService, router, tooltip, modal, token) {
        this.profileService = profileService;
        this.router = router;
        this.tooltip = tooltip;
        this.modal = modal;
        this.token = token;
        this.follows = null;
        this.loadingFollows = true;
        this.allowEdit = false;
        this.allowRouter = true;
    }
    ProfileCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.user.avatar = `http://localhost:3000/a/${this.user.avatar}`;
        this.profileService.checkIfFollows(this.user._id).subscribe(function (res) {
            _this.follows = res;
            _this.loadingFollows = false;
        });
    };
    ProfileCardComponent.prototype.ngOnDestroy = function () {
        this.profileService.removeUser();
    };
    ProfileCardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.user && !changes.user.firstChange) {
            this.follows = this.profileService.checkIfFollowsByList(changes.user.currentValue._id);
        }
    };
    ProfileCardComponent.prototype.goToUser = function (username) {
        if (!this.allowRouter)
            return;
        // this.modal.close();
        this.profileService.setUser(this.user);
        this.tooltip.close(true);
        this.router.navigate(['/u/' + username]);
    };
    ProfileCardComponent.prototype.openList = function (field) {
        this.tooltip.close(true);
        var currentUserId = this.token.getUserId();
        // console.log({currentUserId, userId: this.user._id, usersField: field})
        // this.modal.open('ProfileModule', 'UsersListComponent', 
        // {currentUserId, userId: this.user._id, usersField: field});
    };
    ProfileCardComponent.prototype.followUser = function (userId) {
        if (!this.checkAuth('In order to follow someone you need to be logged in'))
            return;
        if (this.follows)
            this.user.count.followers -= 1;
        else
            this.user.count.followers += 1;
        this.follows = !this.follows;
        this.profileService.followUser(userId).subscribe(function (res) {
            // this.user = res.followingCount;
            // console.log(res);
        });
    };
    ProfileCardComponent.prototype.checkAuth = function (message) {
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
    ProfileCardComponent.prototype.onEditUser = function () {
        // this.modal.open('ProfileModule', 'UserEditComponent', {user: this.user});
        // this.modal.waitForResponse().subscribe(res => {
        //   if (res) {
        //     console.log(res.user)
        //     Object.assign(this.user, res.user);
        //   }
        // })
    };
    __decorate([
        core_1.Input()
    ], ProfileCardComponent.prototype, "allowEdit");
    __decorate([
        core_1.Input()
    ], ProfileCardComponent.prototype, "allowRouter");
    __decorate([
        core_1.Input()
    ], ProfileCardComponent.prototype, "user");
    ProfileCardComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-card',
            templateUrl: './profile-card.component.html',
            styleUrls: ['./profile-card.component.css']
        })
    ], ProfileCardComponent);
    return ProfileCardComponent;
}());
exports.ProfileCardComponent = ProfileCardComponent;
