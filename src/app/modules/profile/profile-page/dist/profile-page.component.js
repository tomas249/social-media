"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProfilePageComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(route, profileService, resolver, locationService, location, token, router) {
        var _this = this;
        this.route = route;
        this.profileService = profileService;
        this.resolver = resolver;
        this.locationService = locationService;
        this.location = location;
        this.token = token;
        this.router = router;
        this.tabs = [{ name: 'Posts' }, { name: 'Replies' }, { name: 'Media' }];
        this.tabsContent = {};
        this.module = {
            Posts: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/posts/posts.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).PostsModule];
                    }
                }); }); },
                component: 'PostsListComponent'
            },
            Media: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/auth/auth.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).AuthModule];
                    }
                }); }); },
                component: 'LogoutComponent'
            }
        };
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var capitalUsername = params.username[0].toUpperCase() + params.username.slice(1).toLowerCase();
            // this.locationService.addChildLoc('Posts', {extend: false, parentLoc: capitalUsername, useNav: false});
            var storedUser = _this.profileService.getStoredUser();
            if (storedUser) {
                _this.user = storedUser;
                _this.profileService.getUserById(storedUser._id).subscribe(function (res) {
                    _this.user = res.data;
                    _this.selectByUrlParam(params);
                });
            }
            else {
                var currentUserId = _this.token.getUserId();
                if (params.username === 'me' && currentUserId) {
                    _this.profileService.getUserById(currentUserId).pipe(operators_1.delay(0)).subscribe(function (res) {
                        _this.user = res.data[0];
                        _this.selectByUrlParam(params);
                    });
                }
                else if (params.username === 'me' && !currentUserId) {
                    _this.router.navigate(['/explore']);
                }
                else {
                    _this.profileService.getUserByUsername(params.username).pipe(operators_1.delay(0)).subscribe(function (res) {
                        _this.user = res.data;
                        // cosole.log(this.user)
                        _this.selectByUrlParam(params);
                    }, function (err) {
                        _this.router.navigate(['/explore']);
                    });
                }
            }
        });
    };
    ProfilePageComponent.prototype.selectByUrlParam = function (params) {
        if (params.tab) {
            this.selectTab(this.tabs.map(function (t) { return t.name.toLowerCase(); }).indexOf(params.tab));
        }
        else {
            this.selectTab(0);
        }
    };
    ProfilePageComponent.prototype.selectTab = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Replies not working yet
                        if (i === 1) {
                            console.error('Replies tab not working yet');
                            return [2 /*return*/];
                        }
                        if (this.selectedTab === i)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.loadModule(this.tabs[i])];
                    case 1:
                        _a.sent();
                        if (this.selectedTab || this.selectedTab === 0) {
                            // this.locationService.removeChildLoc(true);
                            // this.locationService.addChildLoc(this.tabs[i].name, {extend: true});
                        }
                        // this.location.go(this.tabs[i].name);
                        this.selectedTab = i;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePageComponent.prototype.loadModule = function (tab) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedModule, activeModule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedModule = this.module[tab.name];
                        return [4 /*yield*/, selectedModule["import"]()];
                    case 1:
                        activeModule = _a.sent();
                        this.changeComponent(tab.name, activeModule, selectedModule.component);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePageComponent.prototype.changeComponent = function (tabName, loadedModule, componentName) {
        this.tabContent.remove();
        var component = loadedModule.components[componentName];
        var componentFct = this.resolver.resolveComponentFactory(component);
        this.tabsContent[tabName] = this.tabContent.createComponent(componentFct);
        var searchParams = '?parent[size]=0&childLevel=0&owner=' + this.user._id;
        Object.assign(this.tabsContent[tabName].instance, { searchParams: searchParams });
    };
    __decorate([
        core_1.ViewChild('tabContent', { read: core_1.ViewContainerRef })
    ], ProfilePageComponent.prototype, "tabContent");
    ProfilePageComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-page',
            templateUrl: './profile-page.component.html',
            styleUrls: ['./profile-page.component.css']
        })
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;
