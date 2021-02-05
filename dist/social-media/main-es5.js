function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     *  Load all layouts in a lazy way
     */


    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | layouts-main-main-module */
        "layouts-main-main-module").then(__webpack_require__.bind(null,
        /*! ./layouts/main/main.module */
        "./src/app/layouts/main/main.module.ts")).then(function (m) {
          return m.MainModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sm-refact';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/api-http.interceptor */
    "./src/app/services/api-http.interceptor.ts"); // Modules
    // Services


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__["ApiHttpInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__["ApiHttpInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api-http.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/api-http.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: ApiHttpInterceptor */

  /***/
  function srcAppServicesApiHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiHttpInterceptor", function () {
      return ApiHttpInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");
    /* harmony import */


    var _shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/navbar/navbar.service */
    "./src/app/shared/navbar/navbar.service.ts");

    var ApiHttpInterceptor = /*#__PURE__*/function () {
      function ApiHttpInterceptor(token, modalService, navbarService) {
        _classCallCheck(this, ApiHttpInterceptor);

        this.token = token;
        this.modalService = modalService;
        this.navbarService = navbarService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(ApiHttpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          // Exclude some api requests
          var login = '/api/auth/login';
          var register = '/api/auth/register';

          if (req.url.search(login) != -1 || req.url.search(register) != -1) {
            return next.handle(req);
          } // Send request with AccessToken


          if (this.token.getAccessToken() && this.token.getRefreshToken()) {
            req = this.addToken(req, this.token.getAccessToken());
          } else {
            this.token.removeTokens();
          }

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            // if (!navigator.onLine) {
            //   return throwError({error: 'Could not get response. Check your connection.'});
            // }
            // else {
            //   return throwError(err);
            // }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
              return _this.handle401Error(req, next);
            } else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.error.message === 'Invalid RefreshToken') {
              _this.token.removeTokens();

              _this.navbarService.go('/explore');

              var content = [{
                title: 'Session revoked'
              }, {
                html: "<p>Your sessions was revoked, login again please</p>"
              }];
              var modal = {
                type: 'default',
                content: content
              };
              var location = {
                action: 'set',
                stack: ['Error']
              };

              _this.modalService.open(modal, location);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Session revoked');
            } else {
              var _content = [{
                title: 'Error was found'
              }, {
                html: '<p>Got the following error:</p>'
              }, {
                html: "<p>".concat(JSON.stringify(err.error.message), "</p>")
              }];
              var _modal = {
                type: 'default',
                content: _content
              };
              var _location = {
                action: 'set',
                stack: ['Unhandled Error']
              };

              _this.modalService.open(_modal, _location);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error.message);
            }
          }));
        }
      }, {
        key: "addToken",
        value: function addToken(request, token) {
          return request.clone({
            setHeaders: {
              'Authorization': "Bearer ".concat(token)
            }
          });
        }
      }, {
        key: "handle401Error",
        value: function handle401Error(request, next) {
          var _this2 = this;

          if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.token.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
              _this2.isRefreshing = false;

              _this2.refreshTokenSubject.next(res.accessToken);

              return next.handle(_this2.addToken(request, res.accessToken));
            }));
          } else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (res) {
              return res != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
              return next.handle(_this2.addToken(request, res.accessToken));
            }));
          }
        }
      }]);

      return ApiHttpInterceptor;
    }();

    ApiHttpInterceptor.ɵfac = function ApiHttpInterceptor_Factory(t) {
      return new (t || ApiHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]));
    };

    ApiHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiHttpInterceptor,
      factory: ApiHttpInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }, {
          type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
        }, {
          type: _shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, modalService) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.modalService = modalService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api';
      }

      _createClass(ApiService, [{
        key: "post",
        value: function post(url, payload) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.http.post("".concat(this.baseUrl).concat(url), payload, options);
        }
      }, {
        key: "get",
        value: function get(url) {
          return this.http.get("".concat(this.baseUrl).concat(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.data || res;
          }));
        }
      }, {
        key: "patch",
        value: function patch(url, payload) {
          return this.http.patch("".concat(this.baseUrl).concat(url), payload);
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          return this.http["delete"]("".concat(this.baseUrl).concat(url));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(modalService, err) {
          var content = [{
            title: 'Error'
          }, {
            html: '<p>Got the following error:</p>'
          }];

          for (var key in err) {
            var mssg = "<p><strong>".concat(key, "</strong>: ").concat(JSON.stringify(err[key]), "</p>");
            content.push({
              html: mssg
            });
          }

          var modal = {
            type: 'extended',
            content: content
          };
          var location = {
            action: 'set',
            stack: ['Unhandled Error']
          };
          modalService.open(modal, location);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LocationService = /*#__PURE__*/function () {
      function LocationService() {
        _classCallCheck(this, LocationService);

        this._states = [];
        this._location = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this._locationStack = [];
        this.location$ = this._location.asObservable();
      }

      _createClass(LocationService, [{
        key: "joinStackAndSend",
        value: function joinStackAndSend(stack) {
          var location = stack.join(' > ');

          this._location.next(location);
        }
      }, {
        key: "setStack",
        value: function setStack(stack) {
          if (!stack) return;
          this._locationStack = stack;
          this.joinStackAndSend(this._locationStack);
        }
      }, {
        key: "addItemToStack",
        value: function addItemToStack(stack) {
          this._locationStack = this._locationStack.concat(stack);
          this.joinStackAndSend(this._locationStack);
        }
      }, {
        key: "changeStackByAction",
        value: function changeStackByAction(config) {
          var _this3 = this;

          var action = config.action,
              stack = config.stack,
              remove = config.remove;
          if (action === 'none') return; // Remove stack if specified

          if (remove) {
            this.removeItemFromStack(remove);
          }

          var actions = {
            set: function set(stack) {
              return _this3.setStack(stack);
            },
            add: function add(stack) {
              return _this3.addItemToStack(stack);
            }
          };
          actions[action](stack);
        }
      }, {
        key: "removeItemFromStack",
        value: function removeItemFromStack() {
          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          this._locationStack.splice(this._locationStack.length - count);
        }
      }, {
        key: "saveState",
        value: function saveState() {
          // Must be a copy because otherwise methods like pop, slice...
          // will affect the saved state
          this._states.push(_toConsumableArray(this._locationStack));
        }
      }, {
        key: "restoreState",
        value: function restoreState() {
          this._locationStack = this._states[this._states.length - 1];
          this.joinStackAndSend(this._locationStack);

          this._states.pop();
        }
      }]);

      return LocationService;
    }();

    LocationService.ɵfac = function LocationService_Factory(t) {
      return new (t || LocationService)();
    };

    LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var TokenService = /*#__PURE__*/function () {
      function TokenService(api) {
        _classCallCheck(this, TokenService);

        this.api = api;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.user$ = this._user.asObservable(); // Check tokens existence

        var refreshToken = localStorage.getItem('refreshToken');
        var accessToken = localStorage.getItem('accessToken');

        if (refreshToken && accessToken) {
          var storedUserData = this.getUserData();

          this._user.next(storedUserData);
        } else if (!refreshToken || !accessToken) {
          this.removeTokens();
        }
      }

      _createClass(TokenService, [{
        key: "setTokens",
        value: function setTokens(refreshToken, accessToken) {
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('accessToken', accessToken);
          var userJWT = atob(accessToken.split('.')[1]);
          var userParsed = JSON.stringify(JSON.parse(userJWT));
          localStorage.setItem('userData', userParsed);

          this._user.next(JSON.parse(userJWT));
        }
      }, {
        key: "removeTokens",
        value: function removeTokens() {
          this._user.next(false);

          localStorage.removeItem('refreshToken');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userData');
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          if (this.isLogged()) {
            return JSON.parse(localStorage.getItem('userData'));
          } else {
            return false;
          }
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem('refreshToken');
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return localStorage.getItem('accessToken');
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return !!this.getAccessToken();
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          if (this.isLogged()) {
            return this.getUserData().id;
          } else {
            return null;
          }
        }
      }, {
        key: "isPublisher",
        value: function isPublisher() {
          var userData = this.getUserData();

          if (userData) {
            return userData.role == 'publisher' || userData.role == 'admin';
          } else {
            return false;
          }
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          var userData = this.getUserData();

          if (userData) {
            return userData.role == 'admin';
          } else {
            return false;
          }
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var payload = {
            refreshToken: this.getRefreshToken()
          };
          return this.api.post('/tokens/refresh', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.message;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            localStorage.setItem('accessToken', res.accessToken);
          }));
        }
      }, {
        key: "updateData",
        value: function updateData(newData) {
          var currentUser = this.getUserData();
          var newUser = Object.assign(currentUser, newData);
          localStorage.setItem('userData', JSON.stringify(newUser));

          this._user.next(newUser);
        }
      }]);

      return TokenService;
    }();

    TokenService.ɵfac = function TokenService_Factory(t) {
      return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenService,
      factory: TokenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modal/modal.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/modal/modal.service.ts ***!
    \***********************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppSharedModalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.service */
    "./src/app/shared/navbar/navbar.service.ts");

    var ModalService = /*#__PURE__*/function () {
      function ModalService(locationService, navbarService) {
        _classCallCheck(this, ModalService);

        this.locationService = locationService;
        this.navbarService = navbarService;
        /*
         *         / Type - Core
         *        /----------/
         * Service - Type - Core
         *    \\  \----------/
         *     \\--------\
         *      \ Type - Core
         *
         * - Service stores TypeModals & its CoreComponent
         * - Core stores same type instances
         *
         * RULES:
         *  - You can concat different types:
         *    Ex: default, default, extended
         *
         *  - You cannot intercalate different types:
         *    Ex: default, extended, default
        */

        this._responses = [];
        this._modals = {};
        this._actives = {
          list: [],
          getCurrent: function getCurrent() {
            return this.list[this.list.length - 1];
          }
        }; // Store only type name
      }
      /**
       *
       * CLIENT CONTROLS
       *
       */
      // open(type, content, params?, location?, menu?) {


      _createClass(ModalService, [{
        key: "open",
        value: function open(modal, location, responseCb) {
          /*
              Check actives:
                -empty:                            (3)loadContent, (4)displayNew
                - same:            (2)saveContent, (3)loadContent
                - diff: (1)hideOld,                (3)loadContent, (4)displayNew
                   Before step 3, save location state
              Current modal becomes old
              Requested modal becomes new
           */
          var oldType = this._actives.getCurrent();

          var oldModal = this._modals[oldType];
          var newModal = this._modals[modal.type]; // (1) Hide old - { different }

          if (!modal.keepOpened && oldType && oldType !== modal.type) {
            // oldModal.wrapper.display = false;
            oldModal.wrapper.hideModal();
          } // (2) Save old content - { same }


          if (oldType === modal.type) {
            oldModal.core.saveState();
          } // (*3) Save current location before loading new modal


          this.locationService.saveState();
          this.locationService.changeStackByAction(location); // (*3) Save navbar menu sate

          this.navbarService.saveState(); // (3) Load new content & set as active - { empty, same, different }

          newModal.core.loadContent(modal.content);

          this._actives.list.push(modal.type); // (4) Display wrapper- { empty, different }


          if (!oldType || oldType !== modal.type) {
            // Assign params
            newModal.wrapper = Object.assign(newModal.wrapper, modal.params); // newModal.wrapper.display = true;

            newModal.wrapper.displayModal();
          } // Save callback fn that will be used on emitResponse


          this._responses.push(responseCb);
        }
      }, {
        key: "changeComponent",
        value: function changeComponent(componentName) {
          var type = this._actives.getCurrent();

          var modal = this._modals[type];
          modal.core.changeComponent(componentName);
        }
      }, {
        key: "emitResponse",
        value: function emitResponse(end) {
          var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          // If no modal opened then return
          if (this._actives.list.length === 0) return;

          if (!end) {
            var currentType = this._actives.getCurrent();

            var currentModal = this._modals[currentType];
            currentModal.wrapper.hideModal(); // Display if previous modal exists

            var previousType = this._actives.list[this._actives.list.length - 2];

            if (previousType) {
              var previousModal = this._modals[previousType];
              previousModal.wrapper.displayModal();
            }
          } // Check if response callback fn was given


          var fn = this._responses[this._responses.length - 1]; // If there is res cb fn and respose, run it

          if (fn && res !== null) fn(res); // If it is last emit, then close modal

          if (end) {
            var type = this._actives.getCurrent();

            var modal = this._modals[type];
            modal.core.onClose();
          }
        }
      }, {
        key: "forceClose",
        value: function forceClose() {
          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          // Count == 0 -> all list
          var typesList = count === 0 ? this._actives.list : this._actives.list.slice(this._actives.list.length - count).reverse(); // Important to use a copy, because we are working with a
          // property that after the first iteration will be modified

          for (var _i = 0, _arr = _toConsumableArray(typesList); _i < _arr.length; _i++) {
            var type = _arr[_i];
            // If nothing to close, return
            if (!type) return; // Trigger onClose()
            // Once the core is clear, it will trigger close()
            // from this service

            var modal = this._modals[type];
            modal.core.onClose();
          }
        }
      }, {
        key: "closeByType",
        value: function closeByType(type) {
          if (!this._actives.list.includes(type)) return;
          var modal = this._modals[type];
          modal.core.onClose();
        }
        /**
         *
         * TYPEcomponent CONTROLS
         *
         */

      }, {
        key: "initType",
        value: function initType(type, component) {
          this._modals[type] = {
            name: type,
            wrapper: component
          };
        } // changeContent(newContent, index?) {
        //   const currentType = this._actives.getCurrent();
        //   if (!currentType) return;
        //   console.log(currentType);
        //   this._modals[currentType].core.changeContent(newContent, index);
        // }

        /**
         *
         * COREcomponent CONTROLS
         *
         */

      }, {
        key: "initCore",
        value: function initCore(parentType, coreComponent) {
          this._modals[parentType]['core'] = coreComponent;
        }
      }, {
        key: "close",
        value: function close(type) {
          // If nothing to close, return
          if (!type) return; // Remove response callback

          this._responses.pop(); // Restore location & menu


          this.locationService.restoreState();
          this.navbarService.restoreState();

          this._actives.list.pop();

          this._responses.pop();

          var previousType = this._actives.getCurrent();

          var previousModal = this._modals[previousType];
          var currentModal = this._modals[type];

          if (!previousType) {
            // currentModal.wrapper.display = false;
            currentModal.wrapper.hideModal();
          } else if (previousType === type) {
            previousModal.core.restoreState();
          } else if (previousType !== type) {
            // currentModal.wrapper.display = false;
            currentModal.wrapper.hideModal(); // previousModal.wrapper.display = true;

            previousModal.wrapper.displayModal();
          }
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]));
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]
        }, {
          type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navbar/navbar.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/navbar/navbar.service.ts ***!
    \*************************************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppSharedNavbarNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/location.service */
    "./src/app/services/location.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarService = /*#__PURE__*/function () {
      function NavbarService(locationService, router) {
        _classCallCheck(this, NavbarService);

        this.locationService = locationService;
        this.router = router;
      }

      _createClass(NavbarService, [{
        key: "init",
        value: function init(component) {
          this.navcomponent = component;
        }
      }, {
        key: "loadMenu",
        value: function loadMenu(menu, current) {
          // Check if menu has components or paths
          var idx;
          var locStack = [];

          if (current) {
            if (!menu.trigger.includes(current.component)) return;
            idx = menu.children.map(function (c) {
              return c.component;
            }).indexOf(current.component);
          } else {
            idx = menu.selChildIdx; // If root name provided, use it do define root location

            if (menu.name) {
              locStack.push(menu.name);
            }
          }

          this.navcomponent.loadCustomMenu(menu.children, idx); // Set location only if it is not a reactivation

          if (menu.activated) {
            locStack.push(menu.children[idx].name);
            this.locationService.setStack(locStack);
          }
        }
      }, {
        key: "changeMenuItem",
        value: function changeMenuItem(menuItemIdx) {
          this.navcomponent.changeMenuItem(menuItemIdx);
        }
      }, {
        key: "saveState",
        value: function saveState() {
          this.navcomponent.saveState();
        }
      }, {
        key: "restoreState",
        value: function restoreState() {
          this.navcomponent.restoreState();
        }
      }, {
        key: "compareAndSelect",
        value: function compareAndSelect(route) {
          var skipMenu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.navcomponent.simulation = true;
          var url = this.navcomponent.detectUrl(route);
          this.navcomponent.changeItem(url, skipMenu);
        }
      }, {
        key: "go",
        value: function go(path) {
          var skipMenu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          // Navigate
          this.router.navigate([path]);
          var url = this.navcomponent.detectUrl(path); // Change selected navbar item and load menu list

          this.navcomponent.changeItem(url, skipMenu); // Change location

          this.locationService.setStack(this.navcomponent.getPathNames(url));
        }
      }]);

      return NavbarService;
    }();

    NavbarService.ɵfac = function NavbarService_Factory(t) {
      return new (t || NavbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavbarService,
      factory: NavbarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/tomas/Documents/webDev/social-media/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map