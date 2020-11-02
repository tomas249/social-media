"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LazyLoaderService = void 0;
var core_1 = require("@angular/core");
var LazyLoaderService = /** @class */ (function () {
    function LazyLoaderService(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
    }
    LazyLoaderService.prototype.loadModule = function (path) {
        var _this = this;
        path()
            .then(function (elementModuleOrFactory) {
            if (elementModuleOrFactory instanceof core_1.NgModuleFactory) {
                // if ViewEngine
                return elementModuleOrFactory;
            }
            else {
                try {
                    // if Ivy
                    return _this.compiler.compileModuleAsync(elementModuleOrFactory);
                }
                catch (err) {
                    throw err;
                }
            }
        })
            .then(function (moduleFactory) {
            try {
                var elementModuleRef = moduleFactory.create(_this.injector);
                var moduleInstance = elementModuleRef.instance;
                // do something with the module...
                console.log(moduleInstance);
                console.log('heelo');
            }
            catch (err) {
                throw err;
            }
        });
    };
    LazyLoaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LazyLoaderService);
    return LazyLoaderService;
}());
exports.LazyLoaderService = LazyLoaderService;
