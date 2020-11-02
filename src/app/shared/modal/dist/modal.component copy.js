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
exports.ModalComponent = void 0;
var core_1 = require("@angular/core");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, resolver, navbarService) {
        var _this = this;
        this.modalService = modalService;
        this.resolver = resolver;
        this.navbarService = navbarService;
        this._modules = {
            AuthModule: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/auth/auth.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).AuthModule];
                    }
                }); }); }
            },
            PostsModule: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/posts/posts.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).PostsModule];
                    }
                }); }); }
            },
            ProfileModule: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/profile/profile.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).ProfileModule];
                    }
                }); }); }
            },
            DashboardModule: {
                "import": function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('src/app/modules/dashboard/dashboard.module'); })];
                        case 1: return [2 /*return*/, (_a.sent()).DashboardModule];
                    }
                }); }); }
            }
        };
        this._states = [];
        this.loaded = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.addFactory(this.mType, this);
        // const content = this.mContent[0]
        // this.loadModule(content.module, content.component); 
    };
    ModalComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var _a;
        if (changes.mContent && !changes.mContent.firstChange) {
            var statesLen = this._states.length;
            var mId = ((_a = changes.mId) === null || _a === void 0 ? void 0 : _a.currentValue) || this.mId;
            // Store data
            if (statesLen < mId) {
                console.log('store');
                var currentVar = {
                    activeModule: this.activeModule,
                    componentFct: this.componentFct,
                    componentRef: this.componentRef,
                    componentName: this.componentName,
                    mContent: changes.mContent.previousValue
                };
                console.log(currentVar.mContent);
                console.warn(this.mContent);
                this.componentRef.destroy();
                this._states.push(Object.assign({}, currentVar));
            }
            // Load component
            if (statesLen <= mId) {
                console.log('load');
                var chngCurrentVal = changes.mContent.currentValue;
                var moduleIndex = chngCurrentVal.map(function (c) { return !!c.module; }).indexOf(true);
                var module_1 = chngCurrentVal[moduleIndex].module;
                var component_1 = chngCurrentVal[moduleIndex].component;
                this.loadModule(module_1, component_1, function (loadedModule) {
                    _this.addParams(_this.mParams);
                    var subMenuList = {
                        name: loadedModule.list.root,
                        children: loadedModule.list.children,
                        selChildIdx: loadedModule.list.children.map(function (v) { return v.component; }).indexOf(component_1)
                    };
                    _this.navbarService.loadSubMenu(subMenuList);
                });
            }
            // Restore data
            if (statesLen > mId) {
                console.log('restore');
                var oldData = this._states[mId];
                this.activeModule = oldData.activeModule;
                // this.mContent = oldData.mContent;
                // this.changeComponent(oldData.componentName)
                // this.createComponent(oldData.componentFct);
                // Retrieve variables for component
                var obj1_1 = this.componentRef.instance;
                var obj2_1 = oldData.componentRef.instance;
                Object.keys(obj2_1).forEach(function (key) {
                    if (key in obj1_1) {
                        obj1_1[key] = obj2_1[key];
                    }
                });
                this._states.pop();
            }
        }
    };
    ModalComponent.prototype.changeMessage = function (index, newContent) {
        // Check if it is possible such change
        if (this.mContent.length <= index || typeof index === 'boolean') {
            this.mContent.push(newContent);
        }
        else if (this.mContent[index].component) {
            console.error('Cannot replace component content');
        }
        else if (this.mContent.length > index) {
            this.mContent[index] = newContent;
        }
        else {
            console.error('Invalid index');
        }
    };
    ModalComponent.prototype.close = function () {
        // this.componentRef.destroy();
        // this.modalService.onClosed();
        // this.displayMessage = false;
        // this.navbarService.close();
        this.modalService.close(this.mType);
    };
    ModalComponent.prototype.loadModule = function (moduleName, componentName, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedModule, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selectedModule = this._modules[moduleName];
                        _a = this;
                        return [4 /*yield*/, selectedModule["import"]()];
                    case 1:
                        _a.activeModule = _b.sent();
                        this.changeComponent(componentName);
                        cb(this.activeModule);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalComponent.prototype.changeComponent = function (componentName) {
        var newContent = this.mContent.map(function (el) {
            if (el.module && el.component !== componentName) {
                return {
                    module: el.module,
                    component: componentName
                };
            }
            else {
                return el;
            }
        });
        this.mContent = Object.assign(this.mContent, newContent);
        this.componentName = componentName;
        var component = this.activeModule.components[componentName];
        this.componentFct = this.resolver.resolveComponentFactory(component);
        this.createComponent(this.componentFct);
    };
    ModalComponent.prototype.createComponent = function (componentFct) {
        this.content.remove();
        this.componentRef = this.content.createComponent(componentFct);
    };
    ModalComponent.prototype.addParams = function (params) {
        Object.assign(this.componentRef.instance, params);
    };
    __decorate([
        core_1.ViewChild('content', { read: core_1.ViewContainerRef })
    ], ModalComponent.prototype, "content");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "mParams");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "mContent");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "mType");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "mId");
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal-core',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
