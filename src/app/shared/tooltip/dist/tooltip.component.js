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
exports.TooltipComponent = void 0;
var core_1 = require("@angular/core");
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(tooltipService, resolver) {
        var _this = this;
        this.tooltipService = tooltipService;
        this.resolver = resolver;
        this.load = false;
        this.display = false;
        this.y = 0;
        this.x = 0;
        this.offset_X = 0;
        this.offset_Y = 10;
        this.mouseInside = false;
        this.closeEmitted = false;
        this.finishedLoad = false;
        this.wS = 0;
        this.hS = 0;
        this.xS = 0;
        this.yS = 0;
        this.module = {
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
            }
        };
        this.maxH = 0;
    }
    TooltipComponent.prototype.ngOnInit = function () {
        this.tooltipService.add(this);
    };
    TooltipComponent.prototype.open = function (start, x, y) {
        this.display = true;
        var a = this.tooltipContainer.nativeElement.getBoundingClientRect();
        this.maxH = start;
        this.offset_X = -a.width / 2;
        this.x = x + this.offset_X;
        this.y = y + this.offset_Y;
        this.wS = a.width;
        this.hS = this.y - start + this.offset_Y + 30;
        this.xS = this.x;
        this.yS = start - this.offset_Y;
        // console.warn(a)
        // console.log(this.wS, this.hS, this.xS, this.yS)
        this.mouseInside = true;
    };
    TooltipComponent.prototype.onExit = function (event) {
        if (event.y < this.maxH || event.x < this.xS ||
            event.x >= Math.floor(this.xS + this.wS)) {
            this.mouseInside = false;
            this.close();
        }
    };
    TooltipComponent.prototype.onMouseEnter = function () {
        this.mouseInside = true;
    };
    TooltipComponent.prototype.onMouseLeave = function () {
        this.mouseInside = false;
        if (this.closeEmitted) {
            this.close();
        }
    };
    TooltipComponent.prototype.close = function (forceClose) {
        if (forceClose === void 0) { forceClose = false; }
        if ((this.mouseInside || !this.finishedLoad) && !forceClose) {
            this.closeEmitted = true;
            return;
        }
        ;
        if (this.finishedLoad) {
            this.componentRef.destroy();
            this.display = false;
            this.load = false;
        }
        this.closeEmitted = false;
        this.finishedLoad = false;
        this.tooltipService.onClosed();
    };
    TooltipComponent.prototype.loadModule = function (moduleName, componentName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.selectedModule = this.module[moduleName];
                        _a = this;
                        return [4 /*yield*/, this.selectedModule["import"]()];
                    case 1:
                        _a.activeModule = _b.sent();
                        if (this.closeEmitted) {
                            this.close();
                            return [2 /*return*/, false];
                        }
                        this.load = true;
                        this.changeComponent(componentName);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TooltipComponent.prototype.changeComponent = function (componentName) {
        this.content.remove();
        var component = this.activeModule.components[componentName];
        var componentFct = this.resolver.resolveComponentFactory(component);
        this.componentRef = this.content.createComponent(componentFct);
        this.finishedLoad = true;
    };
    TooltipComponent.prototype.addParams = function (params) {
        Object.assign(this.componentRef.instance, params);
    };
    __decorate([
        core_1.ViewChild('tooltipContainer')
    ], TooltipComponent.prototype, "tooltipContainer");
    __decorate([
        core_1.ViewChild('content', { read: core_1.ViewContainerRef })
    ], TooltipComponent.prototype, "content");
    TooltipComponent = __decorate([
        core_1.Component({
            selector: 'app-tooltip',
            templateUrl: './tooltip.component.html',
            styleUrls: ['./tooltip.component.css']
        })
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;
