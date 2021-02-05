(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-profile-profile-module"],{

/***/ "./src/app/modules/profile/profile-card/profile-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/profile/profile-card/profile-card.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/modules/profile/profile.service.ts");
/* harmony import */ var src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProfileCardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_ng_container_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.follow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isFollowing ? "following" : "not-following");
} }
function ProfileCardComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onEditAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileCardComponent {
    constructor(modalService, profileService, navbarService, tokenService, router) {
        this.modalService = modalService;
        this.profileService = profileService;
        this.navbarService = navbarService;
        this.tokenService = tokenService;
        this.router = router;
        // When using this component as modal, there is usually
        // no need to edit the account
        this.allowEdit = true;
        this.isOwner = true;
    }
    set user(user) {
        this._user = Object.assign({}, user);
        this.profileService.isFollowing(user._id).subscribe(([f, o]) => {
            this.isFollowing = f;
            this.isOwner = o;
        });
    }
    get user() {
        return this._user;
    }
    ngOnInit() {
    }
    openPosts() {
        // Close tooltip if exists
        this.modalService.closeByType('tooltip');
        const uid = this.user._id;
        const queryUrl = `/posts?owner=${uid}&parent[size]=0&childLevel=0`;
        const content = [
            { title: `@${this.user.username} Posts List` },
            { module: 'Posts', component: 'PostsList',
                params: { queryUrl, showOptPosts: false } }
        ];
        const modal = { type: 'default', content };
        const location = { action: 'add', stack: ['List', 'Posts'], remove: 1 };
        this.modalService.open(modal, location);
    }
    openList(populate) {
        // Close tooltip if exists
        this.modalService.closeByType('tooltip');
        const userId = this.user._id;
        const listName = populate[0].toUpperCase() + populate.slice(1);
        const content = [
            { title: `@${this.user.username} ${listName} list` },
            { module: 'Profile', component: 'UsersList',
                params: { userId, populate } }
        ];
        const modal = { type: 'default', content };
        const location = { action: 'add', stack: ['List', listName], remove: 1 };
        this.modalService.open(modal, location, (c) => {
            this.user.count.following += c;
        });
    }
    follow() {
        if (!this.checkAuth('In order to follow someone you need to be logged in'))
            return;
        this.isFollowing = !this.isFollowing;
        this.user.count.followers += !this.isFollowing ? -1 : 1;
        this.profileService.follow(this.user._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe();
    }
    goToUser(uid) {
        // Close tooltip if exists
        this.modalService.closeByType('tooltip');
        this.navbarService.go(`/u/${uid}/`);
    }
    onEditAccount() {
        this.modalService.closeByType('tooltip');
        const aroba = `@${this.user.username}`;
        const content = [
            { title: `Editing ${aroba} profile` },
            { module: 'Profile', component: 'ProfileEdit', params: { user: this.user } }
        ];
        const modal = { type: 'extended', content };
        const location = { action: 'add', stack: ['Edit'], remove: 1 };
        this.modalService.open(modal, location, (updatedUser) => {
            this.user = Object.assign(this.user, updatedUser);
        });
    }
    checkAuth(message) {
        if (this.tokenService.isLogged()) {
            return true;
        }
        else {
            // Close tooltip if exists
            this.modalService.closeByType('tooltip');
            // Open auth modal
            const modal = { type: 'default', content: [
                    { title: message },
                    { module: 'Auth', component: 'Login', params: { navigateEnd: false } }
                ] };
            const location = { action: 'add', stack: ['Login'] };
            this.modalService.open(modal, location);
            return false;
        }
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], inputs: { allowEdit: "allowEdit", user: "user" }, decls: 28, vars: 9, consts: [[1, "container"], [1, "row"], [1, "acc-photo", 3, "src", "click"], [4, "ngIf"], [1, "accounts"], [1, "acc-name", 3, "click"], [1, "acc-username", 3, "click"], ["class", "acc-edit", 3, "click", 4, "ngIf"], [1, "row", "count-row"], [1, "column"], [1, "section"], [1, "section-count", 3, "click"], [1, "follow-bttn", 3, "ngClass", "click"], [1, "acc-edit", 3, "click"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_img_click_2_listener() { return ctx.goToUser(ctx.user._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileCardComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_5_listener() { return ctx.goToUser(ctx.user._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_7_listener() { return ctx.goToUser(ctx.user._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileCardComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_16_listener() { return ctx.openPosts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_21_listener() { return ctx.openList("followers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_26_listener() { return ctx.openList("following"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.avatar.relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", ctx.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.count.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.count.followers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.count.following);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1rem 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.count-row[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.section-count[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.accounts[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.acc-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  font-weight: bold;\n  margin-right: 0.3rem;\n  cursor: pointer;\n}\n\n.acc-username[_ngcontent-%COMP%] {\n  color: rgb(136, 153, 166);\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.acc-photo[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  background-color: var(--hover-color);\n  cursor: pointer;\n}\n\n.acc-edit[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.8rem;\n  color: rgb(6, 184, 255);\n  cursor: pointer;\n}\n\n.acc-edit[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.follow-bttn[_ngcontent-%COMP%] {\n  min-width: 9rem;\n  margin-left: auto;\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.75rem 0rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n}\n\n.follow-bttn[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.not-following[_ngcontent-%COMP%]:after {\n  content: 'Follow'\n}\n\n.following[_ngcontent-%COMP%]:after {\n  content: 'Following'\n}\n\n.following[_ngcontent-%COMP%]:hover:after {\n  content: 'Unfollow';\n}\n\n.following[_ngcontent-%COMP%]:hover   .follow-bttn[_ngcontent-%COMP%] {\n  background-color: rgb(164, 60, 120);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvdW50LXJvdyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5zZWN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWN0aW9uLWNvdW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWNjb3VudHMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWNjLW5hbWUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY2MtdXNlcm5hbWUge1xuICBjb2xvcjogcmdiKDEzNiwgMTUzLCAxNjYpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjYy1waG90byB7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWNjLWVkaXQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiByZ2IoNiwgMTg0LCAyNTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWNjLWVkaXQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5mb2xsb3ctYnR0biB7XG4gIG1pbi13aWR0aDogOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC43NXJlbSAwcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uZm9sbG93LWJ0dG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIxLCAxNzIsIDg5KTtcbn1cblxuLm5vdC1mb2xsb3dpbmc6YWZ0ZXIge1xuICBjb250ZW50OiAnRm9sbG93J1xufVxuLmZvbGxvd2luZzphZnRlciB7XG4gIGNvbnRlbnQ6ICdGb2xsb3dpbmcnXG59XG4uZm9sbG93aW5nOmhvdmVyOmFmdGVyIHtcbiAgY29udGVudDogJ1VuZm9sbG93Jztcbn1cblxuLmZvbGxvd2luZzpob3ZlciAuZm9sbG93LWJ0dG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCA2MCwgMTIwKTtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.css']
            }]
    }], function () { return [{ type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { allowEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/profile/profile-edit/profile-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/profile-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/modules/profile/profile.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["imageSelectInput"];
function ProfileEditComponent_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_input_8_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onCancelSelectedImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileEditComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r4.uploadProgress, " %)");
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class ProfileEditComponent {
    constructor(profileService, modalService) {
        this.profileService = profileService;
        this.modalService = modalService;
        this.user = null;
    }
    ngOnInit() {
        this.avatarUrl = this.user.avatar.fullPath;
    }
    onImageSelect(event) {
        const image = event.target.files[0];
        // Set image file
        this.selectedImg = image;
        // Display image
        this.createFormData(image, url => { this.avatarUrl = url; });
    }
    onCancelSelectedImage() {
        this.avatarUrl = this.user.avatar.fullPath;
        this.selectedImg = null;
    }
    onSave(name, description) {
        // Validate
        if (!name || !description || this.uploadProgress)
            return;
        let updatedUser = { name, description };
        // Different subscription if avatar is updated too
        let subscription;
        if (this.selectedImg) {
            subscription = this.profileService.updateAvatar(this.selectedImg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((res) => {
                if (res.completed) {
                    const user = Object.assign(updatedUser, { avatar: res.avatar });
                    return this.profileService.updateUserData(user);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
                }
            }));
        }
        else {
            subscription = this.profileService.updateUserData(updatedUser);
        }
        subscription.subscribe(res => {
            if (res.hasOwnProperty('progress')) {
                this.uploadProgress = res.progress;
            }
            else if (res.success) {
                this.uploadProgress = false;
                this.modalService.emitResponse(true, res.data);
            }
        });
    }
    /**
     * Image functions
     */
    createFormData(file, cb) {
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
            // Clear file input
            this.imageSelect.nativeElement.value = '';
            cb(reader.result);
        };
    }
    tempFilter(media) {
        let response = {
            format: null,
            valid: null,
            message: null
        };
        const splittedFormat = media.type.match(/(\w+)\/(\w+)?/);
        response.format = splittedFormat[1];
        if (response.format === 'video') {
            response.valid = !(media.size > 15000000);
            response.message = 'Max size is 15MB';
        }
        else if (response.format === 'image') {
            response.valid = true;
        }
        else {
            response.valid = false;
            response.message = `'<strong>${splittedFormat[2]}</strong>' is not a valid format.`;
        }
        return response;
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], viewQuery: function ProfileEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageSelect = _t.first);
    } }, decls: 27, vars: 9, consts: [[1, "container"], ["type", "file", 2, "display", "none", 3, "change"], ["imageSelectInput", ""], [1, "row"], [1, "indicator"], [1, "data"], [1, "acc-photo", 3, "src"], ["class", "acc-photo-change", "type", "button", "value", "Cancel", 3, "click", 4, "ngIf"], ["type", "button", 1, "acc-photo-change", 3, "value", "click"], ["type", "text", 1, "acc-name", "input", 3, "value"], ["name", ""], [1, "acc-description", "input", 3, "value"], ["description", ""], [1, "btn-save", 3, "ngClass", "click"], [4, "ngIf"], ["type", "button", "value", "Cancel", 1, "acc-photo-change", 3, "click"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileEditComponent_Template_input_change_1_listener($event) { return ctx.onImageSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Avatar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileEditComponent_input_8_Template, 1, 0, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.onSave(_r2.value, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileEditComponent_span_26_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedImg ? "Select new image" : "Change profile image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.uploadProgress));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploadProgress);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n\n.indicator[_ngcontent-%COMP%] {\n  flex: 1;\n  \n  text-align: right;\n  margin-right: 1rem;\n}\n\n.data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex: 3;\n}\n\n.acc-photo[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n}\n\n.acc-photo-change[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 0.8rem;\n  padding: 0.75rem 0.5rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  background-color: transparent;\n  border: 2px solid var(--primary-color);\n  font-weight: bold;\n  color: var(--text-color);\n  outline: 0;\n}\n\n.acc-photo-change[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-solid-color);\n}\n\n.input[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 1rem;\n  border-radius: 16px;\n  outline: 0;\n  border: 0;\n  color: #495057;\n  letter-spacing: 0.2rem;\n  flex: 1;\n  font-weight: 500;\n}\n\n.acc-description[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 1.1rem;\n  padding: 0.75rem 2rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  background-color: var(--primary-color);\n  border: 0;\n  font-weight: bold;\n  color: var(--text-color);\n  flex: 1;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background-color:  var(--hover-solid-color);\n}\n\n.disabled[_ngcontent-%COMP%] {\n  background-color: var(--hover-empty-color);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsT0FBTztBQUNUOztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbmRpY2F0b3Ige1xuICBmbGV4OiAxO1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4OiAzO1xufVxuXG4uYWNjLXBob3RvIHtcbiAgd2lkdGg6IDQuNXJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFjYy1waG90by1jaGFuZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgb3V0bGluZTogMDtcbn1cbi5hY2MtcGhvdG8tY2hhbmdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItc29saWQtY29sb3IpO1xufVxuXG4uaW5wdXQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hY2MtZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDhyZW07XG59XG5cblxuLmJ0bi1zYXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmbGV4OiAxO1xufVxuLmJ0bi1zYXZlOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWhvdmVyLXNvbGlkLWNvbG9yKTtcbn1cblxuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZW1wdHktY29sb3IpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css']
            }]
    }], function () { return [{ type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }]; }, { imageSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageSelectInput']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/profile/profile-page/profile-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/profile/profile-page/profile-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/profile.service */ "./src/app/modules/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile-card/profile-card.component */ "./src/app/modules/profile/profile-card/profile-card.component.ts");
/* harmony import */ var _posts_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../posts/posts-list/posts-list.component */ "./src/app/modules/posts/posts-list/posts-list.component.ts");












function ProfilePageComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showOptPosts", false)("queryUrl", ctx_r2.queryUrl);
} }
function ProfilePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePageComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeTab("posts"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePageComponent_div_0_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeTab("replies"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Replies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePageComponent_div_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeTab("media"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfilePageComponent_div_0_div_12_Template, 2, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedTab === "posts" && "selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedTab === "replies" && "selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedTab === "media" && "selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.queryUrl);
} }
function ProfilePageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User not found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfilePageComponent {
    constructor(profileService, route, navbarService, modalService, locationService) {
        this.profileService = profileService;
        this.route = route;
        this.navbarService = navbarService;
        this.modalService = modalService;
        this.locationService = locationService;
        this.tabs = {
            posts: {
                name: 'Posts',
                queryUrl: (uid) => `/posts?owner=${uid}&parent[size]=0&childLevel=0`
            },
            replies: {
                name: 'Replies',
                queryUrl: (uid) => `/posts?owner=${uid}&parent[not][size]=0&childLevel=0`
            },
            media: {
                name: 'Media',
                queryUrl: (uid) => `/posts?owner=${uid}&media[gte][size]=1&childLevel=0`
            },
            getIdx: (name) => ['posts', 'replies', 'media'].indexOf(name),
            isValid: (name) => ['posts', 'replies', 'media'].includes(name)
        };
    }
    ngOnInit() {
        this.params$ = this.route.params.pipe(
        // Fix & set incorrect tab param
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(p => {
            // If incorrect, just select 'posts'
            // Later on, interacting with the menu it will be fixed automatically
            const tab = this.tabs.isValid(p.tab) ? p.tab : 'posts';
            // Set new tab
            this.selectedTab = tab;
            return { byData: p.byData, tab };
        }), 
        // USER
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(p => {
            var _a;
            // First load or new user -> let's get user data
            if (!this.user || ((_a = this.user) === null || _a === void 0 ? void 0 : _a.username) !== p.byData) {
                const byData = p.byData;
                const type = this.checkDataType(byData);
                return this.profileService.getUser(byData, type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
                    if (!res) {
                        this.locationService.setStack(['User not found']);
                        this.user = false;
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(profile => {
                    return {
                        first: !this.user,
                        tab: p.tab,
                        user: profile,
                    };
                }));
            }
            // If user altready loaded and this params changed
            // means that only tab has changed
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                    first: false,
                    tab: p.tab,
                    user: false,
                });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(p => {
            var _a;
            // If p.user exists means that the user is new and has to be updated
            if (p.user) {
                this.user = p.user;
                this.menu = this.getMenu(((_a = p.user) === null || _a === void 0 ? void 0 : _a.username) || this.user.username);
                this.menu.selChildIdx = this.tabs.getIdx(p.tab);
                this.navbarService.loadMenu(this.menu);
            }
        }), 
        // CONTENT
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(p => {
            var _a;
            this.queryUrl = this.tabs[p.tab].queryUrl(((_a = p.user) === null || _a === void 0 ? void 0 : _a._id) || this.user._id);
        })).subscribe(content => {
        });
    }
    changeTab(tab) {
        const itemIdx = this.tabs.getIdx(tab);
        this.navbarService.changeMenuItem(itemIdx);
    }
    checkDataType(byData) {
        switch (true) {
            case /^[a-z0-9]{24}$/.test(byData):
                return 0;
            case /^.+[0-9]{4}[A-Z]{1}$/.test(byData):
                return 1;
            default:
                return null;
        }
    }
    getMenu(uname) {
        return {
            root: 'Profile',
            name: [`@${uname}`],
            children: [
                { name: ['Posts'], activated: true, path: `/u/${uname}/`, icon: 'text_snippet' },
                { name: ['Replies'], activated: true, path: `/u/${uname}/replies`, icon: 'reply' },
                { name: ['Media'], activated: true, path: `/u/${uname}/media`, icon: 'movie' }
            ],
            activated: true,
            selChildIdx: 0
        };
    }
    ngOnDestroy() {
        this.params$.unsubscribe();
    }
    getFollowers() {
        const content = [
            { title: 'Followers' },
            { module: 'Profile', component: 'UsersList',
                params: { userId: this.user._id, populate: 'followers' } }
        ];
        const modal = { type: 'default', content };
        const location = { action: 'add', stack: [] };
        this.modalService.open(modal, location);
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["style", "padding: 2rem", 4, "ngIf"], [3, "user"], [1, "tabs-row", "noselect"], [1, "tab-container", 3, "ngClass", "click"], [1, "tab"], [3, "showOptPosts", "queryUrl"], [2, "padding", "2rem"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfilePageComponent_div_0_Template, 13, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfilePageComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_9__["ProfileCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _posts_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"]], styles: [".tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1.5px solid var(--primary-color);\n  border-bottom: 1.5px solid var(--primary-color);\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  cursor: pointer;\n}\n\n.tab-container[_ngcontent-%COMP%]    + .tab-container[_ngcontent-%COMP%] {\n  border-left: 1.5px solid var(--primary-color);\n}\n\n.tab-container[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-empty-color);\n}\n\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: var(--hover-empty-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnRhYi1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWItY29udGFpbmVyICsgLnRhYi1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogMS41cHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi50YWItY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZW1wdHktY29sb3IpO1xufVxuXG4udGFiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZW1wdHktY29sb3IpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.css']
            }]
    }], function () { return [{ type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/profile/profile-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/modules/profile/profile-page/profile-page.component.ts");


// Components



const routes = [
    {
        path: ':byData',
        redirectTo: ':byData/',
        pathMatch: 'full'
    },
    {
        path: ':byData/:tab',
        component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__["ProfilePageComponent"]
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/profile/profile-routing.module.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "./src/app/modules/profile/profile-card/profile-card.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/modules/profile/profile-page/profile-page.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/modules/profile/users-list/users-list.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/modules/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../posts/posts.module */ "./src/app/modules/posts/posts.module.ts");









class ProfileModule {
}
ProfileModule.components = {
    ProfileCardComponent: _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCardComponent"],
    UsersListComponent: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"],
    ProfileEditComponent: _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEditComponent"]
};
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
            _posts_posts_module__WEBPACK_IMPORTED_MODULE_7__["PostsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCardComponent"], _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"], _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
        _posts_posts_module__WEBPACK_IMPORTED_MODULE_7__["PostsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCardComponent"], _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_4__["ProfilePageComponent"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"], _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                    _posts_posts_module__WEBPACK_IMPORTED_MODULE_7__["PostsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/profile/profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/profile/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/upload-file.service */ "./src/app/services/upload-file.service.ts");










class ProfileService {
    constructor(api, tokenService, location, router, uploadFile) {
        this.api = api;
        this.tokenService = tokenService;
        this.location = location;
        this.router = router;
        this.uploadFile = uploadFile;
        this.uFollowing = [];
        if (this.tokenService.isLogged()) {
            this.uid = this.tokenService.getUserId();
        }
    }
    // Get user data
    getUser(byData, type) {
        if (type === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
        // // If used 'me', replace by username
        // if (byData === 'me') {
        //   const url = this.router.url.replace('me', user.username);
        //   this.location.go(url);
        // }
        const allPaths = [
            (uid) => `/users/${uid}`,
            (uname) => `/users/u/${uname}`
        ];
        const path = allPaths[type](byData);
        return this.api.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(profile => {
            // If uid used then change url by username
            if (type === 0) {
                const url = this.router.url.replace(byData, profile.username);
                this.location.go(url);
            }
        }));
    }
    getFollows(uid, populate) {
        return this.api.get(`/users/${uid}/followList/${populate}`);
    }
    isFollowing(followerUID) {
        if (followerUID === this.uid) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([false, true]);
        }
        else if (this.uid) {
            return this.getFollows(this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(f => [f.following.includes(followerUID), false]));
        }
        else {
            // Not following and not owner
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([false, false]);
        }
    }
    isFollowingFromList(uid, populate) {
        // Get populated list
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            f: this.getFollows(uid, populate),
            u: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["iif"])(() => this.uid, this.getFollows(this.uid), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ following: [] }))
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(r => {
            const uFwing = r.u.following;
            const fList = r.f[populate];
            return fList.reduce((acc, f) => {
                return acc.concat({
                    isOwner: f._id === this.uid,
                    isFollowing: uFwing.includes(f._id),
                    user: f
                });
            }, []);
        }));
    }
    follow(uid) {
        return this.api.get(`/users/${uid}/follow`);
    }
    updateUserData(updatedUser) {
        return this.api.post('/users/updateProfile', { updatedUser });
    }
    updateAvatar(newImage) {
        const fd = new FormData();
        fd.append('avatar', newImage);
        const opt = this.uploadFile.getOptions();
        // Upload all images to get their url
        return this.api.post('/files/updateAvatar', fd, opt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(event => {
            const res = this.uploadFile.getProgress(event);
            if (!res.completedUpload) {
                return res;
            }
            else {
                const avatarPath = res.data;
                const avatar = {
                    filename: avatarPath,
                    relativePath: `/a/${avatarPath}`,
                    fullPath: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/a/${avatarPath}`
                };
                return {
                    completed: true,
                    message: res.message,
                    avatar
                };
            }
        }));
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_8__["UploadFileService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_8__["UploadFileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/profile/users-list/users-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/profile/users-list/users-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/modules/profile/profile.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UsersListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_ng_container_1_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_ng_container_1_div_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.follow(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.isFollowing ? "following" : "not-following");
} }
function UsersListComponent_ng_container_1_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_ng_container_1_div_1_hr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 12);
} }
function UsersListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_ng_container_1_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.go(item_r3.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_ng_container_1_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r3 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.go(item_r3.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersListComponent_ng_container_1_div_1_button_8_Template, 1, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersListComponent_ng_container_1_div_1_ng_template_9_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UsersListComponent_ng_container_1_div_1_hr_11_Template, 1, 0, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isLast_r5 = ctx.last;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.user.avatar.relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", item_r3.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.isOwner)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r5);
} }
function UsersListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersListComponent_ng_container_1_div_1_Template, 12, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.list);
} }
class UsersListComponent {
    constructor(profileService, modalService, navbarService, router) {
        this.profileService = profileService;
        this.modalService = modalService;
        this.navbarService = navbarService;
        this.router = router;
        this.userId = null;
        this.populate = null;
        this.count = 0;
    }
    ngOnInit() {
        this.profileService.isFollowingFromList(this.userId, this.populate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(list => {
            this.list = list;
        });
    }
    follow(item) {
        item.isFollowing = !item.isFollowing;
        item.user.count.followers += !item.isFollowing ? -1 : 1;
        this.count += !item.isFollowing ? -1 : 1;
        this.profileService.follow(item.user._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe();
    }
    go(uid) {
        this.modalService.forceClose();
        this.navbarService.go(`/u/${uid}/`);
    }
    ngOnDestroy() {
        this.modalService.emitResponse(false, this.count);
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "acc-photo", 3, "src", "click"], [1, "acc-names", 3, "click"], [1, "acc-name"], [1, "acc-username"], ["class", "follow-bttn", 3, "ngClass", "click", 4, "ngIf", "ngIfElse"], ["itIsYou", ""], ["class", "divider", 4, "ngIf"], [1, "follow-bttn", 3, "ngClass", "click"], [1, "push-right"], [1, "divider"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersListComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersListComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list == null ? null : ctx.list.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.acc-photo[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background-color: var(--hover-color);\n  cursor: pointer;\n}\n\n.follow-bttn[_ngcontent-%COMP%] {\n  outline: 0;\n  margin-left: auto;\n  margin-right: 1rem;\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: 0.6rem 2rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n  border: 0;\n  color: var(--text-color);\n}\n\n.follow-bttn[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.acc-names[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n}\n\n.acc-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  font-weight: bold;\n  margin-right: 0.3rem;\n  cursor: pointer;\n}\n\n.acc-username[_ngcontent-%COMP%] {\n  color: rgb(136, 153, 166);\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary-color);\n}\n\n.push-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 3rem;\n}\n\n.not-following[_ngcontent-%COMP%]:after {\n  content: 'Follow'\n}\n\n.following[_ngcontent-%COMP%]:after {\n  content: 'Following'\n}\n\n.following[_ngcontent-%COMP%]:hover:after {\n  content: 'Unfollow';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjYy1waG90byB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb2xsb3ctYnR0biB7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC42cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4uZm9sbG93LWJ0dG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIxLCAxNzIsIDg5KTtcbn1cblxuLmFjYy1uYW1lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLmFjYy1uYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWNjLXVzZXJuYW1lIHtcbiAgY29sb3I6IHJnYigxMzYsIDE1MywgMTY2KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5wdXNoLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cblxuLm5vdC1mb2xsb3dpbmc6YWZ0ZXIge1xuICBjb250ZW50OiAnRm9sbG93J1xufVxuLmZvbGxvd2luZzphZnRlciB7XG4gIGNvbnRlbnQ6ICdGb2xsb3dpbmcnXG59XG4uZm9sbG93aW5nOmhvdmVyOmFmdGVyIHtcbiAgY29udGVudDogJ1VuZm9sbG93Jztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-list',
                templateUrl: './users-list.component.html',
                styleUrls: ['./users-list.component.css']
            }]
    }], function () { return [{ type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }, { type: src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-profile-profile-module-es2015.js.map