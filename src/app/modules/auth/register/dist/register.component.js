"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, fb, locationService, modal) {
        this.auth = auth;
        this.fb = fb;
        this.locationService = locationService;
        this.modal = modal;
        this.messageList = [];
        this.success = false;
        this.registerForm = this.fb.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(30),
                    this.noEmail.bind(this)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.email
                ]],
            password: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(40)
                ]],
            confirmPassword: ['', [
                    forms_1.Validators.required,
                    this.mustMatch.bind(this)
                ]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.locationService.finishComposition();
        // this.locationService.addChildLoc('Register', {extend:false, parentLoc:'Auth', useNav:true});
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        // this.locationService.removeChildLoc(true);
    };
    RegisterComponent.prototype.noEmail = function (control) {
        var name = control.value;
        if (name && name.indexOf('@') !== -1) {
            return { isEmail: 'yes' };
        }
    };
    RegisterComponent.prototype.mustMatch = function (control) {
        if (!this.registerForm)
            return null;
        var password = this.registerForm.value.password;
        var confirmPassword = control.value;
        return password === confirmPassword ? null : {
            mustMatch: 'true'
        };
    };
    RegisterComponent.prototype.errorMessages = function (field, keyError, extra) {
        if (extra === void 0) { extra = null; }
        field = field.charAt(0).toUpperCase() + field.slice(1);
        var message = {
            'required': field + " field is required",
            'maxlength': field + " field max length is " + extra + " characters",
            'minlength': field + " field min length is " + extra + " characters",
            'mustMatch': "Both passwords must match",
            'isEmail': field + " can not contain @",
            'email': "Enter a valid email"
        };
        return message[keyError] ||
            "Unrecognized validator (Field: " + field + ", KeyError: " + keyError + ")";
    };
    RegisterComponent.prototype.getFormValidationErrors = function () {
        var _this = this;
        this.messageList = [];
        Object.keys(this.registerForm.controls).forEach(function (key) {
            var controlErrors = _this.registerForm.get(key).errors;
            if (controlErrors !== null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                    var length = controlErrors[keyError];
                    var extra = (typeof length === 'object') ? length.requiredLength : null;
                    var errorMssg = _this.errorMessages(key, keyError, extra);
                    _this.messageList.push(errorMssg);
                });
            }
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.getFormValidationErrors();
        if (this.registerForm.invalid)
            return;
        var newUser = {
            name: this.registerForm.get('name').value,
            email: this.registerForm.get('email').value.toLowerCase(),
            password: this.registerForm.get('password').value
        };
        this.auth.register(newUser).subscribe(function (res) {
            _this.success = true;
            _this.messageList.push(res.message);
            _this.registerForm.reset();
        }, function (err) {
            _this.success = false;
            _this.messageList.push(err);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
