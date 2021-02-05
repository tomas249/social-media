function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-notifications-notifications-module"], {
  /***/
  "./src/app/modules/notifications/notifications-list/notifications-list.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/notifications/notifications-list/notifications-list.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: NotificationsListComponent */

  /***/
  function srcAppModulesNotificationsNotificationsListNotificationsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsListComponent", function () {
      return NotificationsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../notifications.service */
    "./src/app/modules/notifications/notifications.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/navbar/navbar.service */
    "./src/app/shared/navbar/navbar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../pipes/date-ago.pipe */
    "./src/app/pipes/date-ago.pipe.ts");

    function NotificationsListComponent_div_0_div_1_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsListComponent_div_0_div_1_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var notification_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.markAsRead(notification_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark as read");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NotificationsListComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsListComponent_div_0_div_1_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var notification_r3 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.goToUser(notification_r3.responsible._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "dateAgo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotificationsListComponent_div_0_div_1_button_7_Template, 2, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", notification_r3.responsible.name, " \xA0(@", notification_r3.responsible.username, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", notification_r3.text, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, notification_r3.createdAt), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !notification_r3.read);
      }
    }

    function NotificationsListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsListComponent_div_0_div_1_Template, 8, 7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notificationsList);
      }
    }

    function NotificationsListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You do not have notifications\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NotificationsListComponent = /*#__PURE__*/function () {
      function NotificationsListComponent(notifications, route, navbarService) {
        _classCallCheck(this, NotificationsListComponent);

        this.notifications = notifications;
        this.route = route;
        this.navbarService = navbarService;
        this.isLogged = false;
        this.notificationsCount = 2;
      }

      _createClass(NotificationsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.notificationsFilter = this.route.snapshot.data['filter'];
          this.notifications.getNotifications(this.notificationsFilter === 'unread').subscribe(function (res) {
            _this.notificationsList = res.reverse();
          });
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(notification) {
          if (this.notificationsFilter === 'all') {
            notification.read = true;
          } else {
            this.notificationsList = this.notificationsList.filter(function (n) {
              return n !== notification;
            });
          }

          this.notifications.markAsRead(notification._id).subscribe();
        }
      }, {
        key: "goToUser",
        value: function goToUser(uid) {
          this.navbarService.go("/u/".concat(uid));
        }
      }]);

      return NotificationsListComponent;
    }();

    NotificationsListComponent.ɵfac = function NotificationsListComponent_Factory(t) {
      return new (t || NotificationsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]));
    };

    NotificationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsListComponent,
      selectors: [["app-notifications-list"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "no-list", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "notification"], [1, "responsible", 3, "click"], ["class", "read-button", 3, "click", 4, "ngIf"], [1, "read-button", 3, "click"], [1, "no-list"]],
      template: function NotificationsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationsListComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsListComponent_div_1_Template, 2, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.notificationsList == null ? null : ctx.notificationsList.length) === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["DateAgoPipe"]],
      styles: [".notification[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 0.15rem solid var(--primary-color);\n}\n\n.read-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--primary-color);\n  padding: 1rem;\n  margin-left: auto;\n  border-radius: 400px;\n  color: var(--text-color);\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.read-button[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.responsible[_ngcontent-%COMP%] {\n  color: rgb(6, 184, 255);\n  cursor: pointer;\n  z-index: 5;\n}\n\n.responsible[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.acc-photo[_ngcontent-%COMP%] {\n  width: 2.9rem;\n  height: 2.9rem;\n  border-radius: 50%;\n  background-color: red;\n  margin-right: 0.8rem;\n}\n\n.acc-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 5;\n}\n\n.no-list[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMtbGlzdC9ub3RpZmljYXRpb25zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy1saXN0L25vdGlmaWNhdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5yZWFkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDQwMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZWFkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjEsIDE3MiwgODkpO1xufVxuXG4ucmVzcG9uc2libGUge1xuICBjb2xvcjogcmdiKDYsIDE4NCwgMjU1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA1O1xufVxuLnJlc3BvbnNpYmxlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYWNjLXBob3RvIHtcbiAgd2lkdGg6IDIuOXJlbTtcbiAgaGVpZ2h0OiAyLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcbn1cblxuLmFjYy1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbn1cblxuLm5vLWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications-list',
          templateUrl: './notifications-list.component.html',
          styleUrls: ['./notifications-list.component.css']
        }]
      }], function () {
        return [{
          type: _notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/notifications/notifications-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/notifications/notifications-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: NotificationsRoutingModule */

  /***/
  function srcAppModulesNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
      return NotificationsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notifications-list/notifications-list.component */
    "./src/app/modules/notifications/notifications-list/notifications-list.component.ts"); // Components


    var routes = [// { path: ':notificationsFilter', component: NotificationsListComponent },
    {
      path: 'all',
      component: _notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsListComponent"],
      data: {
        filter: 'all'
      }
    }, {
      path: 'unread',
      component: _notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsListComponent"],
      data: {
        filter: 'unread'
      }
    }];

    var NotificationsRoutingModule = function NotificationsRoutingModule() {
      _classCallCheck(this, NotificationsRoutingModule);
    };

    NotificationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotificationsRoutingModule
    });
    NotificationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotificationsRoutingModule_Factory(t) {
        return new (t || NotificationsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/notifications/notifications.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/notifications/notifications.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificationsModule */

  /***/
  function srcAppModulesNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
      return NotificationsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/modules/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications-list/notifications-list.component */
    "./src/app/modules/notifications/notifications-list/notifications-list.component.ts");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var NotificationsModule = function NotificationsModule() {
      _classCallCheck(this, NotificationsModule);
    };

    NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotificationsModule
    });
    NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotificationsModule_Factory(t) {
        return new (t || NotificationsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationsRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsModule, {
        declarations: [_notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationsRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_notifications_list_notifications_list_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationsRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/notifications/notifications.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/notifications/notifications.service.ts ***!
    \****************************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppModulesNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService(api) {
        _classCallCheck(this, NotificationsService);

        this.api = api;
      }

      _createClass(NotificationsService, [{
        key: "getNotifications",
        value: function getNotifications() {
          var onlyUnread = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var queryParam = '?onlyUnread=' + onlyUnread;
          return this.api.get('/notifications' + queryParam);
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(notificationId) {
          return this.api.get('/notifications/read/' + notificationId);
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ɵfac = function NotificationsService_Factory(t) {
      return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationsService,
      factory: NotificationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/date-ago.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/date-ago.pipe.ts ***!
    \****************************************/

  /*! exports provided: DateAgoPipe */

  /***/
  function srcAppPipesDateAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
      return DateAgoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateAgoPipe = /*#__PURE__*/function () {
      function DateAgoPipe() {
        _classCallCheck(this, DateAgoPipe);
      }

      _createClass(DateAgoPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (value) {
            var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
              return 'Just now';
            var intervals = {
              'year': 31536000,
              'month': 2592000,
              'week': 604800,
              'day': 86400,
              'hour': 3600,
              'minute': 60,
              'second': 1
            };
            var counter;

            for (var i in intervals) {
              counter = Math.floor(seconds / intervals[i]);
              if (counter > 0) if (counter === 1) {
                return counter + ' ' + i + ' ago'; // singular (1 day ago)
              } else {
                return counter + ' ' + i + 's ago'; // plural (2 days ago)
              }
            }
          }

          return value;
        }
      }]);

      return DateAgoPipe;
    }();

    DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
      return new (t || DateAgoPipe)();
    };

    DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dateAgo",
      type: DateAgoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'dateAgo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-ago.pipe */
    "./src/app/pipes/date-ago.pipe.ts");
    /* harmony import */


    var _user_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.pipe */
    "./src/app/pipes/user.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"], _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]],
        exports: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"], _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"], _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]],
          exports: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"], _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/user.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/user.pipe.ts ***!
    \************************************/

  /*! exports provided: UserPipe */

  /***/
  function srcAppPipesUserPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPipe", function () {
      return UserPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserPipe = /*#__PURE__*/function () {
      function UserPipe() {
        _classCallCheck(this, UserPipe);
      }

      _createClass(UserPipe, [{
        key: "transform",
        value: function transform(value) {
          return '@' + value;
        }
      }]);

      return UserPipe;
    }();

    UserPipe.ɵfac = function UserPipe_Factory(t) {
      return new (t || UserPipe)();
    };

    UserPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "user",
      type: UserPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'user'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=src-app-modules-notifications-notifications-module-es5.js.map