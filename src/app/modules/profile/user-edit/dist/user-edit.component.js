"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEditComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(modal, profileService, token) {
        this.modal = modal;
        this.profileService = profileService;
        this.token = token;
        this.user = null;
        this.selectedImage = null;
        this.showUploadProgress = false;
        this.uploadProgress = 0;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.avatarUrl = this.user.avatar.fullPath;
    };
    UserEditComponent.prototype.onImageSelect = function (event) {
        var _this = this;
        var image = event.target.files[0];
        // Set image file
        this.selectedImage = image;
        // Display image
        this.createFormData(image, function (url) { _this.avatarUrl = url; });
    };
    UserEditComponent.prototype.onCancelSelectedImage = function () {
        this.avatarUrl = this.user.avatar.fullPath;
        this.selectedImage = null;
    };
    UserEditComponent.prototype.onSave = function (name, description) {
        var _this = this;
        // Validate
        if (!name || !description)
            return;
        var updatedUser = {
            name: name.value,
            description: description.value
        };
        var subscription;
        if (this.selectedImage) {
            subscription = this.getNewAvatarUrl().pipe(operators_1.tap(function (avatarPath) {
                updatedUser['avatar'] = {
                    filename: avatarPath,
                    relativePath: "/a/" + avatarPath,
                    fullPath: environment_1.environment.baseUrl + "/a/" + avatarPath
                };
                // this.token.updateData({ avatar: updatedUser['avatar'] });
            }), operators_1.switchMap(function (_) { return _this.profileService.updateUserData(updatedUser); }));
        }
        else {
            subscription = this.profileService.updateUserData(updatedUser);
        }
        subscription.subscribe(function (res) {
            // this.modal.emitResponse({user: res.data});
            // this.modal.close();
        });
    };
    UserEditComponent.prototype.getNewAvatarUrl = function () {
        var _this = this;
        this.showUploadProgress = true;
        return this.profileService.updateAvatar(this.selectedImage).pipe(operators_1.tap(function (res) {
            if (res.progress) {
                _this.uploadProgress = res.progress;
            }
            else if (res.completed) {
                _this.uploadProgress = 'Uploaded';
            }
        }), operators_1.takeLast(1), operators_1.map(function (res) { return res.avatarPath; }));
    };
    UserEditComponent.prototype.createFormData = function (file, cb) {
        var _this = this;
        var reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function (_event) {
            // Clear file input
            _this.imageSelect.nativeElement.value = '';
            cb(reader.result);
        };
    };
    __decorate([
        core_1.ViewChild('imageSelect')
    ], UserEditComponent.prototype, "imageSelect");
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.css']
        })
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
