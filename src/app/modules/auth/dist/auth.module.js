"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var auth_routing_module_1 = require("./auth-routing.module");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var logout_component_1 = require("./logout/logout.component");
var modal_module_1 = require("src/app/shared/modal/modal.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.components = {
        AuthComponent: auth_component_1.AuthComponent,
        LoginComponent: login_component_1.LoginComponent,
        RegisterComponent: register_component_1.RegisterComponent,
        LogoutComponent: logout_component_1.LogoutComponent
    };
    AuthModule.list = {
        root: 'Auth',
        children: [
            { name: 'Login', component: 'LoginComponent', modalOrigin: 'default' },
            { name: 'Register', component: 'RegisterComponent', modalOrigin: 'default' }
        ]
    };
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                logout_component_1.LogoutComponent,
                auth_component_1.AuthComponent
            ],
            imports: [
                common_1.CommonModule,
                auth_routing_module_1.AuthRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                modal_module_1.ModalModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
