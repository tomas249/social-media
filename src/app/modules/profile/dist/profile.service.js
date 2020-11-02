"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ProfileService = /** @class */ (function () {
    function ProfileService(api, token, uploadFile) {
        this.api = api;
        this.token = token;
        this.uploadFile = uploadFile;
        this.currentUserId = this.token.getUserId();
    }
    ProfileService.prototype.setUser = function (user) {
        this.selectedUser = user;
    };
    ProfileService.prototype.removeUser = function () {
        this.selectedUser = null;
    };
    ProfileService.prototype.getStoredUser = function () {
        return this.selectedUser || false;
    };
    ProfileService.prototype.getUserById = function (userId) {
        return this.api.get('/users/' + userId);
    };
    ProfileService.prototype.getUserByUsername = function (username) {
        return this.api.get('/users/u/' + username);
    };
    ProfileService.prototype.getFollowsFromUser = function (userId, field) {
        if (field === void 0) { field = null; }
        return this.api.get('/users/' + userId + '/followList/' + field);
    };
    ProfileService.prototype.followUser = function (userId) {
        if (this.followsList) {
            if (this.followsList.following.includes(userId)) {
                this.followsList.following = this.followsList.following.filter(function (uid) { return uid !== userId; });
            }
            else {
                this.followsList.following.push(userId);
            }
        }
        ;
        return this.api.get('/users/' + userId + '/follow');
    };
    ProfileService.prototype.checkIfFollows = function (userId) {
        var _this = this;
        if (!this.currentUserId) {
            return rxjs_1.of(false);
        }
        else if (this.currentUserId === userId) {
            return rxjs_1.of(null);
        }
        else if (this.followsList) {
            return rxjs_1.of(this.followsList.following.includes(userId));
        }
        else {
            return this.api.get("/users/" + this.currentUserId + "/followList").pipe(operators_1.map(function (res) {
                _this.followsList = res.data[0];
                return _this.followsList.following.includes(userId);
            }));
        }
    };
    ProfileService.prototype.checkIfFollowsByList = function (userId) {
        var _this = this;
        if (!this.currentUserId) {
            return false;
        }
        else if (this.currentUserId === userId) {
            return null;
        }
        else if (this.followsList) {
            return this.followsList.following.includes(userId);
        }
        else {
            return this.api.get("/users/" + userId + "/followList").pipe(operators_1.map(function (res) {
                _this.followsList = res.data[0];
                return _this.followsList.following.includes(userId);
            }));
        }
    };
    ProfileService.prototype.updateUserData = function (updatedUser) {
        return this.api.post('/users/updateProfile', { updatedUser: updatedUser });
    };
    ProfileService.prototype.updateAvatar = function (newImage) {
        var _this = this;
        var fd = new FormData();
        fd.append('avatar', newImage);
        var opt = this.uploadFile.getOptions();
        // Upload all images to get their url
        return this.api.post('/files/updateAvatar', fd, opt).pipe(operators_1.map(function (event) {
            var res = _this.uploadFile.getProgress(event);
            if (!res.completedUpload) {
                return res;
            }
            else {
                // Expected response is an array of all images
                // with their new filename
                var galleryFilename = res.data;
                return {
                    completed: true,
                    message: res.message,
                    avatarPath: galleryFilename
                };
            }
        }));
        // return this.api.post('/files/updateAvatar', fd);
    };
    ProfileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
