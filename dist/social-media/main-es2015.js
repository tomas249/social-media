(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




/**
 *  Load all layouts in a lazy way
 */
const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | layouts-main-main-module */ "layouts-main-main-module").then(__webpack_require__.bind(null, /*! ./layouts/main/main.module */ "./src/app/layouts/main/main.module.ts"))
            .then(m => m.MainModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'sm-refact';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api-http.interceptor */ "./src/app/services/api-http.interceptor.ts");




// Modules

// Services


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__["ApiHttpInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _services_api_http_interceptor__WEBPACK_IMPORTED_MODULE_5__["ApiHttpInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api-http.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api-http.interceptor.ts ***!
  \**************************************************/
/*! exports provided: ApiHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHttpInterceptor", function() { return ApiHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var _shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");








class ApiHttpInterceptor {
    constructor(token, modalService, navbarService) {
        this.token = token;
        this.modalService = modalService;
        this.navbarService = navbarService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        // Exclude some api requests
        const login = '/api/auth/login';
        const register = '/api/auth/register';
        if (req.url.search(login) != -1 ||
            req.url.search(register) != -1) {
            return next.handle(req);
        }
        // Send request with AccessToken
        if (this.token.getAccessToken() && this.token.getRefreshToken()) {
            req = this.addToken(req, this.token.getAccessToken());
        }
        else {
            this.token.removeTokens();
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // if (!navigator.onLine) {
            //   return throwError({error: 'Could not get response. Check your connection.'});
            // }
            // else {
            //   return throwError(err);
            // }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                return this.handle401Error(req, next);
            }
            else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] &&
                err.error.message === 'Invalid RefreshToken') {
                this.token.removeTokens();
                this.navbarService.go('/explore');
                const content = [
                    { title: 'Session revoked' },
                    { html: `<p>Your sessions was revoked, login again please</p>` }
                ];
                const modal = { type: 'default', content };
                const location = { action: 'set', stack: ['Error'] };
                this.modalService.open(modal, location);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Session revoked');
            }
            else {
                const content = [
                    { title: 'Error was found' },
                    { html: '<p>Got the following error:</p>' },
                    { html: `<p>${JSON.stringify(err.error.message)}</p>` }
                ];
                const modal = { type: 'default', content };
                const location = { action: 'set', stack: ['Unhandled Error'] };
                this.modalService.open(modal, location);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error.message);
            }
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.token.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(res.accessToken);
                return next.handle(this.addToken(request, res.accessToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(res => res != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(res => {
                return next.handle(this.addToken(request, res.accessToken));
            }));
        }
    }
}
ApiHttpInterceptor.ɵfac = function ApiHttpInterceptor_Factory(t) { return new (t || ApiHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"])); };
ApiHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiHttpInterceptor, factory: ApiHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }, { type: _shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");







class ApiService {
    constructor(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api';
    }
    post(url, payload, options = {}) {
        return this.http.post(`${this.baseUrl}${url}`, payload, options);
    }
    get(url) {
        return this.http.get(`${this.baseUrl}${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.data || res));
    }
    patch(url, payload) {
        return this.http.patch(`${this.baseUrl}${url}`, payload);
    }
    delete(url) {
        return this.http.delete(`${this.baseUrl}${url}`);
    }
    errorHandler(modalService, err) {
        const content = [
            { title: 'Error' },
            { html: '<p>Got the following error:</p>' },
        ];
        for (let key in err) {
            const mssg = `<p><strong>${key}</strong>: ${JSON.stringify(err[key])}</p>`;
            content.push({ html: mssg });
        }
        const modal = { type: 'extended', content };
        const location = { action: 'set', stack: ['Unhandled Error'] };
        modalService.open(modal, location);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LocationService {
    constructor() {
        this._states = [];
        this._location = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this._locationStack = [];
        this.location$ = this._location.asObservable();
    }
    joinStackAndSend(stack) {
        const location = stack.join(' > ');
        this._location.next(location);
    }
    setStack(stack) {
        if (!stack)
            return;
        this._locationStack = stack;
        this.joinStackAndSend(this._locationStack);
    }
    addItemToStack(stack) {
        this._locationStack = this._locationStack.concat(stack);
        this.joinStackAndSend(this._locationStack);
    }
    changeStackByAction(config) {
        const { action, stack, remove } = config;
        if (action === 'none')
            return;
        // Remove stack if specified
        if (remove) {
            this.removeItemFromStack(remove);
        }
        const actions = {
            set: (stack) => this.setStack(stack),
            add: (stack) => this.addItemToStack(stack)
        };
        actions[action](stack);
    }
    removeItemFromStack(count = 1) {
        this._locationStack.splice(this._locationStack.length - count);
    }
    saveState() {
        // Must be a copy because otherwise methods like pop, slice...
        // will affect the saved state
        this._states.push([...this._locationStack]);
    }
    restoreState() {
        this._locationStack = this._states[this._states.length - 1];
        this.joinStackAndSend(this._locationStack);
        this._states.pop();
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");





class TokenService {
    constructor(api) {
        this.api = api;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.user$ = this._user.asObservable();
        // Check tokens existence
        const refreshToken = localStorage.getItem('refreshToken');
        const accessToken = localStorage.getItem('accessToken');
        if (refreshToken && accessToken) {
            const storedUserData = this.getUserData();
            this._user.next(storedUserData);
        }
        else if (!refreshToken || !accessToken) {
            this.removeTokens();
        }
    }
    setTokens(refreshToken, accessToken) {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        const userJWT = atob(accessToken.split('.')[1]);
        const userParsed = JSON.stringify(JSON.parse(userJWT));
        localStorage.setItem('userData', userParsed);
        this._user.next(JSON.parse(userJWT));
    }
    removeTokens() {
        this._user.next(false);
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
    }
    getUserData() {
        if (this.isLogged()) {
            return JSON.parse(localStorage.getItem('userData'));
        }
        else {
            return false;
        }
    }
    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }
    getAccessToken() {
        return localStorage.getItem('accessToken');
    }
    isLogged() {
        return !!this.getAccessToken();
    }
    getUserId() {
        if (this.isLogged()) {
            return this.getUserData().id;
        }
        else {
            return null;
        }
    }
    isPublisher() {
        const userData = this.getUserData();
        if (userData) {
            return (userData.role == 'publisher' || userData.role == 'admin');
        }
        else {
            return false;
        }
    }
    isAdmin() {
        const userData = this.getUserData();
        if (userData) {
            return userData.role == 'admin';
        }
        else {
            return false;
        }
    }
    refreshToken() {
        const payload = {
            refreshToken: this.getRefreshToken()
        };
        return this.api.post('/tokens/refresh', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.message), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => {
            localStorage.setItem('accessToken', res.accessToken);
        }));
    }
    updateData(newData) {
        const currentUser = this.getUserData();
        const newUser = Object.assign(currentUser, newData);
        localStorage.setItem('userData', JSON.stringify(newUser));
        this._user.next(newUser);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modal/modal.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/modal/modal.service.ts ***!
  \***********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");




class ModalService {
    constructor(locationService, navbarService) {
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
            getCurrent: function () { return this.list[this.list.length - 1]; }
        }; // Store only type name
    }
    /**
     *
     * CLIENT CONTROLS
     *
     */
    // open(type, content, params?, location?, menu?) {
    open(modal, location, responseCb) {
        /*
            Check actives:
              -empty:                            (3)loadContent, (4)displayNew
              - same:            (2)saveContent, (3)loadContent
              - diff: (1)hideOld,                (3)loadContent, (4)displayNew
    
            Before step 3, save location state
            Current modal becomes old
            Requested modal becomes new
         */
        const oldType = this._actives.getCurrent();
        const oldModal = this._modals[oldType];
        const newModal = this._modals[modal.type];
        // (1) Hide old - { different }
        if (!modal.keepOpened && oldType && oldType !== modal.type) {
            // oldModal.wrapper.display = false;
            oldModal.wrapper.hideModal();
        }
        // (2) Save old content - { same }
        if (oldType === modal.type) {
            oldModal.core.saveState();
        }
        // (*3) Save current location before loading new modal
        this.locationService.saveState();
        this.locationService.changeStackByAction(location);
        // (*3) Save navbar menu sate
        this.navbarService.saveState();
        // (3) Load new content & set as active - { empty, same, different }
        newModal.core.loadContent(modal.content);
        this._actives.list.push(modal.type);
        // (4) Display wrapper- { empty, different }
        if (!oldType || oldType !== modal.type) {
            // Assign params
            newModal.wrapper = Object.assign(newModal.wrapper, modal.params);
            // newModal.wrapper.display = true;
            newModal.wrapper.displayModal();
        }
        // Save callback fn that will be used on emitResponse
        this._responses.push(responseCb);
    }
    changeComponent(componentName) {
        const type = this._actives.getCurrent();
        const modal = this._modals[type];
        modal.core.changeComponent(componentName);
    }
    emitResponse(end, res = null) {
        // If no modal opened then return
        if (this._actives.list.length === 0)
            return;
        if (!end) {
            const currentType = this._actives.getCurrent();
            const currentModal = this._modals[currentType];
            currentModal.wrapper.hideModal();
            // Display if previous modal exists
            const previousType = this._actives.list[this._actives.list.length - 2];
            if (previousType) {
                const previousModal = this._modals[previousType];
                previousModal.wrapper.displayModal();
            }
        }
        // Check if response callback fn was given
        const fn = this._responses[this._responses.length - 1];
        // If there is res cb fn and respose, run it
        if (fn && res !== null)
            fn(res);
        // If it is last emit, then close modal
        if (end) {
            const type = this._actives.getCurrent();
            const modal = this._modals[type];
            modal.core.onClose();
        }
    }
    forceClose(count = 1) {
        // Count == 0 -> all list
        const typesList = count === 0 ?
            this._actives.list :
            this._actives.list
                .slice(this._actives.list.length - count)
                .reverse();
        // Important to use a copy, because we are working with a
        // property that after the first iteration will be modified
        for (const type of [...typesList]) {
            // If nothing to close, return
            if (!type)
                return;
            // Trigger onClose()
            // Once the core is clear, it will trigger close()
            // from this service
            const modal = this._modals[type];
            modal.core.onClose();
        }
    }
    closeByType(type) {
        if (!this._actives.list.includes(type))
            return;
        const modal = this._modals[type];
        modal.core.onClose();
    }
    /**
     *
     * TYPEcomponent CONTROLS
     *
     */
    initType(type, component) {
        this._modals[type] = {
            name: type,
            wrapper: component
        };
    }
    // changeContent(newContent, index?) {
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
    initCore(parentType, coreComponent) {
        this._modals[parentType]['core'] = coreComponent;
    }
    close(type) {
        // If nothing to close, return
        if (!type)
            return;
        // Remove response callback
        this._responses.pop();
        // Restore location & menu
        this.locationService.restoreState();
        this.navbarService.restoreState();
        this._actives.list.pop();
        this._responses.pop();
        const previousType = this._actives.getCurrent();
        const previousModal = this._modals[previousType];
        const currentModal = this._modals[type];
        if (!previousType) {
            // currentModal.wrapper.display = false;
            currentModal.wrapper.hideModal();
        }
        else if (previousType === type) {
            previousModal.core.restoreState();
        }
        else if (previousType !== type) {
            // currentModal.wrapper.display = false;
            currentModal.wrapper.hideModal();
            // previousModal.wrapper.display = true;
            previousModal.wrapper.displayModal();
        }
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"])); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"] }, { type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/navbar/navbar.service.ts ***!
  \*************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarService {
    constructor(locationService, router) {
        this.locationService = locationService;
        this.router = router;
    }
    init(component) {
        this.navcomponent = component;
    }
    loadMenu(menu, current) {
        // Check if menu has components or paths
        let idx;
        let locStack = [];
        if (current) {
            if (!menu.trigger.includes(current.component))
                return;
            idx = menu.children.map(c => c.component).indexOf(current.component);
        }
        else {
            idx = menu.selChildIdx;
            // If root name provided, use it do define root location
            if (menu.name) {
                locStack.push(menu.name);
            }
        }
        this.navcomponent.loadCustomMenu(menu.children, idx);
        // Set location only if it is not a reactivation
        if (menu.activated) {
            locStack.push(menu.children[idx].name);
            this.locationService.setStack(locStack);
        }
    }
    changeMenuItem(menuItemIdx) {
        this.navcomponent.changeMenuItem(menuItemIdx);
    }
    saveState() {
        this.navcomponent.saveState();
    }
    restoreState() {
        this.navcomponent.restoreState();
    }
    compareAndSelect(route, skipMenu = false) {
        this.navcomponent.simulation = true;
        const url = this.navcomponent.detectUrl(route);
        this.navcomponent.changeItem(url, skipMenu);
    }
    go(path, skipMenu = false) {
        // Navigate
        this.router.navigate([path]);
        const url = this.navcomponent.detectUrl(path);
        // Change selected navbar item and load menu list
        this.navcomponent.changeItem(url, skipMenu);
        // Change location
        this.locationService.setStack(this.navcomponent.getPathNames(url));
    }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tomas/Documents/webDev/social-media/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map