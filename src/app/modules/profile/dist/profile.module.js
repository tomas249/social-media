"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var profile_card_component_1 = require("./profile-card/profile-card.component");
var profile_page_component_1 = require("./profile-page/profile-page.component");
var users_list_component_1 = require("./users-list/users-list.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var routes = [
    {
        path: ':username',
        component: profile_page_component_1.ProfilePageComponent
    },
    {
        path: ':username/:tab',
        component: profile_page_component_1.ProfilePageComponent
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule.components = {
        ProfileCardComponent: profile_card_component_1.ProfileCardComponent,
        UsersListComponent: users_list_component_1.UsersListComponent,
        UserEditComponent: user_edit_component_1.UserEditComponent
    };
    ProfileModule = __decorate([
        core_1.NgModule({
            declarations: [profile_card_component_1.ProfileCardComponent, profile_page_component_1.ProfilePageComponent, users_list_component_1.UsersListComponent, user_edit_component_1.UserEditComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                profile_card_component_1.ProfileCardComponent
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
