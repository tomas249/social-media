"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, token, router, locationService, modal) {
        this.fb = fb;
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.locationService = locationService;
        this.modal = modal;
        this.modalBox = false;
        this.loginResponse = new core_1.EventEmitter();
        this.messageList = [];
        this.success = false;
        this.navigateEnd = true;
        this.loginForm = this.fb.group({
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(50),
                    forms_1.Validators.email
                ]],
            password: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(40)
                ]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.locationService.finishComposition();
    };
    LoginComponent.prototype.errorMessages = function (field, keyError, extra) {
        if (extra === void 0) { extra = null; }
        field = field.charAt(0).toUpperCase() + field.slice(1);
        var message = {
            'required': field + " field is required",
            'maxlength': field + " field max length is " + extra + " characters",
            'minlength': field + " field min length is " + extra + " characters",
            'email': "Enter a valid email"
        };
        return message[keyError];
    };
    LoginComponent.prototype.getFormValidationErrors = function () {
        var _this = this;
        this.messageList = [];
        Object.keys(this.loginForm.controls).forEach(function (key) {
            var controlErrors = _this.loginForm.get(key).errors;
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
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.getFormValidationErrors();
        if (this.loginForm.invalid)
            return;
        var payload = {
            email: this.loginForm.get('email').value.toLowerCase(),
            password: this.loginForm.get('password').value
        };
        // Send request to API
        this.auth.login(payload).subscribe(function (res) {
            // this.modal.emitResponse(true);
            if (_this.navigateEnd)
                _this.router.navigate(['/']);
        }, function (err) {
            _this.success = false;
            _this.messageList.push(err);
        });
    };
    __decorate([
        core_1.Input()
    ], LoginComponent.prototype, "modalBox");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "loginResponse");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
